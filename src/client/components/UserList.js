import React, { useEffect } from "react";
import { fetchUser } from "../actions";

const UserList = () => {
  useEffect(() => {
    // fetchUser();
    console.log("fetch user");
  }, []);
  return <div>UserList</div>;
};

export default UserList;
