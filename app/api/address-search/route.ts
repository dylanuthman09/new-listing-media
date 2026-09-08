type PhotonProperties = Record<string, unknown>;

const textValue = (value: unknown) => typeof value === "string" ? value.trim() : "";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim() || "";
  if (query.length < 3 || query.length > 120) {
    return Response.json({ suggestions: [] });
  }

  const endpoint = new URL("https://photon.komoot.io/api/");
  endpoint.searchParams.set("q", query);
  endpoint.searchParams.set("limit", "8");
  endpoint.searchParams.set("lang", "en");
  endpoint.searchParams.set("countrycode", "US");
  endpoint.searchParams.append("layer", "house");
  endpoint.searchParams.append("layer", "street");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Geocoder returned ${response.status}`);

    const payload = await response.json() as { features?: Array<{ properties?: PhotonProperties }> };
    const seen = new Set<string>();
    const suggestions = (payload.features || []).flatMap((feature, index) => {
      const properties = feature.properties || {};
      if (textValue(properties.countrycode).toUpperCase() !== "US") return [];

      const houseNumber = textValue(properties.housenumber);
      const street = textValue(properties.street);
      const name = textValue(properties.name);
      const primary = [houseNumber, street].filter(Boolean).join(" ") || name || street;
      const city = textValue(properties.city) || textValue(properties.locality) || textValue(properties.district);
      const state = textValue(properties.state);
      const zip = textValue(properties.postcode);
      const location = [city, state].filter(Boolean).join(", ");
      const secondary = [location, zip].filter(Boolean).join(" ");
      const label = [primary, secondary].filter(Boolean).join(", ");
      const key = label.toLowerCase();
      if (!primary || !secondary || seen.has(key)) return [];
      seen.add(key);

      return [{ id: `${textValue(properties.osm_type)}-${String(properties.osm_id || index)}`, label, primary, secondary, city, state, zip }];
    });

    return Response.json(
      { suggestions },
      { headers: { "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=86400" } },
    );
  } catch {
    return Response.json({ suggestions: [] }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
