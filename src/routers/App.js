import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Proyectos from '../containers/Proyectos';
import Contacto from '../containers/Contacto';
import Design from '../containers/Design';
import Arquitectura from '../containers/Arquitectura';
import Ingenieria from '../containers/Ingenieria';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/proyectos' component={Proyectos} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/diseño' component={Design} />
        <Route exact path='/ingenieria' component={Ingenieria} />
        <Route exact path='/arquitectura' component={Arquitectura} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
