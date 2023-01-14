import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps extends OutlinedInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  return (
    <FormControl variant="standard">
      <OutlinedInput
        {...props}
        id="input-with-icon-adornment"
        size="small"
        placeholder="Type search value..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
