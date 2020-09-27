import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { capitalCase } from 'change-case';
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Popover,
  SvgIcon,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Settings as SettingsIcon } from 'react-feather';

import { THEMES } from 'utils/constants';
import { useSettingsStyles } from './styles';
import { updateSettings } from 'store/settingsSlice';

function Settings() {
  const dispatch = useDispatch();
  const classes = useSettingsStyles();
  const ref = useRef(null);
  const { settings } = useSelector((state) => state);
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState({
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  const toggleOpen = (bool) => setOpen(bool);

  const handleChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const handleSave = () => {
    dispatch(updateSettings(values));
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Configurações'>
        <IconButton color='inherit' onClick={() => toggleOpen(true)} ref={ref}>
          <SvgIcon fontSize='small'>
            <SettingsIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={() => toggleOpen(false)}
        open={isOpen}
      >
        <Typography variant='h4' color='textPrimary'>
          Configurações
        </Typography>
        <Box mt={2} px={1}>
          <FormControlLabel
            control={
              <Switch
                checked={values.responsiveFontSizes}
                edge='start'
                name='direction'
                onChange={(event) =>
                  handleChange('responsiveFontSizes', event.target.checked)
                }
              />
            }
            label='Tamanho de fontes adaptável'
          />
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label='Tema'
            name='theme'
            onChange={(event) => handleChange('theme', event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant='outlined'
          >
            {Object.keys(THEMES).map((theme) => (
              <option key={theme} value={theme}>
                {capitalCase(theme)}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2}>
          <Button variant='contained' color='secondary' fullWidth onClick={handleSave}>
            Salvar Preferências
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default Settings;
