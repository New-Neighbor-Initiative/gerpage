import { useEffect, useState } from 'react';
import { fetchActivities, fetchParksByActivity, fetchParkByCode } from '../api/nps';

type Activity = {
  id: string;
  name: string;
  [key: string]: any;
};

type Park = {
  parkCode: string;
  [key: string]: any;
};

type Props = {
  onActivitySelected: (activity: Activity, parks: Park[]) => void;
};

function ActivitySearch({ onActivitySelected }: Props) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filtered, setFiltered] = useState<Activity[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const data = await fetchActivities();
      setActivities(data);
      setFiltered(data);
    }
    load();
  }, []);

  useEffect(() => {
    const s = search.toLowerCase();
    setFiltered(
      activities.filter(a => a.name.toLowerCase().includes(s))
    );
  }, [search, activities]);

  const handleClick = async (activity: Activity) => {
    const activityParks = await fetchParksByActivity(activity.id);
    const allParks = activityParks.flatMap((ap: any) => ap.parks);

    const seen = new Set();
    const parks = [];
    for (const p of allParks) {
      if (!seen.has(p.parkCode)) {
        seen.add(p.parkCode);
        parks.push(p);
      }
    }  
    onActivitySelected(activity, parks);
  };

  return (
    <div className="activities-container">

      <input
        className="search-input"
        placeholder="Search activities…"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="activities-grid">
        {filtered.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <img
              className="activity-image"
              src={`${import.meta.env.VITE_PUBLIC_URL}/icons/${activity.name.toLowerCase().replace(/ /g, "_")}.svg`}
              alt={activity.name.toLowerCase().replace(/ /g, "_")}
            />


            <button
              className="activity-button"
              onClick={() => handleClick(activity)}
            >
              {activity.name}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}  

export default ActivitySearch;