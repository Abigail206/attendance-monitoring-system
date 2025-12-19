// Filename - pages/Support.js

// Filename - pages/Services.js


import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const DataRow = styled.tr`
  border-bottom: 1px solid #ddd;
  font-size: 15px;
`;

const DataCell = styled.td`
  padding: 12px 8px;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
  background-color: #F5DFFB;
  font-size: 15px;
`;

const Profile = () => {
  const [form, setForm] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 5; // Number of profiles per page

  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, form]);
    setForm({});
    alert('Registration successful!');
  };

const handleDeleteProfile = (indexToDelete)=>{
  setSubmittedData(submittedData.filter((_,index)=> index!== indexToDelete));
};



  // Calculate current profiles to display based on pagination
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = submittedData.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="profile">
      <div className="page-background" style={{ marginTop: '10px', marginLeft: '75px' }}>
        <div
          className="card login-card p-4"
          style={{
            height: '450px',
            margin: 'auto',
            padding: '40px',
            maxWidth: '800px',
            backgroundColor: '#FFF3D0',
          }}
        >
          <div className="row d-flex justify-content-center m-4">
            <h1 className="text-center" style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>
              Profile Registration
            </h1>
            <form className="col-md-12" onSubmit={handleFormSubmit}>
              <div className="d-flex row">
                <div className="col-6">
                  <label htmlFor="companyName">Enter Company Name</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="e.g. Google"
                    id="companyName"
                    name="companyName"
                    value={form.companyName || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="address1">Address1</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="e.g. AnnaNagar(63)"
                    id="address1"
                    name="address1"
                    value={form.address1 || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="e.g. Complete Address"
                    id="address"
                    name="address"
                    value={form.address || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="pincode">PinCode</label>
                  <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="e.g. 600053"
                    id="pincode"
                    name="pincode"
                    value={form.pincode || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="e.g. TamilNadu"
                    id="state"
                    name="state"
                    value={form.state || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="district">District</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="e.g. Chennai"
                    id="district"
                    name="district"
                    value={form.district || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex row">
                <div className="col-6">
                  <label htmlFor="photo">Company Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control mb-2"
                    id="photo"
                    name="photo"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-1 w-100" style={{ marginTop: '30px' }}>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <DataTable className="table">
          <thead>
            <tr>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>S.No</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Company Name</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Address 1</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Address</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Pincode</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>State</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>District</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Company Photo</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Update</TableHeader>
              <TableHeader style={{ backgroundColor: '#F5DFFB' }}>Delete</TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentProfiles.length > 0 ? (
              currentProfiles.map((data, index) => (
                <DataRow key={index}>
                  <DataCell>{indexOfFirstProfile + index + 1}</DataCell>
                  <DataCell>{data.companyName}</DataCell>
                  <DataCell>{data.address1}</DataCell>
                  <DataCell>{data.address}</DataCell>
                  <DataCell>{data.pincode}</DataCell>
                  <DataCell>{data.state}</DataCell>
                  <DataCell>{data.district}</DataCell>
                  <DataCell>
                    {data.photo && (
                      <img src={URL.createObjectURL(data.photo)} alt="Company" width="50" height="50" />
                    )}
                  </DataCell>
                  <DataCell>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => alert('Update functionality not implemented')}
                    >
                      Update
                    </button>
                  </DataCell>
                  <DataCell>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteProfile(indexOfFirstProfile+index)}
                    >
                      Delete
                    </button>
                  </DataCell>
                </DataRow>
              ))
            ) : (
              <DataRow>
                <DataCell colSpan="10">Data not found</DataCell>
              </DataRow>
            )}
          </tbody>
        </DataTable>

        {/* Pagination Controls */}
        {submittedData.length > profilesPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <ul className="pagination">
              {Array.from({ length: Math.ceil(submittedData.length / profilesPerPage) }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
