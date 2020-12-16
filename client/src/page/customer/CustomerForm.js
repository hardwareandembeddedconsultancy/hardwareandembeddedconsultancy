import React, { useState,useEffect } from "react";
import { fetchCustomer } from "./../../redux/index";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, ButtonGroup, LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import Email from "@material-ui/icons/Email";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import Contacts from "@material-ui/icons/Contacts";
import { Formik, Form } from "formik";
import { createCustomer } from "./../../redux/index";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

let customerCreateSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  mobile: yup
    .string()
    .min(10, "Mobile is too short.")
    .max(10, "Mobile is too long.")
    .required("This field is required."),
  address: yup.string(),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


function CustomerForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    dispatch(
      fetchCustomer(null,"id" , "asc", "all", 0)
    );
  };

  const customerList = useSelector((state) => state.customerCreate);
  const customerdata = useSelector((state) => state.customerCreate);
  const error = useSelector((state) => state.customerCreate.error);
  const show = useSelector((state) => state.customerCreate.show);
  const [result, setResult] = useState(false);
 
  const [value, setValue] = useState(null);

  const initialValues = {
    id:"",
    company:"",
    name: "",
    email: "",
    mobile: "",
    address: "",
  };

  const done = () => {
    setResult(false);
    props.refresh();
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Formik
            initialValues={initialValues}
            validationSchema={customerCreateSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                dispatch(createCustomer(values));
                setSubmitting(false);
                setResult(true);
              }, 2000);

            }}
          >
            {({
              submitForm,
              isSubmitting,
              handleChange,
              resetForm,
              touched,
              errors,
              values,
            }) => (
              <Form>
                <Grid container  justify="center" alignItems="center" item xs={12}>
               
                
                 


                  
                <Grid item sm={12} md={2}>

                <TextField
                    name="id"
                    label="CUSTOMER ID"
                    style={{ margin: 8 }}
                    autoComplete="new-password"
                    value={values.id || ""}
                    onChange={handleChange}
                    placeholder="ID"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Contacts />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={errors.id && touched.id ? errors.id : null}
                  />
               </Grid>
               



<Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    name="company"
                    label="COMPANY"
                    autoComplete="new-password"
                    value={values.company || ""}
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    placeholder="COMPANY"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={errors.company && touched.company ? errors.company : null}
                  />
                  </Grid>
                  <Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    name="name"
                    label="Name"
                    
                    value={values.name || ""}
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    placeholder="Name"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Contacts />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                  </Grid>
                  <Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    name="email"
                    label="Email"
                    autoComplete="new-password"
                    value={values.email || ""}
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    placeholder="E-Mail"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                  </Grid>
                  <Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    label="Mobile"
                    name="mobile"
                    autoComplete="new-password"
                    value={values.mobile || ""}
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    type="number"
                    placeholder="Mobile"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneAndroid />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={
                      errors.mobile && touched.mobile ? errors.mobile : null
                    }
                  />
                  </Grid>
                  <Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    label="Address"
                    name="address"
                    value={values.address || ""}
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    placeholder="Address"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    helperText={
                      errors.address && touched.address ? errors.address : null
                    }
                  />
                  </Grid>

                 
                </Grid>
                <Grid item xs={12}>
                  {isSubmitting && <LinearProgress />}
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={resetForm}
                    >
                      Reset
                    </Button>
                  </ButtonGroup>
                </Grid>
                {error ? (
                  <Collapse in={result}>
                    <Alert severity="error">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {error} <Button onClick={done}>ok</Button>
                      </Grid>
                    </Alert>
                  </Collapse>
                ) : null}
                {Object.keys(show).length > 0 ? (
                  <Collapse in={result}>
                    <Alert>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {show.id ? (
                          <Grid item xs={12}>
                            Id {show.id} Created
                          </Grid>
                        ) : null}
                        {show.name ? (
                          <Grid item xs={12}>
                            Name:{show.name}
                          </Grid>
                        ) : null}
                        {show.email ? (
                          <Grid item xs={12}>
                            E-Mail:{show.email}
                          </Grid>
                        ) : null}
                        {show.mobile ? (
                          <Grid item xs={12}>
                            Mobile:{show.mobile}
                          </Grid>
                        ) : null}
                        {show.address ? (
                          <Grid item xs={12}>
                            Address:{show.address}
                          </Grid>
                        ) : null}
                        {show.id ? (
                          <Grid item xs={12}>
                            <Button
                              onClick={() => {
                                resetForm();
                                done();
                              }}
                            >
                              ok
                            </Button>
                          </Grid>
                        ) : null}
                      </Grid>
                    </Alert>
                  </Collapse>
                ) : null}
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
}

export default CustomerForm;
