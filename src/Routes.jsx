import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from 'components/Layout/Dashboard';
import { LoadingScreen } from 'components';
import { AuthRoute, GuestRoute } from 'components/Auth';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path='/404' component={lazy(() => import('components/Error404'))} />
        <GuestRoute
          exact
          path='/login'
          component={lazy(() => import('pages/Auth/Login'))}
        />
        <AuthRoute
          path='/'
          render={(props) => (
            <Dashboard {...props}>
              <Suspense fallback={<LoadingScreen />}>
                <Switch>
                  <Redirect exact from='/' to='/home' />
                  <Route
                    exact
                    path='/home'
                    component={lazy(() => import('pages/Home'))}
                  />
                  <Route
                    exact
                    path='/gerenciamento/alunos'
                    component={lazy(() => import('pages/Gerenciamento/Alunos/List'))}
                  />
                  <Route
                    exact
                    path='/gerenciamento/instrutores'
                    component={lazy(() => import('pages/Gerenciamento/Instrutores/List'))}
                  />
                  <Route
                    exact
                    path='/gerenciamento/relatorios'
                    component={lazy(() => import('pages/Gerenciamento/Relatórios'))}
                  />
                  <Route component={lazy(() => import('pages/Blank'))} />
                </Switch>
              </Suspense>
            </Dashboard>
          )}
        />
        <Redirect to='/404' />
      </Switch>
    </Suspense>
  );
}

export default Routes;
