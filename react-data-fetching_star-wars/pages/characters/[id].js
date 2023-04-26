import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

//TASK I
// - fetch only the first character using https://swapi.dev/api/people/1;
// - instead of the hard coded `/1`, interpolate the `id` variable.
// - implement a loading state;
// - to implement a proper error state based on an error object, you need to adapt the fetcher function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
// - Adapt the return statement so that you pass the correct fetched data to the `Card` component.
// - When you are done, reload the browser with `characters/1`: it should now return the fetched data of Luke Skywalker.
// - Note: Because we declared the `id` variable with `1`, it's currently not possible to fetch another character by changing the url to, e.g., `characters/2`. We will fix this when implementing dynamic routes in the next step.

// TASK II
// - Rename the `/pages/characters/1.js` file into `/pages/characters/[id].js`.
// - Replace the variable `const id = 1`: use the `useRouter` hook to access the `id` from `router.query`.
// - Check the browser again: `localhost:3000/characters/1` should now return Luke Skywalker as well, while changing the `id` parameter should return a different character.
// - Go back to the overview page [`pages/index.js](./pages/index.js): now, all links should fetch and display the correct character.

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  // const id = 1;
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  console.log("data:", { data });

  if (isLoading) return <div>Is loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
