import { createMemoryRouter } from "react-router-dom";
import Auth from "../container/Auth/Auth";

const appRouter = createMemoryRouter([
    {
      path: "/",
      element:  <Auth />,
    },
  ]);

export default appRouter