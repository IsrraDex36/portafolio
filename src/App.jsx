import { RouterProvider } from "react-router-dom";
import { appRouter } from "@/routes/AppRouter";

export const App = () => {
  return <RouterProvider router={appRouter} />;
};

