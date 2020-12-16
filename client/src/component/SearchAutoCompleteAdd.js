import React from "react";

import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import Business from "@material-ui/icons/Business";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const filter = createFilterOptions();
  
function SearchAutoCompleteAdd (props) {
  const customerdata = props.options
  
    return (
      <div>
      <Autocomplete
      id={props.name}
      name={props.name}
                    value={props.value}

                   // helperText={props.helperText}

                    onChange={props.onChange}

                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);
                     
                      if (params.inputValue !== "") {
                        filtered.push({
                          inputValue: params.inputValue,
                          [props.name]: `Add "${params.inputValue}"`,
                        });
                      }

                      return filtered;
                    }}



                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                 
                    options={customerdata.customers}


                    getOptionLabel={(option) => {
                      
                      if (typeof option === "string") {
                        return option;
                      }
                      
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      
                      return option[props.name];
                    }}


                    renderOption={(option) => option[props.name]}

                    fullWidth

                    freeSolo

                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={props.label}
                        variant="outlined"
                        autoComplete="off"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <>
                              <InputAdornment position="start">
                                <Business />
                              </InputAdornment>
                              {params.InputProps.startAdornment}
                            </>
                          ),
                        }}
                      />
                    )}
                  />
                  {props.helperText}
    </div>
    );
}
export default SearchAutoCompleteAdd;