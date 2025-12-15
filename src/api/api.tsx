import aboutUs from '../data/about_us.json'
import contact from '../data/contact.json'
import eventDetails from '../data/event_details.json'
import newYearsEvents from '../data/new_years_events.json'
import team from '../data/team.json'

const dataMap: Record<string, any> = {
  "/data/about_us.json": aboutUs,
  "/data/contact.json": contact,
  "/data/event_details.json": eventDetails,
  "/data/new_years_events.json": newYearsEvents,
  "/data/team.json": team,
};

export function fetch(
  input: string | URL | Request,
  _init?: RequestInit
): Promise<Response> {
  let url: string;
  if (typeof input === "string") {
    url = input;
  } else if (input instanceof URL) {
    url = input.pathname;
  } else {
    url = typeof input.url === "string" ? input.url : "";
  }

  // Only handle paths that match our dataMap
  const json = dataMap[url];
  if (!json) {
    return Promise.resolve(
      new Response("Not found", { status: 404, statusText: "Not Found" })
    );
  }

  const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
  const response = new Response(blob, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  return Promise.resolve(response);
}