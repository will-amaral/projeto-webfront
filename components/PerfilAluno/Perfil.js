import {
    Section, Columns, Column, Image, Title, Subtitle,
    Media, MediaContent, MediaLeft, MediaRight, Icon,
    Level, LevelRight, LevelItem, Content, Box
} from 'bloomer';
import ProgressiveImage from 'react-progressive-image';
import SectionTitle from './SectionTitle'

export default function Perfil({ name, active, email, photo }) {
    const icon = active ? 'check' : 'times';
    return (
        <Box>
            <Section>
                <Media>
                    <MediaLeft>
                        <Image isSize='96x96' src={photo} />
                    </MediaLeft>
                    <MediaContent>
                        <Title>{name}</Title>
                        <Subtitle hasTextColor='primary' isSize={5}>{email}</Subtitle>
                        <Subtitle hasTextColor={active ? 'success' : 'danger'} isSize={6}>
                            <Icon style={{ marginRight: 10 }} isSize='small' className={`fas fa-${icon}-circle`} />
                            conta {active ? 'ativa' : 'inativa'}
                        </Subtitle>
                    </MediaContent>
                    <MediaRight>
                        <Level>
                            <LevelRight hasTextColor='primary'>
                                <LevelItem>
                                    <Title isSize={4} hasTextColor='primary'>R$ 80,00</Title>
                                </LevelItem>
                                <LevelItem>
                                    <Icon isSize='large' className='fas fa-chart-pie fa-2x' />
                                </LevelItem>
                                <LevelItem>
                                    <Icon isSize='large' className='fas fa-envelope fa-2x' />
                                </LevelItem>
                            </LevelRight>
                        </Level>
                    </MediaRight>
                </Media>
            </Section>
            <Section>
                <Columns>
                    <Column>
                        <SectionTitle>INFORMAÇÕES PESSOAIS</SectionTitle>
                        <Content>
                            <p>
                                <strong>Nome Completo: </strong> Fulano de Tal da Silva<br />
                                <strong>Idade: </strong> 27 anos<br />
                                <strong>Endereço: </strong> Rua de Tal, nº 26, Campos do Jordão-SP 12460-000
                            </p>
                        </Content>
                    </Column>
                    <Column>
                        <SectionTitle>DADOS FINANCEIROS</SectionTitle>
                        <Content>
                            <p>
                                <strong>Data de Vencimento: </strong> 10<br />
                                <strong>Forma de Pagamento: </strong> Cartão de Crédito
                            </p>
                        </Content>
                    </Column>
                </Columns>
            </Section>
            <Section>
                <Columns>
                    <Column>
                        <SectionTitle>CONTATO</SectionTitle>
                        <Content>
                            <p>
                                <strong>Telefone: </strong> (12) 12345-6789
                            </p>
                        </Content>
                    </Column>
                    <Column>
                        <SectionTitle>SOCIAL</SectionTitle>
                        <Content>
                            <p>
                                <strong>facebook: </strong> fb.com/fulanadetal<br />
                                <strong>instagram: </strong> @fulanadetal
                            </p>
                        </Content>
                    </Column>
                </Columns>
            </Section>
        </Box>
    );
}