import React from 'react';
import BillLogo from '../../components/Bill/BillLogo';

import Footer from '../../components/Footer/Footer';
import Slip from '../../components/Bill/Slip';

function UploadSlip() {
  return (
    <div className='Totalbill'>
      <div className='bg-[#FBE7C6]'>
      
        <BillLogo />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* Rest of the content with another color */}
      <div className='bg-[#879d62]'>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        
      <Slip/>
      <br></br>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            </div>

  <Footer />
    </div>

);
}

export default UploadSlip;
