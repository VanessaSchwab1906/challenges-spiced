import { useRouter } from "next/router";
import useSWR from "swr";

// - Use the `useRouter` hook to access the `id` query parameter from `router.query`.
// - Fetch from `/api/products/[id]` (you need to interpolate the query `id` accordingly).
// - The return statement does not return a list, but a single product.

// Switch to the browser and open `/products/[someId]`: you should now see the product with the id you've passed in the url.

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`, fetcher);

  if (data) {
    return (
      <>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </>
    );
  }
}
