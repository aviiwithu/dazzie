import React from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material';
import searchIcon from '../../assets/icons/SEARCH.svg';



const SearchBarBasic = (props) => {
  return (
        <OutlinedInput
        // fullWidth
        // size='small'
        className='searchField'
        placeholder='Search Here...'
        sx={{background:'#F7F7FC'}}
            // value={values.weight}
            // onChange={handleChange('weight')}
        startAdornment={<InputAdornment position="start"> 
                            <img src={searchIcon} alt="search" />
                        </InputAdornment>}
        {...props}
          />
  )
}

export default SearchBarBasic