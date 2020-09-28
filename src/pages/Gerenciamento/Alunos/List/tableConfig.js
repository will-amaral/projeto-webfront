import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { parseISO, differenceInCalendarYears } from 'date-fns';
export default [
  {
    headerName: 'Nome ',
    field: 'name',
    width: 250,
    renderCell: (params) => (
      <Box display='flex' alignItems='center'>
        <Avatar src={params.getValue('thumbnail')} />
        <Box ml={2}>
          <Typography>{params.getValue('name')}</Typography>
        </Box>
      </Box>
    ),
  },
  { headerName: 'Email', field: 'email', width: 200 },
  { headerName: 'Endereço', field: 'address', width: 400 },
  {
    headerName: 'Idade',
    field: 'birthDate',
    valueFormatter: (params) =>
      differenceInCalendarYears(Date.now(), parseISO(params.value)),
  },
];
