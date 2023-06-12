import useSWR from "swr";

// - Import the `useSWR` hook, create a fetcher and fetch `/api/products`.
// - Map over the fetched `data` object to create a list of all products where you display their information.
// - Switch to the browser and open `/products`: you should now see a (rarely styled) list of all products.

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsPage() {
  const { data } = useSWR("/api/products", fetcher);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  if (data) {
    return (
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    );
  }
}
