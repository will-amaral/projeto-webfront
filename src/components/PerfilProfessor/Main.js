import React from 'react';
import { Box, Image, Title, Subtitle, Tag } from 'bloomer';
import styles, { color } from '../styles';

export default function Main({ user }) {
  const { name, specialty, role } = user;
  const style = {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    border: `0.2rem solid ${color(role)}`,
    borderRadius: '50%'
  };
  return (
    <Box hasTextAlign='centered'>
      <Image style={style} isSize='128x128' src='' />
      <Title>{name}</Title>
      <Subtitle isSize={5}>{specialty}</Subtitle>
      <Tag isColor='dark' style={{ backgroundColor: color(role) }}>
        {role}
      </Tag>
      <div style={{ ...styles.levelBar, backgroundColor: color(role) }} />
    </Box>
  );
}
