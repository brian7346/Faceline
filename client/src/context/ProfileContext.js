import React, { useReducer } from "react";
import { profileReducer, initialState } from "../reducers/profileReducer";

let ProfileContext = React.createContext();

const ProfileProvider = props => {
  let [profile, changeProfile] = useReducer(profileReducer, initialState);
  let value = { profile, changeProfile };
  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
