import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { useTableStyles } from './styles';

function Table(props) {
  const {
    data,
    label,
    config,
    page,
    limit,
    handlePageChange,
    handleRowChange,
    total,
    loading,
    pagination,
  } = props;
  const classes = useTableStyles();

  return (
    <TableContainer
      component={Paper}
      className={classes.wrapper}
      style={loading ? { backgroundColor: 'rgba(0,0,0,0.01)', opacity: '.7' } : {}}
    >
      <PerfectScrollbar>
        <MuiTable aria-label={label}>
          <TableHead>
            <TableRow>
              {config.map(({ title }) => {
                return <TableCell key={title}>{title}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow key={row.id}>
                  {config.map(({ title, field, render }) => {
                    if (row[field] && render) {
                      return <TableCell key={title}>{render(row[field])}</TableCell>;
                    } else if (row[field]) {
                      return <TableCell key={title}>{row[field]}</TableCell>;
                    } else {
                      return <TableCell key={title}> </TableCell>;
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </PerfectScrollbar>
      {pagination && (
        <TablePagination
          component='div'
          count={total}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[10, 15, 50, 100]}
        />
      )}
      {loading && <CircularProgress size={'2rem'} className={classes.loader} />}
    </TableContainer>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  config: PropTypes.array,
  label: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  limit: 15,
  total: 20,
  loading: false,
  handlePageChange: () => console.log('mudei a página'),
  handleRowChange: () => console.log('mudei o número de elementos'),
};

export default Table;
