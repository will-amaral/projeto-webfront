import React, { useState } from 'react';
import { Box, Chip, IconButton, SvgIcon, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Plus as PlusIcon } from 'react-feather';

import { useTagsStyle } from './styles';

function TagsInput(props) {
  const { setFieldValue, values, autocomplete } = props;
  const [tag, setTag] = useState('');
  const classes = useTagsStyle();

  return (
    <>
      <Box mt={3} display='flex' alignItems='center'>
        {autocomplete ? (
          <Autocomplete
            options={autocomplete}
            fullWidth
            onInputChange={(_, value) => setTag(value)}
            inputValue={tag}
            renderInput={(params) => (
              <TextField {...params} label='Tags' name='tags' variant='outlined' />
            )}
          />
        ) : (
          <TextField
            fullWidth
            label='Tags'
            name='tags'
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            variant='outlined'
          />
        )}
        <IconButton
          variant='contained'
          className={classes.addTab}
          onClick={() => {
            if (!tag || values.tags.includes(tag)) {
              return;
            }
            setFieldValue('tags', [...values.tags, tag]);
            setTag();
          }}
        >
          <SvgIcon>
            <PlusIcon />
          </SvgIcon>
        </IconButton>
      </Box>
      <Box mt={2}>
        {values.tags.map((tag, i) => (
          <Chip
            variant='outlined'
            key={i}
            label={tag}
            className={classes.tag}
            onDelete={() => {
              const newTags = values.tags.filter((t) => t !== tag);

              setFieldValue('tags', newTags);
            }}
          />
        ))}
      </Box>
    </>
  );
}

export default TagsInput;
