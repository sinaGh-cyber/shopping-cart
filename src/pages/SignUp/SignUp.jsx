import { useFormik } from 'formik';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './SignUp.module.css';
import * as Yup from 'yup';
import Input from '../../components/Input/Input';
import { signUp } from '../../services/httpServices';
import { toast } from 'react-toastify';
import { useAuth, useSetAuth } from '../../providers/Auth/AuthProvider';
import { useEffect } from 'react';

const $ = modularClassNamer(styles);

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(6, 'Name length is not valid'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  passwordConfirm: Yup.string()
    .required('Password Confirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const setAuth = useSetAuth();
  const auth = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });

  useEffect(() => {
    !auth.notHasAuthData && navigate(`/${searchParams.get('redirect')}`);
  }, [auth, searchParams, navigate]);

  async function onSubmit(values) {
    try {
      const { passwordConfirm, ...formData } = values;
      const { data } = await signUp(formData);
      setAuth(data);

      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <section
      onSubmit={formik.handleSubmit}
      className={$`sign-up-section container `}
    >
      <form className={$`form`}>
        <Input formik={formik} type="text" label="Name" fieldPropName="name" />
        <Input
          formik={formik}
          type="tel"
          label="Phone number"
          fieldPropName="phoneNumber"
        />
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
        <Input
          formik={formik}
          type="password"
          label="Password confirm"
          fieldPropName="passwordConfirm"
        />

        <div className={$`button-group`}>
          <Link to={`/login?redirect=${searchParams.get('redirect')}`}>
            already signed up ?
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

export default SignUp;
