import React, { useContext } from "react";
import UserContext from "./Context";
import { Link } from "react-router-dom";

const VeiwUser = () => {
  const { formik } = useContext(UserContext);

  return (
    <div className="container">
      <h3 className="text-center">Form validation</h3>
      <div className="form-control">
        <form onSubmit={formik.handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            className="form-control top-line"
            name="title"
            value={formik.values.titlt}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.username}</span> <br />
          <label>author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.email}</span>
          <br />
          <br />
          <div className="col-75">
            <label>ISBN number</label>
            <input
              type="number"
              name="isbn"
              value={formik.values.isbn}
              onChange={formik.handleChange}
              required
            />
          </div>
          <label>Published At</label>
          <input
            type="date"
            required
            className="form-control"
            name="Dob"
            value={formik.values.Dob}
            onChange={formik.handleChange}
          />{" "}
          <div className="col-lg-12 mt-4">
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </div>
        </form>
      </div>
      <div className="col-lg-12 mt-4 text-center">
            <Link to="/" className="btn">
              <button className="btn btn-success">View User</button>
            </Link>
          </div> 
    </div>
  );
};

export default VeiwUser;
