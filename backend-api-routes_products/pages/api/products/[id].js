import { getProductById } from "services/productServices";

// import the `getProductById` function from `/services/productServices.js`.
//  - Write a handler function which responds
//   - with a `200` status code and
//   - with the return value of `getProductById()`, parsed with the `.json()` method.
//   - To access the `id` from the url, destructure the `id` variable from `request.query` and pass `id` as argument to `getProductById(id)`.

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  //   console.log(product);
  response.status(200).json(product);
}
