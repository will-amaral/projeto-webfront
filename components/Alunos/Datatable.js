import { Table, Checkbox, Icon } from 'bloomer';
import TableItem from './TableItem';

export default function DataTable({ data }) {
  const items = data.map(item => (
    <TableItem
      name={item.name}
      change={item.change}
      active={item.active}
      key={item.id}
      id={item.id}
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
