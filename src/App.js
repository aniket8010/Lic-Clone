import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import GroupSchemes from './pages/GroupSchemes';
import { CustomerServices } from './pages/CoustemerServices';
import InvestorRelation from './pages/InvestorRelation';
import { NRI } from './pages/NRI';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/groupschemes' element={<GroupSchemes />} />
          <Route path='/customerservices' element={<CustomerServices />} />
          <Route path='/investorrelation' element={<InvestorRelation />} />
          <Route path='/nri' element={<NRI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
