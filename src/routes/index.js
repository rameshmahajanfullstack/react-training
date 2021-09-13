import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Containers from '../containers'
import Components from '../components'

function Routes() {
    return (
        <BrowserRouter>
            <Components.Header />

            <Switch>

                <Route name="About" path="/about" component={Containers.About} />

                <Route name="Contact" path="/contact" component={Containers.Contact} />

                <Route name="Projects" path="/projects" component={Containers.Projects} />

                <Route name="Services" path="/services" component={Containers.Services} />

                <Route name="Thank You" path="/thank-you" component={Containers.ThankYou} />

                <Route name="Home" path="/" component={Containers.Home} />

            </Switch>

            <Components.Footer />
        </BrowserRouter>
    )
}

export default Routes