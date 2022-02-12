import { Route, Routes } from 'react-router-dom';
import { Home, Toilet } from './pages';
import { Navbar } from './.component';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:room' element={<Toilet />} />
      </Routes>
    </div>
  );
};

export default App;
