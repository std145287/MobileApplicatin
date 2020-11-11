import React, { useState } from "react";
import MapView, { Marker }  from "react-native-maps";

const App = () => {
  const [region, setRegion] = useState({
          latitude: 40.632303,
          longitude: 22.946980,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
  });

  return (
    <MapView style={styles.map}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      >
      <MapView.Marker
        coordinate={{latitude: 40.632303,
        longitude: 22.946980}}
        title={"title"}
        description={"description"}
      />
    </MapView>
  );
};

export default App;

