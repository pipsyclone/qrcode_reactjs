import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import QRCodeGenerator from './pages/qrcode_generator';
import QRCodeScanner from './pages/qrcode_scanner';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route  path='/qrcode-generator' element={<QRCodeGenerator />} />
      <Route  path='/qrcode-scanner' element={<QRCodeScanner />} />
    </Routes>
  );
}

export default App;
