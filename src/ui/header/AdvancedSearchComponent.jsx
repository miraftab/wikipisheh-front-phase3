import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Grid from "@mui/material/Grid";

import UseAdvSearchFields from "./useAdvSearchFields.js";
import WpTextFieldSearch from "../WpTextFieldSearch.jsx";
import WpButton from "../WpButton.jsx";
import { persianAlphabet } from "../../utils/constants.js";
import useSetWordFromParams from "../../features/words/useSetWordFromParams.js";


function AdvancedSearchComponent({setShowAdvancedSearch, defaultSearchedWord, setDefaultSearchedWord}) {
  const [searchParams] = useSearchParams();
  const {
          searchedAlphabet,
          searchedDefinition,
          searchedField,
          searchedCategory,
          searchedPrefix,
          searchedInfix,
          searchedSuffix
        } = useSetWordFromParams();

  const [fields, setFields] = useState(["همهٔ پیشه‌ها"]);
  const [categories, setCategories] = useState(["همهٔ مقولات"]);
  const navigate = useNavigate();
  const {handleSubmit, control} = useForm({
    defaultValues: {
      word: defaultSearchedWord,
      alphabet: searchedAlphabet === "all" ? persianAlphabet[0] : searchedAlphabet,
      definition: searchedDefinition,
      field: searchedField === "all" ? "همهٔ پیشه‌ها" : searchedField,
      category: searchedCategory === "all" ? "همهٔ مقولات" : searchedCategory,
      prefix: searchedPrefix,
      infix: searchedInfix,
      suffix: searchedSuffix
    }
  });


  const {isLoading, fields: apiFields, categories: apiCategories, errors: apiErrors} = UseAdvSearchFields();

  useEffect(() => {
    if (!isLoading && apiFields !== undefined && apiCategories !== undefined) {
      const tempField = apiFields.map((field) => field.title);
      tempField.unshift("همهٔ پیشه‌ها");
      const tempCategory = apiCategories.map((category) => category.title);
      tempCategory.unshift("همهٔ مقولات");
      setFields(tempField);
      setCategories(tempCategory);
    }
  }, [apiCategories, apiFields, isLoading]);

  if (apiErrors) {
    toast.error("مشکلی در دریافت اطلاعات از سرور رخ داده است، لطفاً بعداً دوباره تلاش کنید.");
  }

  function onAdvSearchSubmit(data) {
    if (data.alphabet === "همهٔ حروف الفبا" || !data.alphabet) data.alphabet = "all";
    if (data.field === "همهٔ پیشه‌ها" || !data.field) data.field = "all";
    if (data.category === "همهٔ مقولات" || !data.category) data.category = "all";

    if (!data.word && !data.definition && !data.prefix && !data.infix && !data.suffix) {
      toast.error("برای جستجو عبارتی را وارد کنید.");
    } else {
      Object.entries(data).forEach(([k, v]) => searchParams.set(k, String(v)));
      searchParams.set('page', '1')
      navigate(`/words?${searchParams.toString()}`);
    }
  }

  return (
    <Box position="relative" width="100%" borderRadius={4} p={2} display="flex" flexDirection="column">
      <Divider sx={{borderColor: "secondary.main", mb: 2}}/>
      <IconButton onClick={() => setShowAdvancedSearch(false)}
                  sx={{position: "absolute", top: "1rem", right: ".5rem", color: "common.white"}}>
        <CloseRoundedIcon/>
      </IconButton>
      <Typography variant="h5" color="common.white">جستجوی پیشرفته</Typography>
      <Box component="form" mt={2} onSubmit={handleSubmit(onAdvSearchSubmit)}>
        {/* Search word and alphabet*/}
        <Grid container direction="column" spacing={2}>
          <Grid container spacing={2} direction={{xs: "column", md: "row"}}>
            <Grid size={{xs: 12, md: 10}}>
              <Controller
                name="word"
                control={control}
                render={({field}) => (
                  <WpTextFieldSearch
                    {...field}
                    size="small"
                    placeholder="جستجوی واژه"
                    fullWidth
                    onChange={
                      (e) => {
                        field.onChange(e.target.value);
                        setDefaultSearchedWord(e.target.value);
                      }
                    }
                    value={field.value}
                    // defaultValue={defaultSearchedWord}
                  />
                )}
              />

            </Grid>
            <Grid size={{xs: 12, md: 2}}>
              <Controller
                name="alphabet"
                control={control}
                render={({field}) => (
                  <Autocomplete
                    {...field}
                    size="small"
                    options={persianAlphabet}
                    loading={isLoading}
                    slotProps={{paper: {sx: {borderRadius: "2rem"}},}}
                    onChange={(_, data) => field.onChange(data)}
                    value={field.value}
                    defaultValue={searchedAlphabet === "all" ? persianAlphabet[0] : searchedAlphabet}
                    renderInput={(params) => (
                      <WpTextFieldSearch
                        fullWidth size="small" placeholder="حروف الفبا"
                        {...params}
                        slotProps={{
                          input: {
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                              </>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* Definition and Fields and Categories */}
          <Grid container spacing={2} direction="row">
            <Grid size={{xs: 12, md: 8}}>
              {/*<WpTextFieldSearch id="definition" fullWidth size="small" placeholder="جستجو در تعریف" {...register("definition")}/>*/}
              <Controller
                name="definition"
                control={control}
                render={({field}) => (
                  <WpTextFieldSearch
                    {...field}
                    size="small"
                    placeholder="جستجو در تعریف"
                    fullWidth
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    // defaultValue={searchedDefinition}
                  />
                )}
              />
            </Grid>
            <Grid size={{xs: 6, md: 2}}>
              <Controller
                name="field"
                control={control}
                render={({field}) => (
                  <Autocomplete
                    {...field}
                    size="small"
                    options={fields}
                    loading={isLoading}
                    slotProps={{paper: {sx: {borderRadius: "2rem"}},}}
                    onChange={(_, data) => field.onChange(data)}
                    value={field.value}
                    // defaultValue={searchedField}
                    renderInput={(params) => (
                      <WpTextFieldSearch
                        fullWidth size="small" placeholder="پیشه‌ها"
                        {...params}
                        slotProps={{
                          input: {
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                              </>
                            ),
                          },
                        }}
                      />
                    )}
                  />)}
              />
            </Grid>
            <Grid size={{xs: 6, md: 2}}>
              <Controller
                name="category"
                control={control}
                render={({field}) => (
                  <Autocomplete
                    {...field}
                    size="small"
                    options={categories}
                    loading={isLoading}
                    slotProps={{paper: {sx: {borderRadius: "2rem"}},}}
                    onChange={(_, data) => field.onChange(data)}
                    value={field.value}
                    // defaultValue={searchedDefinition}
                    renderInput={(params) => (
                      <WpTextFieldSearch
                        fullWidth size="small" placeholder="مقولات"
                        {...params}
                        slotProps={{
                          input: {
                            ...params.InputProps,
                            endAdornment: (
                              <>
                                {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                              </>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </Grid>

          {/* prefix, infix and suffix and submit */}
          <Grid container spacing={2}>
            <Grid size={{xs: 4, md: 2}}>
              {/*<WpTextFieldSearch id="prefix" fullWidth size="small" placeholder="پیشوند" {...register("prefix")}/>*/}
              <Controller
                name="prefix"
                control={control}
                render={({field}) => (
                  <WpTextFieldSearch
                    {...field}
                    size="small"
                    placeholder="پیشوند"
                    fullWidth
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    // defaultValue={searchedPrefix}
                  />
                )}
              />
            </Grid>
            <Grid size={{xs: 4, md: 2}}>
              <Controller
                name="infix"
                control={control}
                render={({field}) => (
                  <WpTextFieldSearch
                    {...field}
                    size="small"
                    placeholder="بیناوند"
                    fullWidth
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    // defaultValue={searchedInfix}
                  />
                )}
              />
            </Grid>
            <Grid size={{xs: 4, md: 2}}>
              {/*<WpTextFieldSearch id="suffix" fullWidth size="small" placeholder="پسوند" {...register("suffix")}/>*/}
              <Controller
                name="suffix"
                control={control}
                render={({field}) => (
                  <WpTextFieldSearch
                    {...field}
                    size="small"
                    placeholder="پسوند"
                    fullWidth
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    // defaultValue={searchedSuffix}
                  />
                )}
              />
            </Grid>
            <Grid size="grow" display={{xs: "none", md: "block"}}></Grid>
            <Grid size={{xs: 12, md: 2}}>
              <WpButton variant="contained" disableElevation fullWidth size="small" type="submit">جستجو</WpButton>
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}

AdvancedSearchComponent.propTypes = {
  setShowAdvancedSearch: PropTypes.func.isRequired,
  defaultSearchedWord: PropTypes.string,
  setDefaultSearchedWord: PropTypes.func,
};

export default AdvancedSearchComponent;