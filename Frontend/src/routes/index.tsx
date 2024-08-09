import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "./Layout";
import AchievementsSkillsPage from "../pages/AchievementsSkillsPage/AchievementsSkills";
import ProjectPage from "../pages/ProjectsPage/ProjectsPage";
import Page2016 from "../pages/AchievementsByYear/2016";
import Page2017 from "../pages/AchievementsByYear/2017";
import Page2018 from "../pages/AchievementsByYear/2018";
import Page2019 from "../pages/AchievementsByYear/2019";
import MikeProfilePage from "../pages/MikeProfile/MikeProfilePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "personal",
            element: <MikeProfilePage />,
          },
          {
            path: "projects",
            element: <ProjectPage />,
          },
          {
            path: "achievements",
            element: <AchievementsSkillsPage />,
          },
          {
            path: "achievements/2016",
            element: <Page2016 />,
          },
          {
            path: "achievements/2017",
            element: <Page2017 />,
          },
          {
            path: "achievements/2018",
            element: <Page2018 />,
          },
          {
            path: "achievements/2019",
            element: <Page2019 />,
          },
        ],
      },
    ],
  },
]);

export default router;
