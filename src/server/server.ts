// Import express and cors
const express = require("express");
const cors = require("cors");
// start express
const app = express();
// enable cors
app.use(cors());
// run at port 3000
const port = 3000;

// TODO: Return a pleasent landing page
app.get("/", (req, res) => {
  return res.json("{hello: world}");
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`🔥 FHIR server listening at port ${port}`);
});
