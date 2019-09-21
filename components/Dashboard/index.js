import { Columns, Column, Hero, 
    HeroBody, Title, Subtitle 
} from 'bloomer';
import { BarChart, Bar } from 'recharts';
import Tiles from './Tiles';
import CardContainer from '../CardContainer';
import SimpleInput from '../SimpleInput';
import Activity from './Activity';
import styles from '../styles';

export default function Dashboard({ profile }) {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      
    return (
        <Column>
            <Hero isColor="primary" isSize="small" style={styles.gradient}>
                <HeroBody>
                    <Title>Olá, {profile.name}</Title>
                    <Subtitle>Tenha um ótimo dia!</Subtitle>
                </HeroBody>
            </Hero>
            <Tiles />
            <Columns>
                <Column isSize={6}>
                    <CardContainer title="Feed de Atividades">
                        <Activity />
                        <Activity />
                        <Activity />
                    </CardContainer>
                </Column>
                <Column isSize={6}>
                    <SimpleInput />
                    <CardContainer title="Progressão Mensal">
                        <BarChart width={370} height={178} data={data}>
                            <Bar dataKey="pv" fill="#F37335" />
                        </BarChart>
                    </CardContainer>
                </Column>
            </Columns>
        </Column>
    );
}