import React from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';





const customStyles = {
  content: {
    top: '50%',
    left: '62%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxHeight: '80%',
    overflow: 'auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0px;
  font-size: 18px;
  text-align: left;
`;

const Th = styled.th`
 background:linear-gradient(to bottom, #FBC390, #D279EE);
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

const ModalComponent = ({ isOpen, onRequestClose, data, title }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} ariaHideApp={false}>
    <h2>{title}</h2>
    <Table>
      <thead>
        <tr>
          <Th>S.No</Th>
          <Th>Employee Code</Th>
          <Th>Employee Name</Th>
          <Th>Designation</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => (
          <tr key={employee.code}>
            <Td>{index + 1}</Td>
            <Td>{employee.code}</Td>
            <Td>{employee.name}</Td>
            <Td>{employee.designation}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
    <button className="btn btn-primary" onClick={onRequestClose}>Close</button>
  </Modal>
);

export default ModalComponent;
