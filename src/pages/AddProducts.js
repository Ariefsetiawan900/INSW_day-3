import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory(); // Use for Navigate on Previous
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { name, phone, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
      try {
          e.preventDefault();
          await axios.post("http://044b2d67f359.ngrok.io/karyawan", user);
          alert("Data sudah ditambahkan");
          history.push("/");
      } catch (error) {
          alert("Data gagal di masukan")
      }
  };
  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div class="row d-flex justify-content-center align-items-center">
        <div className="col-sm-4 mt-5 shadow p-5">
          <h2 className="text-center mb-4">Tambah Karyawan</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Masukan Nama"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Masukan No. Handphone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Masukan Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
