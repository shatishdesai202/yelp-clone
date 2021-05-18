import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";

import { RestaurantContextProvider } from "./context/RestaurantContext";

import Home from "./routeComponent/Home";
import ReviewRestaurant from "./routeComponent/ReviewRestaurant";
import UpdateRestaurantForm from "./routeComponent/UpdateRestaurantForm";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div>
        <Routers>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id/update" component={UpdateRestaurantForm} />
            <Route exact path="/review/:id" component={ReviewRestaurant} />
          </Switch>
        </Routers>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
