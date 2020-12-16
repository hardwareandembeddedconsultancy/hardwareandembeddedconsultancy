import React, { useState,useEffect } from "react";
import { Formik, Form } from "formik";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from "@material-ui/lab/Alert";
import {Grid,LinearProgress,ButtonGroup,Button,FormControl,Select,InputLabel,MenuItem,Collapse,Paper,makeStyles,Dialog,DialogActions,DialogTitle,DialogContent,DialogContentText} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomer,createCustomer } from "./../../redux/index";
import Contacts from "@material-ui/icons/Contacts";
import Home from "@material-ui/icons/Home";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Searchautocomplete from "../../component/SearchAutoCompleteAdd";
import * as yup from "yup";

let customerCreateSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  mobile: yup
    .string()
    .min(10, "Mobile is too short.")
    .max(10, "Mobile is too long.")
    .required("This field is required."),
  address: yup.string().nullable(),
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


  function CustomerSearch (props) {

  const dispatch = useDispatch();
    
  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    dispatch(
      fetchCustomer(null,"id" , "asc", "all", 0)
    );
  };

  const classes = useStyles();

  const customerList = useSelector((state) => state.customer);
  const show = useSelector((state) => state.customerCreate.show);

  const [result, setResult] = useState(false);
  const error = useSelector((state) => state.customerCreate.error);

  const done = () => {
    setResult(false);
    props.refresh();
  };
  
  const initialValues = {
    company:"",
    name: "",
    email: "",
    mobile: "",
    address: "",
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
          >{
               ({
              submitForm,
              isSubmitting,
              handleChange,
              resetForm,
              touched,
              errors,
              values,
              setFieldValue
            
            }) => ( 
              <div>
<Form>
<Grid container  justify="center" alignItems="center" item xs={12}>
<Grid item xs={12} md={2}>




<Autocomplete
        id="id"
        name="id"
        freeSolo
        value={values.id?values.id.toString():null}
        options={customerList.customers}
        getOptionLabel={(option) => {
                      
          if (typeof option === "string") {
            return option;
          }
          
          if (option.inputValue) {
            return option.inputValue;
          }
          
          return option.id.toString();
        }}

        renderOption={(option) => option.id.toString()}


        onChange={  (event, newValue) => {
          if (typeof newValue === "string") {
            setFieldValue('id',newValue.id,true)
            setFieldValue('company',newValue.company,true)
            setFieldValue('address',newValue.address,true)
            setFieldValue('name',newValue.name,true)
            setFieldValue('email',newValue.email,true)
            setFieldValue('mobile',newValue.mobile,true)          
          } else if (newValue && newValue.inputValue) {
            setFieldValue('id',newValue.inputValue,true)
          } else {
            setFieldValue('id',newValue?newValue.id:null,true)
            setFieldValue('company',newValue?newValue.company:null,true)
            setFieldValue('address',newValue?newValue.address:null,true)
            setFieldValue('name',newValue?newValue.name:null,true)
            setFieldValue('email',newValue?newValue.email:null,true)
            setFieldValue('mobile',newValue?newValue.mobile:null,true)
    
          } }}





        
        renderInput={(params) => (
          <TextField {...params} label="ID" margin="normal" variant="outlined" />
        )}
      />

      </Grid>
      <Grid item xs={12} md={2}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="company">COMPANY</InputLabel>
        <Select
          labelId="company"
          id="company"
          name="company"
          value={values.company||""}
          onChange={handleChange}
          label="COMPANY"
          isSearchable={true} >
          <MenuItem value={""}><em>Select Null</em></MenuItem>
          <MenuItem value={1}>Teraret Managed Cloud</MenuItem>
        </Select>
      </FormControl>
      
      </Grid>
      <Grid item sm={12} md={2}>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    value={values.name||""}
                    onChange={e => {
                    setFieldValue('name',e.target.value,true)
                  }}
                    style={{ margin: 0 }}
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
  
  
<Grid item xs={12} md={2}>
  <Searchautocomplete label="E-MAIL" name="email" value={values.email||""}  onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setFieldValue('id',newValue.id.toString(),true)
          setFieldValue('company',newValue.company,true)
          setFieldValue('address',newValue.address,true)
          setFieldValue('name',newValue.name,true)
          setFieldValue('email',newValue.email,true)
          setFieldValue('mobile',newValue.mobile,true)          
        } else if (newValue && newValue.inputValue) {
          setFieldValue('email',newValue.inputValue,true)
        } else {
          setFieldValue('id',newValue?newValue.id:null,true)
          setFieldValue('company',newValue?newValue.company:null,true)
          setFieldValue('address',newValue?newValue.address:null,true)
          setFieldValue('name',newValue?newValue.name:null,true)
          setFieldValue('email',newValue?newValue.email:null,true)
          setFieldValue('mobile',newValue?newValue.mobile:null,true)
  
        } }} 

        
        
        options={customerList}  helperText={errors.email && touched.email ? errors.email : null} />
</Grid>
<Grid item xs={12} md={2}>
  <Searchautocomplete label="MOBILE" name="mobile" value={values.mobile||""}  onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setFieldValue('id',newValue.id.toString(),true)
          setFieldValue('company',newValue.company,true)
          setFieldValue('address',newValue.address,true)
          setFieldValue('name',newValue.name,true)
          setFieldValue('email',newValue.email,true)
          setFieldValue('mobile',newValue.mobile,true)          
        } else if (newValue && newValue.inputValue) {
          setFieldValue('mobile',newValue.inputValue,true)
        } else {
          setFieldValue('id',newValue?newValue.id:null,true)
          setFieldValue('company',newValue?newValue.company:null,true)
          setFieldValue('address',newValue?newValue.address:null,true)
          setFieldValue('name',newValue?newValue.name:null,true)
          setFieldValue('email',newValue?newValue.email:null,true)
          setFieldValue('mobile',newValue?newValue.mobile:null,true)
  
        } }}  options={customerList}  helperText={errors.mobile && touched.mobile ? errors.mobile : null} />
</Grid>
  <Grid item sm={12} md={2}>
                  <TextField
                    id="outlined-full-width"
                    label="Address"
                    name="address"
                    fullWidth
                    value={values.address||""}
                    onChange={handleChange}
                    style={{ margin: 0 }}
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
    <Dialog
    open={result}
    onClose={() => {resetForm();
      done();
    }}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
      {show.id ? (
                          <DialogTitle id="alert-dialog-title">
                            Id {show.id} Created
                            </DialogTitle>
                        ) : null}
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                      
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
                      </Grid>

      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => {resetForm();
                                done();
                              }} color="primary" autoFocus>
        OK
      </Button>
    </DialogActions>
  </Dialog>
                ) : null}




                </Form>

    </div>

    
    
    )
    }
    </Formik>



    </Paper></Grid></div>
    );
}
export default CustomerSearch;