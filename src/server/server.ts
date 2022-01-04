// Import express and cors
const express = require("express");
const cors = require("cors");
const codeSystemRouter = require("./terminology/routers/codeSystem");
// start express
const app = express();
// enable cors
app.use(cors());
// accept json input
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json({ extended: true }));
// run at port 3000
const port = 3000;

// TODO: Return a pleasent landing page
app.get("/", (req, res) => {
  return res.json("{hello: world}");
});

app.use("/CodeSystem", codeSystemRouter);

// Listen to port 3000
app.listen(port, () => {
  console.log(`🔥 FHIR server listening at port ${port}`);
});
