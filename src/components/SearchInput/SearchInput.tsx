import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps extends OutlinedInputProps {
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  value: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <FormControl variant="standard">
      <OutlinedInput
        {...props}
        onChange={onChange}
        value={value}
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
