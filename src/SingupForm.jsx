import { useFormik } from 'formik';

function SignupForm() {
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SignupForm;