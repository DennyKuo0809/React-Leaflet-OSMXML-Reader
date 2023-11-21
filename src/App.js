import React from 'react';
import MapWrapper from './MapComponent';

function App() {
  return (
    <div className="App">
      <h1>React Leaflet Map</h1>
      <MapWrapper xmlFile="lanelet2_map.osm" center={[35.23808753540768, 139.9009591876285]}/>
    </div>
  );
}

export default App;
