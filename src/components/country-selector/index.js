import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'

export default function CountrySelector({ value, handleOnChange }) {
    // const [value, setValue] = useState('')
    // const handleOnChange = (e) => {
    //     setValue(e.target.value);
    // }
    return (
        <FormControl>
            <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
            <NativeSelect value={value} onChange={handleOnChange} inputProps={{name: 'country', id: 'country-selector'}} />
        </FormControl>
    )
}
