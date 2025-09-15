import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "../headerSearchItems.js";

function SimpleSearchForm({defaultSearchedWord, setDefaultSearchedWord}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {handleSubmit, control} = useForm({
    defaultValues: {
      basicSearch: defaultSearchedWord
    }
  });

  function onSearchSubmit(data) {
    searchParams.set("word", data.basicSearch);
    searchParams.set("alphabet", "all");
    searchParams.set("definition", "");
    searchParams.set("field", "all");
    searchParams.set("category", "all");
    searchParams.set("prefix", "");
    searchParams.set("infix", "");
    searchParams.set("suffix", "");
    searchParams.set('page', '1')
    navigate(`/words?${searchParams.toString()}`);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSearchSubmit)} width="100%">
      <Search>
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>
        <Controller
          name="basicSearch"
          control={control}
          render={({field}) => (
            <StyledInputBase
              {...field}
              placeholder="جستجو …"
              inputProps={{"aria-label": "search"}}
              onChange={
                (e) => {
                  field.onChange(e.target.value);
                  setDefaultSearchedWord(e.target.value);
                }
              }
              value={field.value}
              required
            />)
          }
        />
      </Search>
    </Box>
  );
}

SimpleSearchForm.propTypes = {
  defaultSearchedWord: PropTypes.string,
  setDefaultSearchedWord: PropTypes.func,
};

export default SimpleSearchForm;