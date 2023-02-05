import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import ReactDOM from "react-dom";

import "graphiql/graphiql.css";

const projectID = "YOUR_SUPABASE_PROJECT_ID";
const apiKey = "YOUR_SUPABASE_API_KEY";
const accessToken = "YOUR_ACCESS_TOKEN";

const fetcher = createGraphiQLFetcher({
  url: `https://${projectID}.supabase.co/graphql/v1`,
  headers: {
    apiKey,
    Authorization: `Bearer ${accessToken}`,
  },
});

export default ReactDOM.render(<GraphiQL fetcher={fetcher} />, document.body);
