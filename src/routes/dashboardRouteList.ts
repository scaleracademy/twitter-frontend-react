import Home from "Pages/home";
import ComponentNotFound from "Components/NotFound/ComponentNotFound";
import { DashboardRouteType } from "Types/index";

export const DashboardRouteList: DashboardRouteType[] = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/not-found",
    exact: true,
    Component: ComponentNotFound,
  },
];
