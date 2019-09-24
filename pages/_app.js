/**
 * Este arquivo é o template para todas as páginas. Aqui importamos o React,
 * evitando essa importação nos outros arquivos. A Classe App é fornecida
 * pelo next. Essa classe recebe como propriedades (props), o Componente (a página)
 * inicial, e todos as suas propriedades individuais, bem como um objeto de rotas.
 * Aqui importamos os estilos globais para toda a aplicação, o AppContainer,
 * que contém os componentes imutáveis e o componente Master, que contém as configurações
 * de metatags. 
 * 
 * As páginas que não utilizam o container da aplicação são retornadas após a verificação
 * por meio das rotas.
 */

import React from 'react'
import App from 'next/app'
import AppContainer from '../components/AppContainer';
import Master from '../components/Master';
import '../styles.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname === '/login' || router.pathname === '/recuperar-senha') {
        return (
            <Master>
                <Component {...pageProps} />
            </Master>
        )
    }

    return (
        <Master>
            <AppContainer>
                <Component {...pageProps } />
            </AppContainer>
        </Master>
    );
  }
}