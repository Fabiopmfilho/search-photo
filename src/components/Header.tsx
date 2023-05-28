import React from "react";
import Form from "./Form";

const Header = ({ history, handleSubmit }: any) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Header;