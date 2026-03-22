import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home/Home";
import Coverage from "../pages/coverage/Coverage";
import Story from "../pages/aboutUs/AboutUs/Story";
import Mission from "../pages/aboutUs/AboutUs/Mission";
import Success from "../pages/aboutUs/AboutUs/Success";
import Team from "../pages/aboutUs/AboutUs/Team";
import AboutLayout from "../layout/AboutLayout";
import PageNotFound from "../components/error/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/coverage',
          Component:Coverage,
          loader: ()=>fetch("/utilits/serviceCenters.json").then(res=>res.json())
        },
        {
          path:'/about-us',
          Component:AboutLayout,
          children:[
            {
              index:true,
              
              Component:Story
            },
            {
              
              path:'/about-us/story',
              Component:Story
            },
            {
              path:'/about-us/mission',
              Component:Mission
            },
            {
              path:'/about-us/success',
              Component:Success
            },
            {
              path:'/about-us/team-and-others',
              Component:Team
            },
          ]
        },
        {
          path:'/*',
          Component:PageNotFound
        }

    ]
  },
]);