import React from 'react';
import {
  Section,
  Columns,
  Column,
  Image,
  Title,
  Subtitle,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Icon,
  Level,
  LevelRight,
  LevelItem,
  Content,
  Box
} from 'bloomer';
import SectionTitle from './SectionTitle';
import { calculateAge } from '../../utils/helpers';

export default function Perfil({ student }) {
  if (!student) return <div>Aluno não encontrado</div>;
  const {
    name,
    email,
    status,
    phone,
    address,
    financial,
    birthDate,
    thumbnail
  } = student;
  const icon = status ? 'check' : 'times';

  return (
    <Box>
      <Section>
        <Media>
          <MediaLeft>
            <Image isSize='96x96' src={thumbnail} />
          </MediaLeft>
          <MediaContent>
            <Title>{name}</Title>
            <Subtitle hasTextColor='primary' isSize={5}>
              {email}
            </Subtitle>
            <Subtitle hasTextColor={status ? 'success' : 'danger'} isSize={6}>
              <Icon
                style={{ marginRight: 10 }}
                isSize='small'
                className={`fas fa-${icon}-circle`}
              />
              conta {status ? 'ativa' : 'inativa'}
            </Subtitle>
          </MediaContent>
          <MediaRight>
            <Level>
              <LevelRight hasTextColor='primary'>
                <LevelItem>
                  <Title isSize={4} hasTextColor='primary'>
                    {`R$ ${financial.amount}`}
                  </Title>
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
                <strong>Nome Completo: </strong> {name}
                <br />
                <strong>Idade: </strong> {`${calculateAge(new Date(birthDate))} anos`}
                <br />
                <strong>Endereço: </strong> {address}
              </p>
            </Content>
          </Column>
          <Column>
            <SectionTitle>DADOS FINANCEIROS</SectionTitle>
            <Content>
              <p>
                <strong>Data de Vencimento: </strong> {financial.dueDay}
                <br />
                <strong>Forma de Pagamento: </strong> {financial.plan}
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
                <strong>Telefone: </strong> {phone}
              </p>
            </Content>
          </Column>
          <Column>
            <SectionTitle>SOCIAL</SectionTitle>
            <Content>
              <p>
                <strong>facebook: </strong>
                <br />
                <strong>instagram: </strong>
              </p>
            </Content>
          </Column>
        </Columns>
      </Section>
    </Box>
  );
}
