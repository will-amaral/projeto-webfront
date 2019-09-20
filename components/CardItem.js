import { Card, CardHeader, CardHeaderTitle,
    CardHeaderIcon, CardContent, Content,
    Icon, Control, Input 
} from 'bloomer';

export default function CardItem({ title, children }) {
    return (
        <Card>
            {title && (
                <CardHeader>
                    <CardHeaderTitle>{title}</CardHeaderTitle>
                </CardHeader>
            )}
            <CardContent>
                <Content>
                    {children}
                </Content>
            </CardContent>
        </Card>
    );
}