import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Checkbox = ({ isActive, onChange }) => {
  return (
    <Label>
      <Input
        type="checkbox"
        checked={isActive}
        onChange={onChange}
      />
      {isActive ? 'Active' : 'Inactive'}
    </Label>
  );
};

export default Checkbox;
