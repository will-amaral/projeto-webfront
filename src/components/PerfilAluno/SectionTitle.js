import React from 'react';
import { Subtitle } from 'bloomer';
import styles from '../styles';

export default function SectionTitle({ children }) {
  return (
    <>
      <Subtitle style={styles.sectionTitle} isSize={6}>
        {children}
      </Subtitle>
      <div style={styles.separator} />
    </>
  );
}
