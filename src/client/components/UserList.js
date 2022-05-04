import React, { useEffect } from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

const UserList = ({ users, fetchUser }) => {
  useEffect(() => {
    fetchUser();
    console.log("fetch user", fetchUser);
  }, []);

  const renderUser = (users) => {
    return users.map((item, index) => {
      console.log("user list", users, item);
      return <li key={item.id}>{item.name}</li>;
    });
  };

  return (
    <div>
      UserList<ul>{renderUser(users)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserList);
