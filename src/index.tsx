import { Hono } from "hono";
import { Page } from "./components/Page";

const app = new Hono();

app.get("/", (context) => {
  return context.html(<Page />);
});

export default app;
