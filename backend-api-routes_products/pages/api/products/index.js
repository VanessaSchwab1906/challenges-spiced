import { getAllProducts } from "services/productServices";

// - Write a handler function which responds
//   - with a `200` status code and
//   - with the return value of `getAllProducts`, parsed with the `.json()` method.
// - run `npm run dev` and
// - switch to the browser and open `/api/products`: you should now see an array of all products.

export default function handler(request, response) {
  const products = getAllProducts();
  response.status(200).json(products);
}
