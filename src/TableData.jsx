import React, { useState } from 'react';

export default function TableData() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [table, setTable] = useState([]);

  // onsubmit function
  function onSubmit(e) {
    e.preventDefault();
    tableCreate(parseInt(start), parseInt(end), (result) => {
      setTable(result);
    });
  }

  // Renderlist of table print data
  function renderList() {
    return table.map((item, index) => <li key={item}>{item}</li>);
  }

  // start handle change
  function handleStartChange(e) {
    setStart(e.target.value);
  }

  // Handle end change
  // function handleEndChange(e) {
  //   setEnd(e.target.value);
  // }
  const handleEndChange = (e) => {
    setEnd(e.target.value);
  };

  // create table using recursive function
  function tableCreate(start, end, resultCallback) {
    var list = [];

    // create a new function ton recall it self
    function createTableRecursive(current) {
      if (current <= end) {
        list.push(current);
        createTableRecursive(current + 1);
      } else {
        // Callback function
        resultCallback(list);
      }
    }

    createTableRecursive(start);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          id="start"
          name="start"
          value={start}
          onChange={handleStartChange}
        />
        <input
          type="text"
          className="form-control"
          id="end"
          name="end"
          value={end}
          onChange={handleEndChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>{renderList()}</ul>
      </div>
    </>
  );
}
