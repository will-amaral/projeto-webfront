import { useState } from 'react';
import { Field, Control, Icon, Input, Help } from 'bloomer';

export default function FormField(props) {
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState('');
    const { group, expand, icon, onChange, type, value, placeholder } = props;

    return (
        <Field isGrouped={group}>
            <Control isExpanded={expand} hasIcons='left'>
                <Icon isSize='small' isAlign='left' className={`fas fa-${icon}`} />
                <Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {active && <Help isColor='danger'>{message}</Help>}
            </Control>
        </Field>
    );
}