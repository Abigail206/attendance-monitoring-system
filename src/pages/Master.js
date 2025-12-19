// Filename - pages/Services.js


import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-router-dom';
import * as mdicons from "react-icons/md";

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const DataRow = styled.tr`
  border-bottom: 1px solid #ddd;
  font-size:15px;
`;

const DataCell = styled.td`
  padding: 12px 8px;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  text-align: center;
  background-color: #F5DFFB;
  font-size:15px;
 
`;

const Master = () => {
    return (
        <div className="master">
            <h1> Master</h1>
        </div>
    );
};

 const BranchMaster = () => {
    const [logs, setLogs] = useState([]);
    const [form, setForm] = useState({
    branchName: '',
    status: '',
    update: '',
    delete: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setLogs([...logs, { ...form }]);
      setForm({  branchName: '', status: '', update: '', delete: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration successful!');
      };




    return (
        <div className="master">
            <div>
                <div className='page-background ' style={{marginTop:'10px',marginLeft:'70px'}}>
                    <div className='card p-4 login-card' style={{ height: '300px', margin: 'auto', padding: '40px', maxWidth: '800px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Branch Registration</h1>
                            <form className='col-md-12' onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-6'>
                                        <label className='text-left' for=''>Company Name</label>
                                        <input type='text' className='form-control style-input' placeholder='Enter Company Name' required></input>
                                    </div>
                                    <div className='col-6'>
                                        <label className='text-left' for=''>Branch Name</label>
                                       
                                        <select className='form-select style-input mt-8' required>
                                            <option value=''>Select Branch</option>
                                            <option value=''>Porur</option>
                                            <option value=''>Sriperumbudhur</option>
                                            <option value=''>Ekattuthangal</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="col-md-12 ">
                                    <div className="d-flex row">
                                        <div className="col-md-6" >
                                            <label className='form-check-label mx-2 ' for=''>Status:</label>

                                            <div className='form-check form-check-inline mx-2  ' style={{ marginRight: '50px' }}>

                                                <input type='radio' className='form-check-input  ' name='status' value='active' id='active' ></input>
                                                <label className='form-check-label  ' For='active'>Active</label>
                                            </div>
                                            <div className='form-check form-check-inline' style={{ marginRight: '50px' }}>
                                                <input type='radio' className='form-check-input' name='status' value='inactive' id='inactive' ></input>
                                                <label className='form-check-label' For='inactive'>InActive</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                        <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-8 w-100 ">
                                            SUBMIT
                                        </button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Branch Name</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Status</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Update</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Delete</TableHeader>
            
          </tr>
        </thead>
        <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              
              <DataCell>{log.branchName}</DataCell>
              <DataCell>{log.status}</DataCell>
              <DataCell>{log.update}</DataCell>
              <DataCell>{log.delete}</DataCell>
            </DataRow>
          ))
        ):(
          <>
          <DataRow>
            <DataCell >1</DataCell>
            <DataCell >Porur</DataCell>
            <DataCell >Active</DataCell>
            <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
            <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
            </DataRow>
           <DataRow>
           <DataCell >2</DataCell>
           <DataCell >Sriperumbudhur</DataCell>
           <DataCell >InActive</DataCell>
           <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
           <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
           </DataRow>
           <DataRow>
           <DataCell >3</DataCell>
           <DataCell >Ekattuthangal</DataCell>
           <DataCell >Active</DataCell>
           <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
           <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
           </DataRow>
           </>
          )
        }
        </tbody>
      </DataTable>



                </div>

            </div>
        </div>

    );
};

 const DivisionMaster = () => {
    const [logs, setLogs] = useState([]);
    const [form, setForm] = useState({
    divisionName: '',
    status: '',
    update: '',
    delete: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setLogs([...logs, { ...form }]);
      setForm({  divisionName: '', status: '', update: '', delete: '' });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration successful!');
      };




    return (
        <div className="master">
           <div>
                <div className='page-background ' style={{marginTop:'10px',marginLeft:'70px'}}>
                    <div className='card p-4 login-card' style={{ height: '300px', margin: 'auto', padding: '40px', maxWidth: '800px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Division Registration</h1>
                            <form className='col-md-12' onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-6'>
                                        <label className='text-left' for=''>Branch Name</label>
                                        <select className='form-select style-input mt-8' required>
                                            <option value=''>Select Branch</option>
                                            <option value=''>Porur</option>
                                            <option value=''>Sriperumbudhur</option>
                                            <option value=''>Ekattuthangal</option>
                                        </select>
                                    </div>
                                    <div className='col-6'>
                                        <label className='text-left' for=''>Division Name</label>
                                        <input type='text' className='form-control style-input' placeholder="Enter Division Name" required></input>
                                    </div>
                                </div>


                                <div className="col-md-12 ">
                                    <div className="d-flex row">
                                        <div className="col-md-6" >
                                            <label className='form-check-label mx-2 ' for=''>Status:</label>

                                            <div className='form-check form-check-inline mx-2  ' style={{ marginRight: '50px' }}>

                                                <input type='radio' className='form-check-input  ' name='status' value='active' id='active' ></input>
                                                <label className='form-check-label  ' For='active'>Active</label>
                                            </div>
                                            <div className='form-check form-check-inline' style={{ marginRight: '50px' }}>
                                                <input type='radio' className='form-check-input' name='status' value='inactive' id='inactive' ></input>
                                                <label className='form-check-label' For='inactive'>InActive</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                        <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-8 w-100 ">
                                            SUBMIT
                                        </button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Division Name</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Status</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Update</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Delete</TableHeader>
            
          </tr>
        </thead>
        <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              
              <DataCell>{log.divisionName}</DataCell>
              <DataCell>{log.status}</DataCell>
              <DataCell>{log.update}</DataCell>
              <DataCell>{log.delete}</DataCell>
            </DataRow>
          ))
        ):(
          <>
          <DataRow>
            <DataCell >1</DataCell>
            <DataCell >Marketting</DataCell>
            <DataCell >Active</DataCell>
            <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
            <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
            </DataRow>
           <DataRow>
           <DataCell >2</DataCell>
           <DataCell >Production</DataCell>
           <DataCell >InActive</DataCell>
           <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
           <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
           </DataRow>
           <DataRow>
           <DataCell >3</DataCell>
           <DataCell >Sales</DataCell>
           <DataCell >Active</DataCell>
           <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
           <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
           </DataRow>
           </>
          )
          }
        </tbody>
      </DataTable>



                </div>

            </div>
        </div>
    );
};

 const DepartmentMaster = () => {
    const [logs, setLogs] = useState([]);
    const [form, setForm] = useState({
   department: '',
    status: '',
    update: '',
    delete: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setLogs([...logs, { ...form }]);
      setForm({  department: '', status: '', update: '', delete: '' });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registration successful!');
      };




    return (
        <div className="master">

<div>
                <div className='page-background ' style={{marginTop:'10px',marginLeft:'70px'}}>
                    <div className='card p-4 login-card' style={{ height: '300px', margin: 'auto', padding: '40px', maxWidth: '800px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Department Registration</h1>
                            <form className='col-md-12' onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-6'>
                                        <label className='text-left' for=''>Division Name</label>
                                        <select className='form-select style-input mt-8' required>
                                            <option value=''>Select Division</option>
                                            <option value=''>Marketting</option>
                                            <option value=''>Production</option>
                                            <option value=''>Sales</option>
                                        </select>
                                    </div>
                                    <div className='col-6'>
                                        <label className='text-left' for=''> Department Name</label>
                                        <input type='text' className='form-control style-input' placeholder='Enter Department Name' required></input>
                                    </div>
                                </div>


                                <div className="col-md-12 ">
                                    <div className="d-flex row">
                                        <div className="col-md-6" >
                                            <label className='form-check-label mx-2 ' for=''>Status:</label>

                                            <div className='form-check form-check-inline mx-2  ' style={{ marginRight: '50px' }}>

                                                <input type='radio' className='form-check-input  ' name='status' value='active' id='active' ></input>
                                                <label className='form-check-label  ' For='active'>Active</label>
                                            </div>
                                            <div className='form-check form-check-inline' style={{ marginRight: '50px' }}>
                                                <input type='radio' className='form-check-input' name='status' value='inactive' id='inactive' ></input>
                                                <label className='form-check-label' For='inactive'>InActive</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> 
                                        <button type="submit" className="btn btn-success btn-submit btn-custom-size mx-8 w-100 ">
                                            SUBMIT
                                        </button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Department</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Status</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Update</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Delete</TableHeader>
            
          </tr>
        </thead>
        <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              
              <DataCell>{log.branchName}</DataCell>
              <DataCell>{log.status}</DataCell>
              <DataCell>{log.update}</DataCell>
              <DataCell>{log.delete}</DataCell>
            </DataRow>
          ))
        ):(
          <>
            <DataRow>
              <DataCell >1</DataCell>
              <DataCell >Marketting</DataCell>
              <DataCell >Active</DataCell>
              <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
              <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
              </DataRow>
             <DataRow>
             <DataCell >2</DataCell>
             <DataCell >Production</DataCell>
             <DataCell >InActive</DataCell>
             <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
             <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
             </DataRow>
             <DataRow>
             <DataCell >3</DataCell>
             <DataCell >Sales</DataCell>
             <DataCell >Active</DataCell>
             <DataCell ><mdicons.MdOutlineSystemUpdateAlt/></DataCell>
             <DataCell ><mdicons.MdOutlineDeleteForever/></DataCell>
             </DataRow>
             </>
               
               
          )
        }
        </tbody>
      </DataTable>




                </div>

            </div>
        </div>
    );
};



// const Master = () => {
//     return <div>Master Component</div>;
//   };
  
  export {
   Master,
    BranchMaster,
   DivisionMaster,
    DepartmentMaster,
  };