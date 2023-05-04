// - Import the `useSWR` hook, write a fetcher for it and fetch the route `/api/random-character`.
// - Adapt the return statement to display the `data` on screen.
// - Open the browser: the home page under `/` should now show your fetched data!

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);

  if (data) {
    return (
      <>
        <h1>Character</h1>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Twitter Name: {data.twitterName}</p>
        <p>Geohash: {data.geohash}</p>
      </>
    );
  }
}
