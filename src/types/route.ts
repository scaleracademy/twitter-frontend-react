import { RouteComponentProps } from "react-router";

export interface DashboardRouteType {
  path: string;
  Component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | undefined;
  exact?: boolean;
}
