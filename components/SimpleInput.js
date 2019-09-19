import { Field, Control, Icon, Input } from 'bloomer';

export default function SimpleInput() {
    return (
        <Field>
            <Control hasIcons>
                <Input />
                <Icon isSize='medium' isAlign='left' className='fa fa-search' />
            </Control>
        </Field>
    )
}