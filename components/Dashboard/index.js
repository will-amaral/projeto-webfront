import { Columns, Column, Hero, HeroBody,
    Title, Subtitle, Section 
} from 'bloomer';
import Tiles from './Tiles';
import CardItem from './CardItem';

const styles = {
    gradient: {
        background: `linear-gradient(
            141deg, #04DB92 0%, #00D9D5 100%)`
    }
}

export default function Dashboard({ profile }) {
    return (
        <Column isSize={9}>
            <Hero isColor="primary" isSize="small" style={styles.gradient}>
                <HeroBody>
                    <Title>Olá, jovem {profile.name}</Title>
                    <Subtitle>Tenha um ótimo dia!</Subtitle>
                </HeroBody>
            </Hero>
            <Section>
                <Tiles />
            </Section>
            <Columns>
                <Column isSize={6}>
                    <CardItem title="Buscar usuários"/>
                </Column>
                <Column isSize={6}>
                    <CardItem title="Buscar exercícios" />
                </Column>
            </Columns>
        </Column>
    );
}