import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const EditRecord = ({ record, updateRecord, cancelEdit }) => {
  const [editedRecord, setEditedRecord] = useState({ ...record });

  const handleInputChange = (field, value) => {
    setEditedRecord({ ...editedRecord, [field]: value });
  };

  const handleUpdate = () => {
    updateRecord(editedRecord);
    alert("Record updated successfully!");
  };

  return (
    <div>
      <div className=" m-3">
        <TextField className="" label="Name" value={editedRecord.name} onChange={(e) => handleInputChange('name', e.target.value)} />
        <Select className=" ml-2" label="Platform" value={editedRecord.platform} onChange={(e) => handleInputChange('platform', e.target.value)}>
          <MenuItem value="Prime">Prime</MenuItem>
          <MenuItem value="Netflix">Netflix</MenuItem>
          <MenuItem value="Youtube">Youtube</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <Select className=" ml-2 mr-2" label="Genre" value={editedRecord.genre} onChange={(e) => handleInputChange('genre', e.target.value)}>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Horror">Horror</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <TextField className="" label="Link" value={editedRecord.link} onChange={(e) => handleInputChange('link', e.target.value)} />
        <Button  onClick={handleUpdate}>Update</Button>
        <Button  onClick={cancelEdit}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditRecord;
