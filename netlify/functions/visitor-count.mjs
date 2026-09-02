import { getStore } from "@netlify/blobs";

// Offset so a fresh deploy doesn't display single-digit counts.
const BASE_COUNT = 523;

export default async () => {
  const store = getStore("site-stats");
  const visits = Number((await store.get("visits")) ?? 0) + 1;
  await store.set("visits", String(visits));
  return Response.json({ count: BASE_COUNT + visits });
};

export const config = { path: "/api/visitor-count" };
