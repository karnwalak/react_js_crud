import React,{useState,useEffect} from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import axios from "axios";
export default function EditUser() {
  let navigate = useNavigate ();
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
  const onInputChange = (e) => {
     setUser({...user,[e.target.name]:e.target.value});
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put("http://localhost:3001/users/"+id, user);
    navigate('/');
  };

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
        <h1 className="text-center">Edit User</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
          <div className="row justify-content-end">
          <Link to="/" className="btn btn-success col-1">Back</Link>
          </div>
            <form onSubmit={e=>onSubmit(e)}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                  name="username"
                  value={username}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Mobile"
                  name="mobile"
                  value={mobile}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Website"
                  name="website"
                  value={website}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
