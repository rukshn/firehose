import express = require("express");
const Router = express.Router();
const controller = require("../controllers/codeSystemController");

Router.post("/", async (req, res) => {
  // grab the post content
  let content = req.body;
  // send the request to controller to create a new resource
  let createResource = await controller.createCodeSystem(content);
  if (createResource.status === "error") {
    return res.status(500).json(createResource.error);
  } else {
    return res.json(createResource.resource);
  }
});

Router.get("/", (req, res) => {
  return res.json("codeSystem endpoint");
});

module.exports = Router;
