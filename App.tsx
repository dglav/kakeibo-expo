import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  IconRegistry,
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import HomeScreen from "./components/templates/HomeScreen";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <HomeScreen />
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <BottomNavigationTab title="HOME" />
          <BottomNavigationTab title="PURCHASES" />
        </BottomNavigation>
      </ApplicationProvider>
    </>
  );
}
