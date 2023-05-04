import { createServer } from "node:http";

// - if the requested url is `/api/fish/1`, the response should be `"Shrimp"` and the status code should be `200`;
// - if the requested url is `/api/fish/2`, the response should be `"Anemonefish"` and the status code should be `200`;
// - for all other urls, the response should be `"Not found"` and the status code should be `404`.

export const server = createServer((request, response) => {
  switch (request.url) {
    case "/api/fish/1":
      response.statusCode = 200;
      response.end("Shrimp");
      break;
    case "/api/fish/2":
      response.statusCode = 200;
      response.end("Anemonefish");
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
      break;
  }
});
