import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  TextField,
  FormHelperText,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import authService from 'utils/api';
import { login } from 'store/accountSlice';
import { LoadingButton as Button } from 'components';
import { parseErrors } from 'utils/helper';

function LoginForm(props) {
  const { className, onSubmitSuccess, ...rest } = props;
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        showPassword: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Entre um e-mail válido')
          .max(255)
          .required('Preencha o seu e-mail'),
        password: Yup.string()
          .min(8, 'Sua senha deve ter pelo menos 8 caracteres')
          .max(255)
          .required('Preencha o campo senha'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const { email, password } = values;
          await authService.loginWithEmailAndPassword(email, password);
          dispatch(login());
          onSubmitSuccess();
        } catch (error) {
          console.log(error);
          if (!error.response) {
            setErrors({ submit: 'Falha de resposta do servidor' });
          } else if (error.response.data.errors) {
            setErrors({ submit: parseErrors(error.response.data.errors) });
          } else if (error.response.data.error) {
            setErrors({ submit: error.response.data.message });
          } else {
            setErrors({ submit: error.message });
          }
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        setFieldValue,
      }) => (
        <form noValidate onSubmit={handleSubmit} {...rest}>
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label='E-mail'
            margin='normal'
            name='email'
            onBlur={handleBlur}
            onChange={handleChange}
            type='email'
            value={values.email}
            variant='outlined'
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label='Senha'
            margin='normal'
            name='password'
            onBlur={handleBlur}
            onChange={handleChange}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            variant='outlined'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setFieldValue('showPassword', !values.showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge='end'
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={2}>
            <Button
              color='primary'
              disabled={isSubmitting}
              loading={isSubmitting}
              fullWidth
              size='large'
              type='submit'
              variant='contained'
            >
              Entrar
            </Button>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmitSuccess: () => {},
};

export default LoginForm;
