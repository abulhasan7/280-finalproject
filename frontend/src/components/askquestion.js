import closeModal from './modal';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Form = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <><h2 style={{textAlign:"center"}}> Add a Question</h2>

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>    

    <form >
          <div className="form-group">
              <label style={{ marginBottom: "10px",marginTop:"15px" }} htmlFor="name">Title</label>
              <input className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label style={{ marginBottom: "10px", marginTop: "15px" }} htmlFor="name">Ask Question</label>
              <textarea className="form-control" id="name" />
          </div>
          <div className="form-group">
              <button style={{ marginTop: "20px", width: "80px", float: "right" }} className="form-control btn btn-primary" type="submit">
                  Add
              </button>
              <button style={{ marginRight: "10px", marginTop: "20px", width: "80px", float: "right" }} className="form-control btn btn-primary close" onClick={closeModal}>
                  Cancel
              </button>
          </div>
      </form>
      </>
  );
};
export default Form;