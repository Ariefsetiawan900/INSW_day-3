import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
 
const EditProduct = () => {
   
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: ""
  });
  console.log(id)
 
  const { name, phone, email } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
 
  const onSubmit = async e => {
    try {
      e.preventDefault();
      await axios.patch(`http://044b2d67f359.ngrok.io/karyawan/${id}`,user);
      alert("Data Berhasil di update")
      history.push("/");
    } catch (error) {
      alert("gagal")
    }
  };
 
  return (
    <div className="container">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Karyawan</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Masukan Nama"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Masukan No. Handphone"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Masukan Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-secondary btn-block">Update Data</button>
        </form>
       </div>
      </div> 
    </div>
  );
};
 
export default EditProduct;
