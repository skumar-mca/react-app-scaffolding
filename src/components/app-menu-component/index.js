import React from 'react';
import { Link } from 'react-router-dom';

export default function AppMenu() {
    return (
        <>
            <div class="container">
                <div class="navbar-header">
                    <button aria-controls="bs-navbar" aria-expanded="false" class="collapsed navbar-toggle" data-target="#bs-navbar" data-toggle="collapse" type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link to="/" class="navbar-brand">React App Scaffolding</Link>
                </div> <nav class="collapse navbar-collapse" id="bs-navbar">
                    <ul class="nav navbar-nav">
                        <li> <Link to="/introduction/form">Forms</Link> </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
