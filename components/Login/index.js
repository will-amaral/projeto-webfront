import { useState } from 'react';
import { Hero, HeroBody, Container, Title,
    Subtitle, Columns, Column 
} from 'bloomer';
import CustomNotification from '../CustomNotification';
import Form from './Form';

const backgroundStyles = {
    background: `linear-gradient(
        rgba(0, 158, 108, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(/static/img/bg.jpg) no-repeat center center fixed`,
    backgroundSize: 'cover' 
}

export default function Login() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        return
    }

    return(
        <Columns isVCentered isGapless>
            <Column isSize={{mobile: "full", desktop: "1/4" }}>
                <Hero isColor="primary" isFullHeight isBold>
                    <HeroBody>
                        <Container hasTextAlign="centered">
                            <Title>Gym App</Title>
                            <Subtitle>Faça o login para prosseguir</Subtitle>
                            <CustomNotification
                                message={message}
                                color={color}
                                close={()=> setMessage('')}
                            />
                            <Form loading={loading} handleSubmit={handleSubmit} />
                        </Container>
                    </HeroBody>
                </Hero>
            </Column> 
            <Column isHidden="touch">
                <Hero isFullHeight style={backgroundStyles} />
            </Column>               
        </Columns>
    );
}



