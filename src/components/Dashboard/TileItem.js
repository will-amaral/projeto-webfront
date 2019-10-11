import React from 'react';
import { Tile, Box, Title, Subtitle } from 'bloomer';

export default function TileItem(props) {
  return (
    <Tile isParent>
      <Tile
        title={props.title}
        subtitle={props.subtitle}
        isChild
        render={props => (
          <Box {...props}>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
          </Box>
        )}
      />
    </Tile>
  );
}
