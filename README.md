# Delivery Tracking API

Express API for creating and tracking deliveries.

## Prerequisites

- Node.js 18 or later
- A MongoDB database (local or Atlas)

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and set the values:

| Variable | Required | Purpose |
|---|---|---|
| `MONGO_URI` | Yes | MongoDB connection string |
| `PORT` | No | Server port. Defaults to `3000` |
| `JWT_SECRET` | Yes for auth | Secret used to sign JSON web tokens |
| `NODE_ENV` | No | `development` or `production` |

The server will not listen until MongoDB connects. If `MONGO_URI` is missing or the connection fails, the process exits.

## Scripts

```bash
npm run dev    # start with nodemon
npm start      # start without nodemon
npm test       # run API tests
```

## Check that it is running

- `GET http://localhost:3000/` — welcome message
- `GET http://localhost:3000/health` — `{ "status": "ok", "db": "connected" }`

Unknown routes return JSON `404`. Invalid JSON bodies return JSON `400`.
