import React from "react";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/with-data";

const MyApp = ({ Component, apollo, pageProps }) => {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  //this exposes the query to the user
  pageProps.query = ctx.query;

  return { pageProps };
};

export default withData(MyApp);
