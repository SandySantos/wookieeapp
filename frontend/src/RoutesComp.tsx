import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const RoutesComp = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='*' element={<Home />}></Route>
    </Routes>
  );
};

export default RoutesComp;
