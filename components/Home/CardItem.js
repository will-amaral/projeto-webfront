import { Card, CardHeader, CardHeaderTitle,
    CardHeaderIcon, CardContent, Content,
    Icon, Control, Input } from 'bloomer';

export default function CardItem(props) {
    return (
        <Card>
            <CardHeader>
                <CardHeaderTitle>{props.title}</CardHeaderTitle>
                <CardHeaderIcon>
                    <Icon className="fa fa-angle-down"/>
                </CardHeaderIcon>
            </CardHeader>
            <CardContent>
                <Content>
                    <Control hasIcons>
                        <Input />
                        <Icon isSize="medium" isAlign="left" className="fa fa-search"/>
                    </Control>
                </Content>
            </CardContent>
        </Card>
    );
}