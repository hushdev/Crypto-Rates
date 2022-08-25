import React from "react";
import MarketCapTopList from "./MarketCapTopList/MarketCapTopList";
import SavedCoins from "./SavedCoins/SavedCoins";

const Dashboard = () => {
  return (
    <div>
      <SavedCoins />
      <MarketCapTopList />
    </div>
  );
};

export default Dashboard;
