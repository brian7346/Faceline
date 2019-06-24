import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { getCurrentProfileAction } from "../../actions/profileActions";

const Dashboard = () => {
  let { profile, changeProfile } = useContext(ProfileContext);
  useEffect(() => {
    console.error("ITS CALLED");
    getCurrentProfileAction(changeProfile);
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
