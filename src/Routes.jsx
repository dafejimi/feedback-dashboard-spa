import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../src/pages/NotFound";
import Frame from "../src/pages/Frame";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Frame /> },
    { path: "*", element: <NotFound /> },
  ]);
  
  return element;
};

export default ProjectRoutes;
