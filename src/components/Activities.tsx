import React, { useState } from "react";
import ActivitySearch from "./ActivitySearch";
import ParkList from "./Parklist";
import ParkDetails from "./ParkDetails";
import { fetchParkByCode } from "../api/nps";


type Activity = {
  id: string;
  name: string;
  [key: string]: any;
};

type Park = {
  id?: string;
  parkCode: string;
  fullName?: string;
  states?: string;
  [key: string]: any;
};

function Activities(){
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [parks, setParks] = useState<Park[]>([]);
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  return (
    <div className="activities-section" id="activities-section">

      <h2 className="title">ACTIVITIES</h2>

        {/* STATE 1 */}
        {!selectedActivity && (
          <ActivitySearch
            onActivitySelected={(activity, parks) => {
              setSelectedActivity(activity);
              setParks(parks);
            }}
          />
        )}

        {/* STATE 2 */}
        {selectedActivity && !selectedPark && (
          <ParkList
            activity={selectedActivity}
            parks={parks}
            onBack={() => {
              setSelectedActivity(null);
              setParks([]);
            }}
            onSelectPark={async (parkStub: { parkCode: any; }) => {
              const fullPark = await fetchParkByCode(parkStub.parkCode);
              setSelectedPark(fullPark);
            }}            
          />
        )}

        {/* STATE 3 */}
        {selectedPark && (
          <ParkDetails
            park={selectedPark}
            onBack={() => setSelectedPark(null)}
          />
        )}

      </div>
  );
}

export default Activities;
