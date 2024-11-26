import app from "./src/server.js";
const port = 3310;

app.listen(port, () => {
  console.info(`server started at : http://localhost:${port}`);
});