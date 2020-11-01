import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import CustomLoader from "components/loader-component/index";
import FolderStructureComponent from 'modules/introduction/containers/forms.container';

const IntroRoutes = (props) => (
    <div>
        <Suspense fallback={<CustomLoader />}>
            <Route path='/introduction/form' exact component={FolderStructureComponent} />
        </Suspense>
    </div>
)

export default IntroRoutes;
