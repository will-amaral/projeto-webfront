import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Alunos from '../components/Alunos';
import Professores from '../components/Professores';
import PerfilAluno from '../components/PerfilAluno';
import PerfilProfessor from '../components/PerfilProfessor';
import Placeholder from './Placeholder';
import Login from '../components/Login';
import RecoverPassword from '../components/RecoverPassword';
import PrivateRoute from './PrivateRoute';

export default function Routes(props) {
  return (
    <Switch>
      <PrivateRoute exact path='/' component={Dashboard} props={props} />
      <PrivateRoute exact path='/alunos' component={Alunos} props={props} />
      <PrivateRoute path='/alunos/:id' component={PerfilAluno} props={props} />
      <PrivateRoute exact path='/professores' component={Professores} props={props} />
      <PrivateRoute path='/professores/:id' component={PerfilProfessor} props={props} />
      <PrivateRoute exact path='/exercicios' component={Placeholder} props={props} />
      <PrivateRoute exact path='/financeiro' component={Placeholder} props={props} />
      <PrivateRoute exact path='/mensagens' component={Placeholder} props={props} />
      <PrivateRoute exact path='/relatorios' component={Placeholder} props={props} />
      <PrivateRoute exact path='/perfil' component={Placeholder} props={props} />
      <PrivateRoute exact path='/conta' component={Placeholder} props={props} />
      <PrivateRoute exact path='/ajuda' component={Placeholder} props={props} />
      <Route path='/login' component={Login} />
      <Route path='/recuperar-senha' component={RecoverPassword} />
    </Switch>
  );
}
