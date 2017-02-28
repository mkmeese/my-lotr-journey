import React from 'react';
import Notes from './Notes.jsx';
import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default () => (
  <div>
    <button onClick={() => console.log('add note')}>+</button>
	<Notes notes={notes} />
  </div>
);
