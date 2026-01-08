const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = import.meta.env.VITE_APP_NPS_API_KEY;

async function npsFetch(path: string, params = {}) {
    const url = new URL(`${BASE_URL}${path}`);
  
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value as any);
      }
    });
  
    const res = await fetch(url.toString(), {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
  
    if (!res.ok) {
      throw new Error(`NPS API error: ${res.status}`);
    }
  
    const data = await res.json();
    return data.data;
  }

  export async function getAllParkNames() {
    const url = `${BASE_URL}/parks?api_key=${API_KEY}&limit=500`;
  
    const res = await fetch(url);
    if (!res.ok){
      throw new Error("Failed to fetch NPS parks.");
    } 
  
    const data = await res.json();
  
    return data.data.map((park: any) => park.fullName);
  }
  
  
export async function fetchActivities() {
    return npsFetch('/activities', { limit: 100 });
  }
  
export async function fetchParksByActivity(activityId: any) {
    return npsFetch('/activities/parks', { id: activityId });
  }
  
export async function fetchParkByCode(parkCode: any) {
    const data = await npsFetch('/parks', { parkCode });
    return data[0];
  }  