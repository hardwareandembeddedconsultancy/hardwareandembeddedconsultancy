import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core";
import { fetchCustomer } from "./../../redux/index";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import EditIcon from "@material-ui/icons/Edit";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { LinearProgress } from "@material-ui/core";
import CustomerSearchForm from "./CustomerSearchForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + * .MuiTextField-root ": {
      margin: theme.spacing(1),
      marginBottom: 12,

      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "Center",
      },
      [theme.breakpoints.up("md")]: {
        width: "100%",
        justify: "center",
      },
      [theme.breakpoints.up("lg")]: {
        width: 305,
        display: "Center",
      },
    },
    display: "flex",
  },
  title: {
    fontSize: 18,
  },
  table: {
    minWidth: 700,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1, 0),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.default,
    color: theme.palette.common.black,
    size: "small",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function Customer() {
  const classes = useStyles();
  const customerdata = useSelector((state) => state.customer);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(customerdata.max);

  const dispatch = useDispatch();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    dispatch(
      fetchCustomer(null, customerdata.sort, customerdata.order, rowsPerPage, 0)
    );
  };

  const handleChangePage = (event, newPage) => {
    dispatch(
      fetchCustomer(
        null,
        customerdata.sort,
        customerdata.order,
        rowsPerPage,
        newPage * rowsPerPage
      )
    );

    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(
      fetchCustomer(
        null,
        customerdata.sort,
        customerdata.order,
        parseInt(event.target.value, 10),
        0
      )
    );
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return customerdata.loading ? (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  ) : customerdata.error ? (
    <h1>
      {customerdata.error} {JSON.parse(localStorage.auth).data.access_token}
    </h1>
  ) : (
    <div>
      <Grid  item sm={12} md={12} className={classes.content}>
        <Grid sm={12} >
        <CustomerSearchForm  refresh={refresh} />
        </Grid>
        <Grid sm={12}>
        <TablePagination

          rowsPerPageOptions={[10, 25, parseInt(customerdata.count)]}
          component="div"
          count={customerdata.count}
          rowsPerPage={rowsPerPage}
          page={customerdata.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell key="id">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "id",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Customer ID
                  </TableSortLabel>
                </StyledTableCell>

                <StyledTableCell key="name">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "name",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Name
                  </TableSortLabel>
                </StyledTableCell>

                <StyledTableCell key="email">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "email",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    E-mail
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="mobile">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "mobile",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Mobile
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="address">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "address",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Address
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell key="dateCreated">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "dateCreated",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Date Created
                  </TableSortLabel>
                </StyledTableCell>

                <StyledTableCell key="lastUpdated">
                  <TableSortLabel
                    direction={customerdata.order === "desc" ? "asc" : "desc"}
                    onClick={() =>
                      dispatch(
                        fetchCustomer(
                          null,
                          "lastUpdated",
                          customerdata.order === "desc" ? "asc" : "desc",
                          rowsPerPage,
                          0
                        )
                      )
                    }
                  >
                    Last Updated
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell> Cart </StyledTableCell>
                <StyledTableCell> Invoices </StyledTableCell>
                <StyledTableCell> Edit </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerdata.customers.map((customer) => (
                <StyledTableRow key={customer.id}>
                  <StyledTableCell component="th" scope="row">
                    {customer.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.email}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.mobile}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.address}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.dateCreated}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {customer.lastUpdated}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <IconButton color="secondary" aria-label="Edit customer">
                      <ShoppingCartIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <IconButton color="secondary" aria-label="Edit customer">
                      <ReceiptIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <IconButton color="secondary" aria-label="Edit customer">
                      <EditIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, parseInt(customerdata.count)]}
          component="div"
          count={customerdata.count}
          rowsPerPage={rowsPerPage}
          page={customerdata.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Grid>
      </Grid>
    </div>
  );
}

export default Customer;
