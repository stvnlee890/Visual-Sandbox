import React, { useState, useEffect } from "react";

const NavContext = React.createContext({});

export const NavContextProvider = (props) => {
  const [link, setLink] = useState("About");
  return (
    <NavContext.Provider
      value={{ link: link, setLink: setLink }}
    >{props.children}</NavContext.Provider>
  );
};

export default NavContext