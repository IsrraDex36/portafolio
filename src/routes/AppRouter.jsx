import { createBrowserRouter, Navigate } from "react-router-dom";
import Principal from "@/features/home/Principal";
import { lazy } from "react";

const Proyectos = lazy(() => import("@/features/projects/Proyectos"));
const Certificaciones = lazy(() => import("@/features/certifications/Certificaciones"));


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
