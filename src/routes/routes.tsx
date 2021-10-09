import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

import { getUserDetails } from "Actions/userDetailActions";
import ComponentNotFound from "Components/NotFound/ComponentNotFound";

import { DashboardRouteList } from "./dashboardRouteList";

const Routes = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

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
