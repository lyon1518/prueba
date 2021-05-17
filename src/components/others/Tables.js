import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import { Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import SendData from '../contenidos/SendData';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headers, checks } = props;
  // console.log('props');
  // console.log(props);
  const headCells = headers
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {checks ?
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell> : <td></td>
        }
        {headCells?.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  // console.log('props');
  // console.log(props);
  const classes = useToolbarStyles();
  const { numSelected, title, rows, id, search } = props;

  const searchB = () => {
    if (window.event.keyCode === 13 || window.event.type === "click") {
      let resultados = []
      let busca = document.querySelector('#' + id)
      if (busca.value === '') {
        // console.log(busca);
        // setTabla(origin)
        props.AsigRows()
      } else {
        rows.forEach(e => {
          let text = JSON.stringify(e)
          if ((text.toUpperCase()).indexOf((busca.value).toUpperCase()) > -1) {
            resultados.push(e)
          }
        });
        if (resultados.length > 0) {
          props.AsigRows(resultados)
          // console.log(resultados);
          // setTabla(resultados)
        } else {
          // setTabla(origin)
          props.AsigRows()
          busca.value = ''
        }
      }
    }
  }
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} Seleccionado
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        search ?
          <div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => searchB()}><Search /></button>
              </div>
              <input type="text" className="form-control hpx-40" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" id={id} onKeyDown={() => searchB()}/>
            </div>
          </div> :
          ''
      )}
    </Toolbar>
  );
};


EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const { DataTable } = props
  const { row, title, headers, checkbox, tableData, links, id, search, fondo, paginator, controlPadings } = DataTable
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowsOrigin, setRowsOrogin] = useState([]);
  const [ActivePop, setActivePop] = useState(false)
  const [Data, setData] = useState({})
  const AsigRows = useCallback((data) => {
    if (data === undefined) {
      // console.log('props.tableData');
      // console.log(row);
      setRowsOrogin(row)
    } else {
      // console.log(data);
      setRowsOrogin(data)
    }
  }, [row])
  useEffect(() => {
    if (DataTable.error !== undefined) {
      setData(DataTable)
      setActivePop(true)
    } else {
      AsigRows()
    }
  }, [AsigRows, DataTable])
  if (DataTable.error !== undefined) {
    return (
      <div>
        <SendData type={Data.type} setActivePop={setActivePop} data={Data} active={ActivePop} />
      </div>
    )
  } else {
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = row.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, row.length - page * rowsPerPage);

    return (
      <div className={classes.root}>
        <Paper className={fondo ? classes.paper : 's-fondo'}>
          <EnhancedTableToolbar numSelected={selected.length} title={title} rows={row} AsigRows={AsigRows} id={id} search={search} checkbox={checkbox} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={controlPadings ? (dense ? 'small' : 'medium') : 'small'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={row?.length}
                headers={headers}
                checks={checkbox}
              />
              <TableBody>
                {stableSort(rowsOrigin, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={checkbox ? ((event) => handleClick(event, row.name)) : null}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        {checkbox ?
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell> : <td></td>
                        }
                        {tableData.map((e, i) => {
                          // console.log(e);
                          return (
                            e === 'status' ?
                              <TableCell id={labelId} component="td" key={'dato' + i} className="text-center">
                                {/* {console.log(i)}
                                {console.log(props)} */}
                                {links[i] === '' ?
                                  <div className="centrar w-max m-auto">
                                    <div className={"mr-10 status-table status-" + row.status.toLowerCase()}></div>
                                    {row[e]}
                                  </div> :
                                  <Link to={links[i] + '/' + row[e]}>
                                    <div className="centrar w-max m-auto">
                                      <div className={"mr-10 status-table status-" + row.status.toLowerCase()}></div>
                                      {row[e]}
                                    </div>
                                  </Link>
                                }
                              </TableCell> :
                              <TableCell id={labelId} component="td" key={'dato' + i} className="text-center">
                                {links[i] === '' ?
                                  row[e] :
                                  <Link to={links[i] + '/' + row[e]}>
                                    {row[e]}
                                  </Link>
                                }
                              </TableCell>
                          )
                        })
                        }

                      </TableRow>
                    );
                  })}
                {/* {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </TableContainer>
          {paginator ?
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={row.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            /> : ''

          }
        </Paper>
        {controlPadings ?
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Control de espaciado"
          /> : ''
        }
      </div>
    );
  }
}
