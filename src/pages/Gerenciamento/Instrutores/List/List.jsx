import React from 'react';
import { Box, Container, Button, SvgIcon, Paper } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { PlusCircle } from 'react-feather';

import { Page, LoadingScreen, Table, Header, Error404 } from 'components';
import { useFetch } from 'utils/hooks';
import { useListStyles } from './styles';
import config from './tableConfig';

function List() {
  const classes = useListStyles();
  const history = useHistory();
  const { data, loading, error } = useFetch('/admin/users?type=instrutores');

  if (!data && loading) return <LoadingScreen />;

  if (error) return <Error404 />;

  return (
    <Page className={classes.root} title='Lista de Instrutores'>
      <Container maxWidth={false}>
        <Header title='Lista de Instrutores' style={{ marginBottom: 3 }}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.action}
            onClick={() => history.push('/gerenciamento/alunos/novo')}
          >
            <SvgIcon fontSize='small' className={classes.actionIcon}>
              <PlusCircle />
            </SvgIcon>
            Cadastrar Instrutor
          </Button>
        </Header>
        {data && (
          <DataGrid
            autoHeight
            hideFooterRowCount
            rows={data.instructors.map((item) => {
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
