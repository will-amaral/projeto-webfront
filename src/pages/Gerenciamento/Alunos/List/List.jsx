import React from 'react';
import { Container, Button, SvgIcon } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

import { Page, LoadingScreen, Header, Error404 } from 'components';
import { useFetch } from 'utils/hooks';
import { useListStyles } from './styles';
import config from './tableConfig';

function List() {
  const classes = useListStyles();
  const history = useHistory();
  const { data, loading, error } = useFetch('/admin/users?type=alunos');

  if (!data && loading) return <LoadingScreen />;

  if (error) return <Error404 />;

  return (
    <Page className={classes.root} title='Lista de Alunos'>
      <Container maxWidth={false}>
        <Header title='Lista de Alunos' style={{ marginBottom: 3 }}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.action}
            onClick={() => history.push('/gerenciamento/alunos/novo')}
          >
            <SvgIcon fontSize='small' className={classes.actionIcon}>
              <PlusCircle />
            </SvgIcon>
            Cadastrar Aluno
          </Button>
        </Header>
        {data && (
          <DataGrid
            autoHeight
            hideFooterRowCount
            rows={data.students.map((item) => {
              item.id = item._id;
              return item;
            })}
            rowHeight={75}
            columns={config}
          />
        )}
      </Container>
    </Page>
  );
}

export default List;
