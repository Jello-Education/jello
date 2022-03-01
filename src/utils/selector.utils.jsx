import React from 'react';
import { MenuItem, ListItemText, Checkbox } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from '../components/inputs/Input.component';

export const handleSelectOptions = (options) =>
  options.map((option) => (
    <MenuItem key={option.id} value={option.id}>
      {option.name}
    </MenuItem>
  ));

export const handleMultipleSelectOptions = (options, selected) =>
  options.map((option) => (
    <MenuItem key={option.id} value={option.id}>
      <Checkbox color="primary" checked={selected.includes(option.id)} />
      <ListItemText primary={option.name} />
    </MenuItem>
  ));

export const handleMultipleSelectValues = (options, selected) =>
  options
    .filter((option) => selected.includes(option.id))
    .map(({ name }) => name)
    .join(', ');

export const handleAutocompleteMultipleSelect = (
  id,
  options,
  value,
  onChange,
  label
) => (
  <Autocomplete
    id={id}
    multiple
    disableCloseOnSelect
    value={options.filter(({ id }) => value.includes(id))}
    options={options}
    onChange={onChange}
    getOptionLabel={(option) => option.name}
    renderOption={(option, { selected }) => (
      <>
        <Checkbox checked={selected} color="primary" />
        {option.name}
      </>
    )}
    renderTags={(value) => value.map(({ name }) => name).join(', ')}
    renderInput={(params) => <Input label={label} fullWidth {...params} />}
    fullWidth
  />
);

export const commonSortOption = (
  field,
  callback = (item) => item?.toUpperCase()
) => ({
  field,
  callback,
});

const nameOptionStyle = {
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginLeft: 3,
  },
};

export const handleNameOption = (name, icon) => (
  <span style={{ ...nameOptionStyle }}>
    {name}
    {icon}
  </span>
);
