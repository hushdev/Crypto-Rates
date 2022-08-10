import React from "react";
import MarketCapTopList from "./components/MarketCapTopList/MarketCapTopList";
import SavedCoins from "./components/SavedCoins/SavedCoins";

const Dashboard = () => {
  return (
    <div>
      <SavedCoins />
      <MarketCapTopList />
    </div>
  );
};

export default Dashboard;
