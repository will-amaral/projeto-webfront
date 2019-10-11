import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuLabel, MenuList } from 'bloomer';

export default function Sidebar() {
  return (
    <Menu>
      <MenuLabel>Geral</MenuLabel>
      <MenuList>
        <NavLink exact activeClassName='is-active' to='/'>
          Dashboard
        </NavLink>
        <NavLink activeClassName='is-active' to='/alunos'>
          Alunos
        </NavLink>
        <NavLink activeClassName='is-active' to='/professores'>
          Professores
        </NavLink>
        <NavLink activeClassName='is-active' to='/exercicios'>
          Exercícios
        </NavLink>
      </MenuList>
      <MenuLabel>Administração</MenuLabel>
      <MenuList>
        <NavLink activeClassName='is-active' to='/financeiro'>
          Financeiro
        </NavLink>
        <NavLink activeClassName='is-active' to='/mensagens'>
          Mensagens
        </NavLink>
        <NavLink activeClassName='is-active' to='/relatorios'>
          Relatórios
        </NavLink>
      </MenuList>
      <MenuLabel>Configurações</MenuLabel>
      <MenuList>
        <NavLink activeClassName='is-active' to='/perfil'>
          Meu Perfil
        </NavLink>
        <NavLink activeClassName='is-active' to='/conta'>
          Minha Conta
        </NavLink>
        <NavLink activeClassName='is-active' to='/ajuda'>
          Ajuda
        </NavLink>
      </MenuList>
    </Menu>
  );
}
