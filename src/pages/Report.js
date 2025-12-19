// Filename - pages/Events.js

import React, { useState } from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-router-dom';



export const Report = () => {
    return (
        <div className="report">
            <h1> Reports</h1>
        </div>
    );
};


    
  
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
  background-color:#F5DFFB;
  font-size:15px;
`;



const LogReport = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
   
    logType: '',
    employeeName: '',
    employeeCode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Please check the employee code.');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLogs([...logs, { ...form }]);
    setForm({ startDate: '', endDate: '', logType: '', employeeName: '', employeeCode: '' });
};






    return (
        <div className="report">
             <div>
                <div className='page-background ' style={{marginTop:'5px',marginLeft:'5px'}}>
                    <div className='card p-4 login-card' style={{ height: '250px', margin: 'auto', padding: '40px', maxWidth: '1000px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center  mb-2' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Log Report</h1>
                            <form className='col-md-12' onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>From Date <span className="required">*</span></label>
                                        <input type='date' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>To Date <span className="required">*</span></label>
                                        <input type='date' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>Select Type<span className="required">*</span></label>
                                        <select className='form-select style-input mt-8' required>
                                            <option value=''>Select Type</option>
                                            <option value='1'>All</option>
                                            <option value='2'>Individual </option>
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                    <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-8 w-100 " style={{marginTop:'30px'}}>
                                            Search
                                        </button> 
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Log Date</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Code</TableHeader>
          </tr>
        </thead>
        <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
           
              <DataCell>{log.logType}</DataCell>
              <DataCell>{log.employeeName}</DataCell>
              <DataCell>{log.employeeCode}</DataCell>
            </DataRow>
          ))
        ):(
          <>
          <DataRow>
            <DataCell >1</DataCell>
            <DataCell >2024-06-02</DataCell>
            <DataCell >Arjun</DataCell>
            <DataCell >E001</DataCell>
            </DataRow>
           <DataRow>
           <DataCell >2</DataCell>
           <DataCell >2024-04-03</DataCell>
           <DataCell >Afina</DataCell>
           <DataCell >E003</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >3</DataCell>
           <DataCell >2024-03-05</DataCell>
           <DataCell >Joshua</DataCell>
           <DataCell >E002</DataCell>
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

const AttendanceReport = () => {
    const[logs,setLogs]=useState([]);
    const [attendance, setAttendance] = useState([]);
    const [form, setForm] = useState({
      inTime: '',
      ouTime: '',
      status: '',
      employeeName: '',
      employeeCode: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Please check the employee code.');
      };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setLogs([...logs,{...Form}]);
      setAttendance([...attendance, { ...form }]);
      setForm({ startDate: '', endDate: '', logType: '', employeeName: '', employeeCode: '' });
    };
  
  


    return (
        <div className="report">
            <div>
                <div className='page-background ' style={{marginTop:'5px',marginLeft:'2px'}}>
                    <div className='card p-4 login-card' style={{ height: '250px', margin: 'auto', padding: '40px', maxWidth: '950px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center mb-2 ' style={{ fontWeight: 'bold', marginTop: '2vh', margin: 'auto', padding: '10px' }}>Attendance Report</h1>
                            <form className='col-md-12'  onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>From Date <span className="required">*</span></label>
                                        <input type='date' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>To Date <span className="required">*</span></label>
                                        <input type='date' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                    <div className='col-3'>
                                        <label className='text-left' for=''>Select Type<span className="required">*</span></label>
                                        <select className='form-select style-input mt-8' required>
                                            <option value=''>Select one mode</option>
                                            <option value='1'>All</option>
                                            <option value='2'>Present </option>
                                            <option value='2'>Absent</option>
                                            <option value='2'>Individual </option>
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                    <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-8 w-100 " style={{marginTop:'30px'}}>
                                            Search
                                        </button> 
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    
      <DataTable className="table">
        <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Code</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>InTime</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>OutTime</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              <DataCell>{log.employeeName}</DataCell>
              <DataCell>{log.employeeCode}</DataCell>
              <DataCell>{log.inTime}</DataCell>
              <DataCell>{log.ouTime}</DataCell>
              <DataCell>{log.status}</DataCell>
            </DataRow>
          )
          )
        ):(
          <>
          <DataRow>
            <DataCell >1</DataCell>
            <DataCell >E001</DataCell>
            <DataCell >Arjun</DataCell>
            <DataCell >8:30</DataCell>
            <DataCell >5:30</DataCell>
            <DataCell >Active</DataCell>
            </DataRow>
           <DataRow>
           <DataCell >2</DataCell>
           <DataCell >E003</DataCell>
           <DataCell >Afina</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >InActive</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >3</DataCell>
           <DataCell >E002</DataCell>
           <DataCell >Joshua</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >4</DataCell>
           <DataCell >E004</DataCell>
           <DataCell >Varun</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >5</DataCell>
           <DataCell >E005</DataCell>
           <DataCell >Adhi</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >6</DataCell>
           <DataCell >E006</DataCell>
           <DataCell >Adhira</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >7</DataCell>
           <DataCell >E007</DataCell>
           <DataCell >Agaran</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >8</DataCell>
           <DataCell >E008</DataCell>
           <DataCell >Thanigai</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >9</DataCell>
           <DataCell >E009</DataCell>
           <DataCell >Agayaazh</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >10</DataCell>
           <DataCell >E010</DataCell>
           <DataCell >Yaazhan</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >11</DataCell>
           <DataCell >E011</DataCell>
           <DataCell >Pragya</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >12</DataCell>
           <DataCell >E012</DataCell>
           <DataCell >Catherine</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >13</DataCell>
           <DataCell >E013</DataCell>
           <DataCell >Naveen</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >14</DataCell>
           <DataCell >E014</DataCell>
           <DataCell >Teju</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >15</DataCell>
           <DataCell >E015</DataCell>
           <DataCell >Anita</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >16</DataCell>
           <DataCell >E016</DataCell>
           <DataCell >Mozhiyazhi</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >17</DataCell>
           <DataCell >E017</DataCell>
           <DataCell >Charu</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >18</DataCell>
           <DataCell >E018</DataCell>
           <DataCell >Divya</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >19</DataCell>
           <DataCell >E019</DataCell>
           <DataCell >Arun</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >20</DataCell>
           <DataCell >E020</DataCell>
           <DataCell >Vishwa</DataCell>
           <DataCell >8:30</DataCell>
           <DataCell >5:30</DataCell>
           <DataCell >Active</DataCell>
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
const MonthlyReport = () => {
    const[logs,setLogs]=useState([]);
    const [monthly, setMonthly] = useState([]);
    const [form, setForm] = useState({
      startDate: '',
      endDate: '',
      logType: '',
      employeeName: '',
      employeeCode: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Please check the employee code.');
      };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setMonthly([...monthly, { ...form }]);
      setForm({ startDate: '', endDate: '', logType: '', employeeName: '', employeeCode: '' });
    };
  



    return (
        <div className="report">
            <div>
                <div className='page-background ' style={{marginTop:'5px',marginLeft:'5px'}}>
                    <div className='card p-4 login-card' style={{ height: '250px', margin: 'auto', padding: '40px', maxWidth: '1000px', backgroundColor:'#FFF3D0' }}>
                        <div className='row d-flex justify-content-center m-4'>
                            <h1 className='text-center  mb-2' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Monthly Report</h1>
                            <form className='col-md-12'  onSubmit={handleSubmit}>

                                <div className='d-flex row'>
                                    <div className='col-4'>
                                        <label className='text-left' for=''>Select Month <span className="required">*</span></label>
                                        <input type='month' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                    <div className='col-4'>
                                        <label className='text-left' for=''>Employee Code <span className="required">*</span></label>
                                        <input type='text' className='form-control style-input' placeholder='' required></input>
                                    </div>
                                   
                                    <div className='col-4'>
                                    <button type="submit" className="btn btn-info btn-submit btn-custom-size mx-8 w-100 " style={{marginTop:'30px'}}>
                                            Search
                                        </button> 
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <DataTable>
                    <thead>
          <tr>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>S.No</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Code</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Employee Name</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Month</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>No.of working days</TableHeader>
            <TableHeader style={{backgroundColor:'#F5DFFB'}}>Status</TableHeader>
          </tr>
        </thead>
                    <tbody>
        {logs.length > 0 ?(
            logs.map((log,index) => (
            <DataRow key={index}>
              <DataCell>{index + 1}</DataCell>
              {/* <DataCell>{log.employeeName}</DataCell>
              <DataCell>{log.employeeCode}</DataCell>
              <DataCell>{log.inTime}</DataCell>
              <DataCell>{log.ouTime}</DataCell>
              <DataCell>{log.status}</DataCell> */}
            </DataRow>
          )
          )
        ):(
          <>
          <DataRow>
            <DataCell >1</DataCell>
            <DataCell >E001</DataCell>
            <DataCell >Arjun</DataCell>
            <DataCell >June</DataCell>
            <DataCell >30</DataCell>
            <DataCell >Active</DataCell>
            </DataRow>
           <DataRow>
           <DataCell >2</DataCell>
           <DataCell >E003</DataCell>
           <DataCell >Afina</DataCell>
           <DataCell >June</DataCell>
           <DataCell >29</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >3</DataCell>
           <DataCell >E002</DataCell>
           <DataCell >Joshua</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >4</DataCell>
           <DataCell >E004</DataCell>
           <DataCell >Varun</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >5</DataCell>
           <DataCell >E005</DataCell>
           <DataCell >Adhi</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >6</DataCell>
           <DataCell >E006</DataCell>
           <DataCell >Adhira</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >7</DataCell>
           <DataCell >E007</DataCell>
           <DataCell >Agaran</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >8</DataCell>
           <DataCell >E008</DataCell>
           <DataCell >Thanigai</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >9</DataCell>
           <DataCell >E009</DataCell>
           <DataCell >Agayaazh</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >10</DataCell>
           <DataCell >E010</DataCell>
           <DataCell >Yaazhan</DataCell>
           <DataCell >June</DataCell>
           <DataCell >29</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >11</DataCell>
           <DataCell >E011</DataCell>
           <DataCell >Pragya</DataCell>
           <DataCell >June</DataCell>
           <DataCell >29</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >12</DataCell>
           <DataCell >E012</DataCell>
           <DataCell >Catherine</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >13</DataCell>
           <DataCell >E013</DataCell>
           <DataCell >Naveen</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >14</DataCell>
           <DataCell >E014</DataCell>
           <DataCell >Teju</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >15</DataCell>
           <DataCell >E015</DataCell>
           <DataCell >Anita</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >16</DataCell>
           <DataCell >E016</DataCell>
           <DataCell >Mozhiyazhi</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >17</DataCell>
           <DataCell >E017</DataCell>
           <DataCell >Charu</DataCell>
           <DataCell >June</DataCell>
           <DataCell >29</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >18</DataCell>
           <DataCell >E018</DataCell>
           <DataCell >Divya</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >19</DataCell>
           <DataCell >E019</DataCell>
           <DataCell >Arun</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
           </DataRow>
           <DataRow>
           <DataCell >20</DataCell>
           <DataCell >E020</DataCell>
           <DataCell >Vishwa</DataCell>
           <DataCell >June</DataCell>
           <DataCell >30</DataCell>
           <DataCell >Active</DataCell>
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
const Reports = () => {
    return <div>Reports Component</div>;
  };
  
  export {
    Reports,
    LogReport,
    AttendanceReport,
    MonthlyReport,
  };
