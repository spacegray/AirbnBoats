const router = require("express").Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

//Commented out until I get the csrf token and server working

// fetch("/api/test", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`,
//   },
//   body: JSON.stringify({ hello: "world" }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));


module.exports = router;
