import React, { useEffect } from "react";
import Skill from "./Skill";
import { handleSkillWaypointEnter } from "./SkillLogic";

const SkillView = () => {
  useEffect(() => {
    // Appel de la fonction handleSkillWaypointEnter lors du montage du composant
    handleSkillWaypointEnter();
  }, []);

  return <Skill />;
};

export default SkillView;
