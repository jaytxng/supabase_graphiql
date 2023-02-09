import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import ReactDOM from "react-dom";

import "graphiql/graphiql.css";

// Will use AUTHENTICATED role by default but if you comment it out in `info`, it'll default to
// empty string which is equivalent to ANON role.

const info = {
  // Get local info from supabase cli with command `supabase status`
  local: {
    projectURL: "http://localhost:54321/graphql/v1",
    apiKey: "<LOCAL_API_KEY>",
    accessToken: "<ACCESS_TOKEN>",
  },
  staging: {
    projectURL: "https://<SUPABASE_PROJECT_ID>.supabase.co/graphql/v1",
    apiKey: "<REMOTE_API_KEY>",
    accessToken: "<ACCESS_TOKEN>",
  },
  production: {
    projectURL: "https://<SUPABASE_PROJECT_ID>.supabase.co/graphql/v1",
    apiKey: "<REMOTE_API_KEY>",
    accessToken: "<ACCESS_TOKEN>",
  },
};

const stage = "local";

const fetcher = createGraphiQLFetcher({
  url: info[stage].projectURL,
  headers: {
    apiKey: info[stage].apiKey,
    Authorization: `Bearer ${info[stage].accessToken || ""}`,
  },
});

export default ReactDOM.render(<GraphiQL fetcher={fetcher} />, document.body);
