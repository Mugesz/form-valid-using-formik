import React, { useState } from "react";
import "bootstrap";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      gender: "",
      martial: "",
      fav: [],
      Dob: "",
      message: "",
    },

    validate: (values) => {
      let errors = {};
      if (values.username === "") {
        errors.username = "Please enter the User name";
      }

      if (values.username.length <= 3 || values.username.length > 15) {
        errors.username = "User Name should be between 3 to 15";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (values.message.length < 120) {
        errors.message = "contains atleast 120 words";
      }
      return errors;
    },

    onSubmit: (values, formikbag) => {
      console.log(values);
      setFormData([...formData, values]);
      formikbag.resetForm();
    },
  });
  return (
    <div className="container">
      <h3 className="text-center">Form validation</h3>
      <div className="row mt-5">
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              className="form-control top-line"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red" }}>{formik.errors.username}</span>{" "}
            <br />
            <label>email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red" }}>{formik.errors.email}</span>
            <br /><br />
            <div className="col-75">
              <label for="country">country</label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                required
              >
                <option value="country">country</option>
                <option value="India">India</option>
                <option value="England">England</option>
                <option value="Australia">Australia</option>
                <option value="America">America</option>
              </select>
            </div>
            <br />
            <hr />
            <br />
            <div className="row">
              <div className="col-lg-4">
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                />
                <label for="male">male</label>

                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                />
                <label for="female">female</label>
              </div>
              <div className="col-lg-4">
                <input
                  type="radio"
                  name="martial"
                  required
                  value="married"
                  checked={formik.values.martial === "married"}
                  onChange={formik.handleChange}
                />
                <label for="married">married</label>{" "}
                <input
                  type="radio"
                  name="martial"
                  required
                  value="unmarried"
                  checked={formik.values.martial === "unmarried"}
                  onChange={formik.handleChange}
                />
                <label for="unmarried">unmarried</label>
              </div>
            </div>
            <br />
            <hr />
            <div className="row required">
              <div className="col-lg-3">
                <input
                  type="checkbox"
                  name="fav"
                  value="Apple"
                  checked={formik.values.fav.includes("Apple")}
                  onChange={formik.handleChange}
                />
                <label for="Apple">Apple</label>
              </div>
              <div className="col-lg-3">
                <input
                  type="checkbox"
                  name="fav"
                  value="Orange"
                  checked={formik.values.fav.includes("Orange")}
                  onChange={formik.handleChange}
                />
                <label for="Orange">Orange</label>{" "}
              </div>
              <div className="col-lg-3">
                <input
                  type="checkbox"
                  name="fav"
                  value="Watermelon"
                  checked={formik.values.fav.includes("Watermelon")}
                  onChange={formik.handleChange}
                />
                <label for="Watermelon">Watermelon</label>
              </div>
            </div>
            <br />
            <label>Dob</label>
            <input
              type="date"
              required
              className="form-control"
              name="Dob"
              value={formik.values.Dob}
              onChange={formik.handleChange}
            />{" "}
            <label>message</label>
            <textarea
              type="comment"
              required
              className="form-control area"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red" }}>{formik.errors.message}</span>{" "}
            <div className="col-lg-12 mt-4">
              <input
                type="submit"
                className="btn btn-primary"
                value={"Submit"}
              />
            </div>
          </form>
        </div>

        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Gender</th>
                        <th> martial</th>
                        <th> Fav</th>
                        <th> DOB</th>
                        <th> Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                          <td>{data.country}</td>
                          <td>{data.gender}</td>
                          <td>{data.martial}</td>
                          <td>{data.fav.join(",")}</td>
                          <td>{data.Dob}</td>
                          <td>{data.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
