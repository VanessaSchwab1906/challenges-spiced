// - Import the server from the [`server.js`](./server.js) file.
// - Call the `.listen()` method on the server and pass it a port number you want to listen to, e.g. 8000.

import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(`Server runnin at http:127.0.0.1:${port}/`);
});
