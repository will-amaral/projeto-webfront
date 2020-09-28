import React from 'react';
import { Avatar, Box, Typography, Chip } from '@material-ui/core';
import { FitnessCenterOutlined } from '@material-ui/icons';
export default [
  {
    headerName: 'Nome ',
    field: 'name',
    width: 300,
    renderCell: (params) => (
      <Box display='flex' alignItems='center'>
        <Avatar src={params.getValue('thumbnail')} />
        <Box ml={1}>
          <Typography variant='body2'>
            {params.getValue('name')}{' '}
            <Chip color='primary' size='small' label={params.getValue('role')} />
          </Typography>
        </Box>
      </Box>
    ),
  },
  { headerName: 'Email', field: 'email', width: 200 },
  { headerName: 'Endereço', field: 'address', width: 400 },
  {
    headerName: 'Especialidade',
    field: 'specialty',
    width: 200,
    renderCell: (params) => (
      <Chip
        icon={<FitnessCenterOutlined />}
        color='secondary'
        variant='outlined'
        label={params.value}
      />
    ),
  },
];
