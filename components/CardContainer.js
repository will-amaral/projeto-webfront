import { Card, CardHeader, CardHeaderTitle,
    CardContent, Content
} from 'bloomer';

export default function CardContainer({ title, children }) {
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