import modularClassNamer from '../../utility/functions/modularClassNamer';
import styles from './Input.module.css';
const $ = modularClassNamer(styles);

const Input = ({ formik, type, label, fieldPropName }) => {
  return (
    <div className={$`input-wrapper`}>
      <div className={$`input-wrapper__field`}>
        {' '}
        <label htmlFor={fieldPropName}>{label}:</label>
        <input
          className={`${
            formik.touched[fieldPropName] &&
            formik.errors[fieldPropName] &&
            styles.error
          }`}
          {...formik.getFieldProps(fieldPropName)}
          type={type}
          name={fieldPropName}
          id={fieldPropName}
        />
      </div>

      {formik.touched[fieldPropName] && formik.errors[fieldPropName] && (
        <p className={$`input-wrapper__error`}>
          {formik.errors[fieldPropName]}
        </p>
      )}
    </div>
  );
};

export default Input;
