import React from "react";
import { useRoutes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Personal from "./pages/user/Personal";
import About from "./pages/about";
import Menus from "./components/menus";

export const routesConfig = [
  {
    path: '/',
    exact: true,
    title: '首页',
    component: Home,
    element: <Home />
  },
  {
    path: '/personal',
    exact: true,
    title: '个人中心',
    component: Personal,
    element: <Personal />
  },
  {
    path: '/about',
    exact: true,
    title: '关于',
    component: About,
    element: <About />
  }
];


const Routes = () => {
  const menus = routesConfig.map(item => ({path: item.path, title: item.title}));
  const element = useRoutes(routesConfig);

  return (
    <>
      <Menus menus={menus} />
      {element}
    </>
  )
}



export default Routes;