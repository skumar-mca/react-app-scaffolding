import CustomLoader from 'components/loader-component/index';
import AppMenu from 'components/app-menu-component/index';
import HomeComponent from 'modules/home/containers/home.container';
import InfoComponent from 'modules/info/index';
import React, { Suspense, lazy } from 'react';
import { Switch } from "react-router";
import { HashRouter, Route } from "react-router-dom";
const IntroductionRoutes = lazy(() => { return import("./chunks/intro.chunk"); });

export const AppRoutes = (props) => {
    return (
        <HashRouter>
            <Switch>
                <div>
                    <AppMenu />
                    <Suspense fallback={<CustomLoader />}>
                        <Route exact path="/" component={HomeComponent} />
                        <Route path="/info" component={InfoComponent} />
                        <Route path="/introduction" component={IntroductionRoutes} />
                    </Suspense>
                </div>
            </Switch>
        </HashRouter>
    )
}

export default AppRoutes;