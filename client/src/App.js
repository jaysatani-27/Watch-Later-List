import React, { useState, useEffect } from 'react';
import AddRecord from './components/AddRecord';
import RecordList from './components/RecordList';
import axios from 'axios';
import './App.css';


const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/records');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const addRecord = async (newRecord) => {
    try {
      await axios.post('http://localhost:3001/api/records', newRecord);
      getRecords(); // Refresh records after adding a new one
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const deleteRecord = async (recordId) => {
    try {
      await axios.delete(`http://localhost:3001/api/records/${recordId}`);
      getRecords(); // Refresh records after deletion
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const updateRecord = async (updatedRecord) => {
    try {
      await axios.put(`http://localhost:3001/api/records/${updatedRecord._id}`, updatedRecord);
      getRecords();  // Refresh records after updating
      // setEditingRecordId(null);
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container mx-auto p-5">
      
      <AddRecord addRecord={addRecord} />
      <h1 className="text-3xl font-bold mt-6 mb-2">Watch Later List</h1>
      <hr/>

      <RecordList records={records} redirectToLink={redirectToLink} deleteRecord={deleteRecord} updateRecord={updateRecord} />
    </div>
  );
};

export default App;
