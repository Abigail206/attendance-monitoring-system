import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export const Logout = ({ showModal, setShowModal, logoutHandler }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    logoutHandler(); // Call the logoutHandler function passed from Sidebar.js
    setShowModal(false); // Close the modal after logout
    navigate('/Dashboard'); // Navigate to the dashboard route after logout
  };

  const handleNoClick = () => {
    alert("Your account is not logged out."); // Show an alert for not logging out
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Body style={{ fontFamily:'initial', fontWeight: 'bolder', fontSize: '25px' }}>
          Confirm Logout
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-success' onClick={handleLogout}>
            Yes
          </Button>
          <Button className='btn btn-danger' onClick={handleNoClick}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Logout;