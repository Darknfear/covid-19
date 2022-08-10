import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';
// import * as uuid from 'uuid';

export default function CountrySelector({ value, handleOnChange, countries }) {
    return (
        <FormControl>
            <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
            <NativeSelect 
                value={value}
                onChange={handleOnChange} 
                inputProps={{name: 'country', id: 'country-selector'}}>
                {countries?.map((country, index) => <option key={index} value={country.Country}>{country.ISO2}</option>)}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}
