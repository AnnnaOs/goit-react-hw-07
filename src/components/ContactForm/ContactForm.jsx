import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { BsPhone, BsPerson, BsPersonAdd } from 'react-icons/bs';
import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const usernameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off" className={css.contactFormWrap}>
        <label className={css.contactFormLabel} htmlFor={usernameId}>
          Name
        </label>
        <div className={css.contactFormInputWrap}>
          <Field
            className={css.contactFormInput}
            type="text"
            name="name"
            id={usernameId}
          />
          <BsPerson className={css.contactFormIcon} size="20" />
        </div>
        <ErrorMessage
          name="name"
          component="span"
          className={css.contactFormError}
        />

        <label className={css.contactFormLabel} htmlFor={numberId}>
          Number
        </label>
        <div className={css.contactFormInputWrap}>
          <Field
            className={css.contactFormInput}
            type="text"
            name="number"
            id={numberId}
          />
          <BsPhone className={css.contactFormIcon} size="20" />
        </div>
        <ErrorMessage
          name="number"
          component="span"
          className={css.contactFormError}
        />

        <button className={css.contactFormBtn} type="submit">
          <BsPersonAdd className={css.contactFormBtnIcon} size="15" />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
