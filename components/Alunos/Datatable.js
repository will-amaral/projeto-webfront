import { Table, Checkbox, Icon } from 'bloomer';
import TableItem from './TableItem';

export default function DataTable() {
    const data = [
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Active',
            id: 1
        },
        {
            name: 'Fulano de Tal',
            change: '22 de Dezembro',
            status: 'Active',
            id: 2
        },
        {
            name: 'Fulaninha de Tal',
            change: '19 de Dezembro',
            status: 'Inactive',
            id: 3
        },
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Active',
            id: 4
        },
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Inactive',
            id: 5
        },
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Active',
            id: 6
        },
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Active',
            id: 7
        },
        {
            name: 'Fulana de Tal',
            change: '21 de Dezembro',
            status: 'Active',
            id: 8
        },

    ]

    const items = data.map(item => <TableItem 
        name={item.name}
        change={item.change}
        status={item.status}
        key={item.id}
        id={item.id}
    />)

    return (
        <Table>
            <thead>
                <tr>
                    <th><Checkbox /></th>
                    <th>Nome <Icon isSize='small' className='fa fa-angle-down' /></th>
                    <th>Data de Criação/Modificação <Icon isSize='small' className='fa fa-angle-down' /></th>
                    <th>Status <Icon isSize='small' className='fa fa-angle-down' /></th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    )
}