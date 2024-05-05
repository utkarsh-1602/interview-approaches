import React, { useState, useEffect } from "react";
import axios from "axios";
import Logout from "../Logout";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/getUsers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <Logout/>
    <div style={{ marginTop: "20px", width: "100%" }}>
      <h1 style={{ textAlign: "center", background:"white", padding:"20px"}}>Registered Users List</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "16px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#333", color: "#fff" }}>Name</th>
            <th style={{ padding: "16px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#333", color: "#fff" }}>Email</th>
            <th style={{ padding: "16px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#333", color: "#fff" }}>Date of Birth</th>
            <th style={{ padding: "16px", textAlign: "left", borderBottom: "1px solid #ddd", backgroundColor: "#333", color: "#fff" }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#c8e6c9" : "#c8e6c9  ", borderBottom: "1px solid #218813" }}>
              <td style={{ padding: "16px", textAlign: "left" }}>{user.name}</td>
              <td style={{ padding: "16px", textAlign: "left" }}>{user.email}</td>
              <td style={{ padding: "16px", textAlign: "left" }}>{user.dateOfBirth}</td>
              <td style={{ padding: "16px", textAlign: "left" }}>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserList;
