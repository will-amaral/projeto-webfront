import { Hero,  HeroBody, Container } from 'bloomer';

const styles = {
    gradient: {
        background: `linear-gradient(
            141deg, #04DB92 0%, #00D9D5 100%)`
    }
}

export default function BoldContainer({ children }) {
    return (
        <Hero isColor="primary" isFullHeight style={styles.gradient}>
            <HeroBody>
                <Container hasTextAlign="centered">
                    {children}
                </Container>
            </HeroBody>
        </Hero>
    )
}