import React, { useEffect } from "react";
import OneSignal from "react-onesignal";

const App = () => {
  useEffect(() => {
    OneSignal.init({ appId: "c91eb99a-11f6-4f19-a6bf-a75d4e363041" });
  });

  return <>App</>;
};

export default App;
