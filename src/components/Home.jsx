import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    //    console.log(result.data);
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete("http://localhost:3001/users/"+id);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
          <div className="row justify-content-end">
          <Link to="/add" className="btn btn-success col-1"><i className="fa fa-user-plus"></i></Link>
          </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user,index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                      <Link to={"/view/"+user.id} className="btn btn-sm btn-primary mx-2"><i className="fa fa-eye"></i></Link>
                      <Link to={"/edit/"+user.id} className="btn btn-sm btn-success mx-2"><i className="fa fa-edit"></i></Link>
                      <Link to="" onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger mx-2"><i className="fa fa-trash"></i></Link>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
