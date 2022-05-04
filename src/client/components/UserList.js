import React, { useEffect } from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

const UserList = ({ users, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const renderUser = (users) => {
    return users.map((item, index) => {
      return <li key={item.id}>{item.name}</li>;
    });
  };

  return (
    <div>
      UserList<ul>{renderUser(users)}</ul>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchUser());
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export { loadData };

export default connect(mapStateToProps, { fetchUser })(UserList);
