import React from "react";
import Page from "../components/Page";

const MyApp = ({ Component }) => {
  return (
    <Page>
      <Component />
    </Page>
  );
};

export default MyApp;
