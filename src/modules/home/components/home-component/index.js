import ClockImage from 'assets/images/clocks.jpg';
import DictionaryImage from 'assets/images/dictionary.jpg';
import React from "react";
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = {};
        return (
            <>
                <ul>
                    <li>React router with lazy loading enabled.</li>
                    <li>Content Security Policy (CSP) headers for preventing XSS attacks.</li>
                    <li>CacheManager class for encrypting data stored in browser's local storage.</li>
                    <li>Implementation of Container pattern.</li>
                    <li>Preconfigured REDUX store with sample implementation of actions, dispatchers and reducers.</li>
                    <li>axios implementation with interceptor for configuring API calls.</li>
                    <li>Pre-configured loader for API calls.</li>
                    <li>lodashWrapper file, containing common lodash methods for reducing the bundle size.</li>
                    <li>Common controls like textbox, select in shared-component folder.</li>
                    <li>Redux-Form implementation for managing form. Connecting forms to redux store, adding form validations and handling various other form actions.</li>
                    <li>Implementation of env files for configuring environment specific values.</li>
                    <li>Bootstrap 3 for styling.</li>
                </ul>

            </>

        );
    }
}

export default HomeComponent;
