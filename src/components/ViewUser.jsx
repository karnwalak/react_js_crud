import React,{useState,useEffect} from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import axios from "axios";
export default function ViewUser() {
  // let navigate = useNavigate ();
  const { id } = useParams();
  // alert(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    mobile:"",
    website:"",
  });
  const { name, username, email, mobile, website } = user;
  // const onInputChange = (e) => {
  //    setUser({...user,[e.target.name]:e.target.value});
  // };
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   await axios.put("http://localhost:3001/users/"+id, user);
  //   navigate('/');
  // };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users/"+id);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">View User</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
          <div className="row justify-content-end">
          <Link to="/" className="btn btn-success col-1">Back</Link>
          </div>
               <table className="table table-bordered">
                  <tr>
                      <td>Name</td>
                      <td>{name}</td>
                  </tr>
                  <tr>
                      <td>Username</td> 
                      <td>{username}</td>
                  </tr>
                  <tr>
                      <td>Email</td> 
                      <td>{email}</td>
                  </tr>
                  <tr>
                      <td>Mobile</td> 
                      <td>{mobile}</td>
                  </tr>
                  <tr>
                      <td>Website</td> 
                      <td>{website}</td>
                  </tr>
               </table>
          </div>
        </div>
      </div>
    </div>
  );
}
