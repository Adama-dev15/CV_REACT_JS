import React, { useEffect } from "react";
import { handlePortfolioWaypointEnter } from "./LogicPortfolio";
import Portfolio from "./Portfolio";

const PortfolioView = () => {
  useEffect(() => {
    // Appel de la fonction handlePortfolioWaypointEnter lors du montage du composant
    handlePortfolioWaypointEnter();
  }, []);

  return <Portfolio />;
};

export default PortfolioView;
