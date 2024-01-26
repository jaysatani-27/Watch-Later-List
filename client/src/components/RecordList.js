import React, { useState } from 'react';
import { List, ListItem, Button } from '@mui/material';
import EditRecord from './EditRecord';

const RecordList = ({ records, redirectToLink, deleteRecord, updateRecord }) => {
  const [editingRecordId, setEditingRecordId] = useState(null);

  const startEdit = (recordId) => {
    setEditingRecordId(recordId);
  };

  const cancelEdit = () => {
    setEditingRecordId(null);
  };

  console.log(records);

  return (
    <List>
      {records.map((record) => (
        <ListItem key={record._id}>
          {editingRecordId === record._id ? (
            // Render edit form
            <EditRecord record={record} updateRecord={updateRecord} cancelEdit={cancelEdit} />
          ) : (
            <div>
              <h3 onClick={() => redirectToLink(record.link)} className=' font-bold text-xl cursor-pointer'>{record.name}</h3>
              <p>{record.platform} ({record.genre})</p>
              <p className=' cursor-pointer'>{record.link}</p>
            </div>
          )}
          <Button onClick={() => startEdit(record._id)}>Edit</Button>
          <Button onClick={() => deleteRecord(record._id) + alert("Are You want to Delete this Watchlist ?")}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default RecordList;
