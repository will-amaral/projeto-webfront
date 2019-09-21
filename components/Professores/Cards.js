import { Columns } from 'bloomer';
import CardItem from './CardItem';
import { data } from '../mockData';

export default function Cards() {
    const items = data.map(item => <CardItem
            name={item.name}
            area={item.area}
            email={item.email}
            photo={item.photo}
            levelColor={item.level.color}
            key={item.id}
            id={item.id}
        />);
    return (
        <Columns isMultiline>
            {items}
        </Columns>
    );
}