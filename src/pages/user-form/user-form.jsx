import React from "react";
import "./user-form.styles.scss";
import SignIn from "../../components/sign-in/sign-in";
import PropTypes from "prop-types";

function UserFormPage(props) {
  return (
    <div className="user-form">
      <SignIn />
    </div>
  );
}

UserFormPage.propTypes = {};

export default UserFormPage;
