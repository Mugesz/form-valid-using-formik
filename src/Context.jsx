import { createContext, useState } from "react";
import { useFormik } from "formik";

let UserContext = createContext();

export const UserProiveder = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      Dob: "",
    },

    validate: (values) => {
      let errors = {};
   
      return errors;
    },

    onSubmit: (values, formikbag) => {
      console.log(values);
      setFormData([...formData, values]);
      formikbag.resetForm();
    },
  });
  return (
    <UserContext.Provider value={{ formik, formData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
