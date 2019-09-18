import { Columns, Column, Hero, HeroBody,
    Title, Subtitle, Section 
} from 'bloomer';
import Tiles from './Tiles';
import CardItem from './CardItem';
import styles from '../styles';

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