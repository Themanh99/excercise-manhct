import { Routes, Route } from 'react-router-dom';
import Search from './components/searchFilter/Search';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/counter' element={<Counter />} />
    </Routes>
  );
}

export default App;
