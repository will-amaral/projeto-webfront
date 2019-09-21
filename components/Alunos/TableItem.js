import { Checkbox } from 'bloomer';
import Link from 'next/link';

export default function TableItem({ name, change, status, id }) {
    return (
        <Link href='/alunos/[id]' as={`/alunos/${id}`}>
            <tr className='selectable-item'>
                <td><Checkbox /></td>
                <td>{name}</td>
                <td>{change}</td>
                <td>{status}</td>
            </tr>
        </Link>
    );
}