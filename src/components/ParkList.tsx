interface Activity {
    name: string;
}

interface Park {
    parkCode: string;
    fullName: string;
    states: string;
}

interface ParkListProps {
    activity: Activity;
    // Use a permissive type here to avoid mismatches between different local `Park` types.
    // This keeps the component compatible with the `parks` array created in Activities.tsx.
    parks: any[];
    onBack: () => void;
    onSelectPark: (park: any) => void;
}

function ParkList({ activity, parks, onBack, onSelectPark }: ParkListProps) {
    return (
      <div>
        <button onClick={onBack} className="back_button">← Back to activities</button>
        <h2 className="park_title">Parks with: {activity.name}</h2>
  
        <ul className="park-list">
          {parks.map(park => (
            <li key={park.parkCode}>
              <button onClick={() => onSelectPark(park)}>
                {park.fullName} ({park.states})
              </button>
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
  
  export default ParkList;
  