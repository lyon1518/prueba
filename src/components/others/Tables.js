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
// import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Search, Settings } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import SendData from '../pages/SendData';
// import ValidateResponse from '../../scripts/validty/ValidateResponse';
import SettingsTable from "./table/Settings";
import DropDowList from './dropsdown/DropDownList';
import Options from './table/Options';
import Functions from "../../scripts/control/Functions";

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
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headers, SettingsParams } = props;
  const headCells = headers
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {SettingsParams[1] ?
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
            {!headCell.sort ?
              <span style={headCell.width === "" ? {} : { display: "block", width: headCell.width }}>
                {headCell.nombre}
              </span> :
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.nombre}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden} style={headCell.width === "" ? {} : { display: "block", width: headCell.width }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            }

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
  dContents: {
    display: "contents"
  },
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
    color: "#000"
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, title, rows, id, SettingsParams, DataTable } = props;
  const { globalActions } = DataTable
  let optionsTable = {}
  optionsTable.component = Options
  optionsTable.label = 'Configuración'
  optionsTable.icon = <Settings />
  // console.log(props);

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
        // console.log(resultados);
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
      }) + " bg-white text-white"}
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
        <div className={classes.dContents}>
          {/* {actionst.map((e, i) => {
            if (e.grup) {
              return (
                <div key={"buttonA-" + i}>
                  <Tooltip title={e?.title} className={"ml-2 bg-" + e?.color} onClick={() => props.actionSelect(e)}>
                    {typeof e.icon === 'string' ?
                      <div className="btn text-white"><small>{e.icon}</small></div> :
                      <IconButton aria-label={e?.title} className="text-white">
                        <e.icon />
                      </IconButton>
                    }
                  </Tooltip>
                </div>
              )
            } else {
              return (<div key={"buttonA-" + i}></div>)
            }
          })} */}
          <DropDowList index={1} data={globalActions} actionSelect={props.actionSelect}/>
        </div>
      ) : (
        SettingsParams[0] ?
          <div>
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => searchB()}><Search /></button>
              </div>
              <input type="text" className="form-control hpx-40 sm" placeholder="Search"  id={id} onKeyDown={() => searchB()} />
            </div>
          </div> :
          ''
      )}
      <div className="btn btn-sm btn-outline-info ml-2" onClick={() => props.actionSelect(optionsTable,SettingsParams)}>
      {/* <div className="btn btn-sm btn-outline-info ml-2" onClick={() => setSettingsActive(true)}> */}
        {/* <i className="tio-delete-outlined"> */}
        <IconButton aria-label="Editar" className="sp">
          <Settings />
        </IconButton>
        {/* </i> */}
      </div>
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
  // console.log(props);
  const classes = useStyles();
  const { DataTable } = props
  const { obj, name, checkbox, cols, id, search, controlPadding, action, clase, styles,setPager,singleActions } = DataTable
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowsOrigin, setRowsOrogin] = useState([]);
  const [ActivePop, setActivePop] = useState(false)
  const [Data, setData] = useState({})
  const [Actions, setActions] = useState(false)
  const [Component, setComponent] = useState(undefined)
  const [SettingsParams, setSettingsParams] = useState([search,checkbox,setPager!==undefined?true:undefined,clase!==undefined?true:undefined, styles!==undefined?true:undefined])
  // const { actionst } = DataTable

  const AsigRows = useCallback((data) => {
    if (data === undefined) {
      setRowsOrogin(obj)
    } else {
      // console.log(data);
      setRowsOrogin(data)
    }
  }, [obj])
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
        <SendData type={Data?.error?.type} setActivePop={setActivePop} data={Data?.error} active={ActivePop} />
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
        const newSelecteds = obj.map((n) => n);
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
        // newSelected = newSelected.concat(selected.slice(0, -1));
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
    const actionSelect = (component,single) => {
      let info = {}
      info.data = single === undefined? selected:single
      info.component = component
      setComponent(info)
      setActions(true)
    }
    
    return (
      <div className={classes.root}>
        {Actions ?
          <SettingsTable data={Component} setActions={setActions} setSettingsParams={setSettingsParams}/>
          : ''}
        <Paper className={SettingsParams[0] ? classes.paper : 's-fondo'}>
          <EnhancedTableToolbar numSelected={selected.length} action={action} title={name} rows={obj} AsigRows={AsigRows} id={id} SettingsParams={SettingsParams} DataTable={DataTable} setSettingsParams={setSettingsParams} actionSelect={actionSelect} />
          <TableContainer>
            <Table
              className={classes.tabl + ' ' + SettingsParams[3]?clase:''}
              aria-labelledby="tableTitle"
              size={controlPadding ? (dense ? 'small' : 'medium') : 'small'}
              aria-label="enhanced table"
              style={SettingsParams[4]?styles:{}}
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={obj?.length}
                headers={cols}
                checks={checkbox}
                SettingsParams={SettingsParams}
              />
              <TableBody>
                {stableSort(rowsOrigin, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    // console.log(row.id);
                    // console.log(selected.id);
                    return (
                      <TableRow
                        hover
                        // onClick={checkbox ? ((event) => handleClick(event, row)) : null}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        {SettingsParams[1] ?
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onClick={checkbox ? ((event) => handleClick(event, row)) : null}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell> : <td></td>
                        }
                        {cols.map((e, i) => {
                          return (
                            <TableCell id={labelId} component="td" key={'dato' + i} className="text-center">
                              {e.url === '' ?
                                <div className="centrar w-max m-auto">
                                  {e.id === "status" ? <div className={"mr-2 status-table status-" + row.status.toLowerCase()}></div> : ''}
                                  {row[e.id]}
                                </div> :
                                <Link to={e.url + '/' + row[e.id]}>
                                  {row[e.id]}
                                </Link>
                              }
                            </TableCell>
                          )
                        })
                        }

                        {selected.length > 0 ?
                          selected.map((e, i) => {
                            if (row.id === e.id) {
                              return (
                                <TableCell className="d-flex" key={'buttons' + i}>
                                  <DropDowList index={1} data={singleActions} dataRow={e} actionSelect={actionSelect}/>
                                </TableCell>
                              )
                            } else {
                              return (<td className="d-none" key={'buttons' + i}></td>)
                            }
                          })
                          : <td></td>}
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
          
          {SettingsParams[2] ?
            <TablePagination
              rowsPerPageOptions={Functions.WhatType(setPager) === undefined?[5, 10, 25]:setPager}
              component="div"
              count={obj.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            /> : ''

          }
        </Paper>
        {SettingsParams[8] ?
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Control de espaciado"
          /> : ''
        }
      </div>
    );
  }
}
