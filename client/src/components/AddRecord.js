import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const AddRecord = ({ addRecord }) => {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    addRecord({ name, platform, genre, link });
    setName('');
    setPlatform('');
    setGenre('');
    setLink('');
  };

  return (
    <div className=" bg-stone-100 p-3  ">

      <TextField  label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <label className=" text-gray-700 text-sm font-bold ml-2" htmlFor="Platform"> Platform : </label>
      <Select label="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <MenuItem value="Prime">Prime</MenuItem>
        <MenuItem value="Netflix">Netflix</MenuItem>
        <MenuItem value="Youtube">Youtube</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>

      <label className=" text-gray-700 text-sm font-bold ml-2" htmlFor="Genre"> Genre : </label>
      <Select className=' mr-4' label="Genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
        <MenuItem value="Comedy">Comedy</MenuItem>
        <MenuItem value="Horror">Horror</MenuItem>
        <MenuItem value="Drama">Drama</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>

      <TextField label="Link" value={link} onChange={(e) => setLink(e.target.value)} />
      <Button className="bg-blue-500 text-white rounded hover:bg-blue-500" onClick={handleSubmit}>Add Record</Button>
    </div>
  );
};

export default AddRecord;
