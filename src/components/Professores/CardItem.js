import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Media, MediaContent, MediaLeft, Content, Image, Column } from 'bloomer';
import styles from '../styles';

export default function CardItem({ name, area, email, thumbnail, levelColor, id }) {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to={`/professores/${id}`} />;

  return (
    <Column isSize={'1/3'} className='selectable-item' onClick={() => setRedirect(true)}>
      <Box>
        <Media>
          <MediaLeft>
            <Image isSize='64x64' src={thumbnail} />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>{name}</strong>
                <br />
                {area}
                <br />
                <strong style={{ color: levelColor }}>
                  <small>{email}</small>
                </strong>
              </p>
            </Content>
          </MediaContent>
        </Media>
        <div style={{ ...styles.levelBar, backgroundColor: levelColor }} />
      </Box>
    </Column>
  );
}
