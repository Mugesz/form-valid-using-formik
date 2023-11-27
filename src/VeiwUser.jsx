import React, { useContext } from "react";
import UserContext from "./Context";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const { formData } = useContext(UserContext);
  return (
    <div className="container">
      <h3 className="text-center"> Use Formik Form validation</h3>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>author</th>
                    <th>ISBN country</th>
                    <th>publised at</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.title}</td>
                      <td>{data.author}</td>
                      <td>{data.isbn}</td>
                      <td>{data.Dob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link className="btn" to="/createuser">
          <button className="btn btn-success text-center">Create User</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateUser;
