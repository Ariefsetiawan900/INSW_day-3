import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://044b2d67f359.ngrok.io/karyawan");
      console.log(result.data.data);
      setUsers(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (nik) => {
    try {
      await axios.delete(`http://044b2d67f359.ngrok.io/karyawan/${nik}`);

      setUsers(users.filter((user) => user.nik !== nik));
      alert("Data berhasil dihapus");
    } catch (error) {
      alert("gagal untuk menghapus");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">No. Handphone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Link style={{ marginRight: "10px" }} to={`edit/${user.nik}`}>
                    <i class="bi bi-pencil-square text-warning fs-4"></i>
                  </Link>
                  <Link>
                    <i
                      class="bi bi-trash-fill text-danger fs-4"
                      onClick={() => deleteUser(user.nik)}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
