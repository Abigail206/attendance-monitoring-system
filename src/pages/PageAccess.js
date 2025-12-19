import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import * as mdicons from "react-icons/md";
const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left:160px;
`;
const handleSubmit = (e) => {
    e.preventDefault();
    alert('Role Created successfully!');
};

const DataRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const DataCell = styled.td`
  padding: 12px 8px;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
  background-color:#F5DFFB;
`;

const DataTableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  
`;



export const PageAccess = () => {
    return (
        <div className="pageaccess">
            <h1>PageAccess</h1>
        </div>
    );
};
export const Pageaccess  = () => {
    return (
        <div>
        <div className='page-background' style={{ marginTop: '10px', marginLeft: '100px' }} >
        <div className='card p-4 login-card' style={{ height: '300px',padding: '40px',marginTop:'60px', maxWidth: '600px', backgroundColor: 'thistle',margin:'auto',marginLeft:'340px'}}>
            <div className='row d-flex justify-content-center m-4'>
                <h2 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>PAGE ACCESS FOR USER</h2>

                <form className='col-md-12' onSubmit={handleSubmit}>
                    <div className='d-flex row'>
                        <div className='col-12'>
                            <label className='text-left' for=''>ENTER NEW ROLE</label>
                            <input type='text' className='form-control style-input' required></input>
                        </div>
                        
                    <div className='row-mb-12'>
                        <div className='style'>
                            <div className='col-md-12 text-center'>
                        <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-1 w-100 ">
                            CREATE ROLE
                        </button>
                        </div> </div></div></div>
                </form>
            </div>
        </div>
       
        <DataTableContainer>
        <DataTable>
          <thead>
            <tr>
              <TableHeader>S.No</TableHeader>
              <TableHeader>Role</TableHeader>
              <TableHeader>Dashboard</TableHeader>
              <TableHeader>Company</TableHeader>
              <TableHeader>Branch</TableHeader>
              <TableHeader>Division</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>PageAccess</TableHeader>
              <TableHeader>UserRegister</TableHeader>
              <TableHeader>LogReport</TableHeader>
              <TableHeader>AttendanceReport</TableHeader>
              <TableHeader>MonthlyReport</TableHeader>
              <TableHeader>CompanyProfile</TableHeader>
              <TableHeader>Delete</TableHeader>
            </tr>
          </thead>
          <tbody>
          <>
            <DataRow>
              <DataCell >1</DataCell>
              <DataCell >Admin</DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
              </DataRow>
             <DataRow>
             <DataCell >2</DataCell>
             <DataCell >User</DataCell>
             <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
             </DataRow>
             <DataRow>
             <DataCell >3</DataCell>
             <DataCell >Manager</DataCell>
             <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><input type='checkbox' className="form-check-input"></input></DataCell>
              <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
             </DataRow>
             </>
          </tbody>
        </DataTable>
      </DataTableContainer>
      </div>
    </div>
    );
};

export const UserRegister = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration successful!');
    };




    return (
        <div className="pageaccess">

            <div>
                <div className='page-background ' style={{ marginTop: '10px', marginLeft: '75px' }}>
                    <div className='card p-4 login-card' style={{ height: '350px', margin: 'auto', padding: '40px', maxWidth: '800px', backgroundColor: '#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center mb-2' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>User Registration</h1>
                            <form className='col-md-12' onSubmit={handleSubmit}>

                                <div className="col-12 ">
                                    <div className="d-flex row">
                                        <div className="col-6">
                                            <label className='text-left ' for=''> User Name</label>
                                            <input type='text' className='form-control mb-2 style-input' placeholder='Enter User Name' required></input>
                                        </div>
                                        <div className="col-6 ">
                                            <label className='text-left' for=''> User Code</label>
                                            <input type='text' className='form-control mb-2 style-input' placeholder='Enter User Id' required></input>
                                        </div>
                                    </div>
                                    <div className="d-flex row">
                                        <div className="col-6 ">
                                            <label className='text-left' for=''> E-mail</label>
                                            <input type='text' className='form-control mb-2 style-input' placeholder='Enter Password' required></input>
                                        </div>
                                        <div className="col-6 ">
                                            <label className='text-left' for=''> Role</label>
                                            <select className='form-select mb-2 style-input ' required>
                                                <option value=''>Select a Role</option>
                                                <option value=''>Admin</option>
                                                <option value=''>User</option>
                                                <option value=''>Manager</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-8 w-80 ">
                                            Register User
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
