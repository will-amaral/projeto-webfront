import { Hero,  HeroBody, Container } from 'bloomer';

export default function BoldContainer({ children }) {
    return (
        <Hero isColor="primary" isFullHeight isBold>
            <HeroBody>
                <Container hasTextAlign="centered">
                    {children}
                </Container>
            </HeroBody>
        </Hero>
    )
}