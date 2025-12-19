
import React from "react";

export const ChangePassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Password Changed Successfully!');
      };




    return (
        <div className="password">
            <div className='page-background' style={{marginTop:'10px',marginLeft:'150px'}}>
           
            <div className='card p-4 login-card' style={{ height: '500px', margin: 'auto', padding: '60px', maxWidth: '550px', backgroundColor:'#FFF3D0' }}>
            <div className='row d-flex justify-content-center m-4'>
            <h1 className='text-center' style={{ fontWeight: 'bold', marginTop: '3vh', margin: 'auto', padding: '10px' }}>Change Password</h1>
          <form onSubmit={handleSubmit} >
            <div className='form-floating mb-3'>
              <input type='text' className='form-control style-input' placeholder='username' required />
              <label className='text-left'>Username</label>
            </div>
            <div className='form-floating mb-3'>
              <input type='password' className='form-control style-input' placeholder='username' required />
              <label className='text-left'>Old Password</label>
            </div>
            <div className='form-floating mb-3'>
              <input type='password' className='form-control style-input' placeholder='New Password' required />
              <label className='text-left'>New Password</label>
            </div>
            <div className='form-floating mb-3'>
              <input 
                type='password' className='form-control style-input' placeholder='Confirm Password' required />
              <label className='text-left'>Confirm Password</label>
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-success mx-2'>Reset Password</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
           
        </div>
    );
};
