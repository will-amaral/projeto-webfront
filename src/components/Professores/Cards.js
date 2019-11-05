import React from 'react';
import { useSelector } from 'react-redux';
import { Columns } from 'bloomer';
import CardItem from './CardItem';
import { color } from '../styles';

export default function Cards() {
  const data = useSelector(state => state.users.instructors);

  if (!data) return null;

  const items = data.map(item => (
    <CardItem
      name={item.name}
      area={item.specialty}
      email={item.email}
      levelColor={color(item.role)}
      key={item._id}
      id={item._id}
      thumbnail={item.thumbnail}
    />
  ));
  return <Columns isMultiline>{items}</Columns>;
}
