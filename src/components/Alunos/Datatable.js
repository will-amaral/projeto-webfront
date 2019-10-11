import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Checkbox, Icon } from 'bloomer';
import TableItem from './TableItem';

export default function DataTable() {
  const data = useSelector(state => state.users.students);

  if (!data) return null;

  const items = data.map(item => (
    <TableItem
      name={item.name}
      change='Yesterday'
      status={item.status}
      key={item._id}
      id={item._id}
    />
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Checkbox />
          </th>
          <th>
            Nome <Icon isSize='small' className='fa fa-angle-down' />
          </th>
          <th>
            Data de Criação/Modificação{' '}
            <Icon isSize='small' className='fa fa-angle-down' />
          </th>
          <th>
            Status <Icon isSize='small' className='fa fa-angle-down' />
          </th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </Table>
  );
}
