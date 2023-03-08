import { Routes, Route } from 'react-router-dom';
import Search from './components/searchFilter/Search';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Song/pages';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/todofeature' element={<TodoFeature />} />
      <Route path='/songfeature' element={<AlbumFeature />} />
    </Routes>
  );
}

export default App;
