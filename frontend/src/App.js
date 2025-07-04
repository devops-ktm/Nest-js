import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleEdit = (user) => {
    setEditUserId(user.id);
    setEditForm({ name: user.name, email: user.email });
  };

  const handleUpdate = (id) => {
    setUsers(users.map(user => (
      user.id === id ? { ...user, ...editForm } : user
    )));
    setEditUserId(null);
    setEditForm({ name: '', email: '' });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>👥 User List</h1>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1rem'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>
                {editUserId === user.id ? (
                  <input
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td style={tdStyle}>
                {editUserId === user.id ? (
                  <input
                    name="email"
                    value={editForm.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td style={tdStyle}>
                {editUserId === user.id ? (
                  <button onClick={() => handleUpdate(user.id)} style={updateButtonStyle}>
                    Update
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)} style={editButtonStyle}>
                      Edit
                    </button>
                    {' '}
                    <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd'
};

const tdStyle = {
  padding: '10px'
};

const inputStyle = {
  padding: '6px',
  fontSize: '14px',
  width: '90%'
};

const deleteButtonStyle = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const editButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const updateButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default App;
