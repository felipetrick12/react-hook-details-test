import React, { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

export default function MainApp() {
    const [value, setValue] = useState({});
  return (
    <UserContext.Provider value={{
        value,
        setValue
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
}
