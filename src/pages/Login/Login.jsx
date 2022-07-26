import { useFormik } from 'formik';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './Login.module.css';
import * as Yup from 'yup';
import Input from '../../components/Input/Input';
import { useAuth, useSetAuth } from '../../providers/Auth/AuthProvider';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { login } from '../../services/httpServices';
const $ = modularClassNamer(styles);

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});

const Login = () => {
  const [searchParams] = useSearchParams();
  const setAuth = useSetAuth();
  const auth = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await login(values);
      setAuth(data);

      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });

  useEffect(() => {
    !auth.notHasAuthData && navigate(`/${searchParams.get('redirect')}`);
  }, [auth, searchParams, navigate]);
  return (
    <section
      onSubmit={formik.handleSubmit}
      className={$`login-section container `}
    >
      <form className={$`form`}>
        <Input
          formik={formik}
          type="email"
          label="Email"
          fieldPropName="email"
        />
        <Input
          formik={formik}
          type="password"
          label="Password"
          fieldPropName="password"
        />

        <div className={$`button-group`}>
          <Link to={`/signup?redirect=${searchParams.get('redirect')}`}>
            don't have an account?
          </Link>
          <button
            className={$`btn btn--primary`}
            disabled={!formik.isValid}
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
