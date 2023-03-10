<p align="center">
  <img alt="nano logo" src="./static/logo.png" width="64">
</p>
<p align="center">
  🔍 No server setup to use GraphiQL for your Supabase DB.
</p>
<p align="center">
  <img alt="nano logo" src="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=1.0.2&x2=0" width="128">
</p>

## Setup in `app.jsx`

1. Get the `projectID`. Go to https://app.supabase.com/ > Select project > Settings > General Settings > Reference ID.
2. Get the `apiKey`. Go to https://app.supabase.com/ > Select project > Settings > API Settings > Project API Keys > Use the one for `anon`/`public`.
3. Get the `accessToken` for a target user.

## Run it

```
npm start
```

It'll start a dev server, and automatically open to the default port where you can start using GraphiQL.

## Features

- 📦 Uses ViteJS with zero-config instead of Webpack
- 🚫 No eject, because it is already so minimal
- 🚫 No linting
- 🚫 No service worker
- ⚡️ No more waiting for packages over the network when refreshing
