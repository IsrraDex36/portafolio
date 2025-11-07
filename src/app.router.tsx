import { createBrowserRouter, Navigate } from "react-router-dom";
import Principal from "./pages/Principal"; 
import { lazy } from "react";

const Proyectos = lazy(() => import("./pages/Proyectos"));
const Certificaciones = lazy(() => import("./pages/Certificaciones"));


export const appRouter = createBrowserRouter([
  {
    /* Ruta por defecto al entrar a la pagina */
    path: "/",
    element: <Principal />,
  },

  /* Rutas de proyectos */
  {
    path: "/proyectos",
    element: <Proyectos />,
  },

  /* Ruta proyectos */
  {
    path: "/certificaciones",
    element: <Certificaciones />,
  },
  
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  
  
]);
