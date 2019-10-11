import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppContainer({ children }) {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 15 }}>
        <Columns>
          <Column isSize={3}>
            <Sidebar />
          </Column>
          {children}
        </Columns>
      </Container>
    </>
  );
}
