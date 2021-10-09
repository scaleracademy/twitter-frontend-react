import { Redirect, Route, Switch } from "react-router";

import ComponentNotFound from "Components/NotFound/ComponentNotFound";

import { DashboardRouteList } from "./dashboardRouteList";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      {DashboardRouteList.map(
        ({ path, Component = ComponentNotFound, exact = true }) => (
          <Route
            key={path}
            render={(props) => <Component {...props} />}
            path={path}
            exact={exact}
          />
        )
      )}
      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;
