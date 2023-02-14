import { useState } from 'react';
import './Search.css';
import Jsondata from '../../MOCK_DATA.json';
import { Link } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Link to='/' className='link'>Go to homepage</Link>
      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm tại đây ..."
        onChange={handleChange}
      />
      {// eslint-disable-next-line
        Jsondata.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
