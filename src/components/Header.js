import React from "react";

const Header = () => {
  const h1Style = {
    textAlign: "center",
    margin: "30px",
  };

  return (
    <header>
      <h1 style={{ h1Style }}>To Do App</h1>
      <p style={{ marginBottom: "15px" }}>Add, Edit or Delete a Todo Item</p>
    </header>
  );
};

export default Header;
