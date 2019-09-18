import React from 'react'
import App from 'next/app'
import AppContainer from '../components/AppContainer';
import Master from '../components/Master';
import { withRouter } from 'next/router'
import '../styles.scss';

class MyApp extends App {
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
                <Component {...pageProps} />
            </AppContainer>
        </Master>
    );
  }
}

export default withRouter(MyApp)