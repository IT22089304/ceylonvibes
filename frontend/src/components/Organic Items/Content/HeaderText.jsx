import React from 'react';
import FoodPic from '../../../images/food4.png'

const HeaderText = () => {
    return (
        <div >
            
            <div className="font-CantoraOne ml-[13.5%] mt-[150pt] text-7xl absolute text-green z-21">
                Embark on <br />the path <br />to wellness
                <div className="font-Abel text-2xl mt-[45px]">
                    Eat Clean, Live Green, and Feel Amazing
                </div>
                <div className='absolute w-[700px] right-[-205%] top-[-70px] '>
                    <img src={FoodPic} className='h-[430px]' alt="" />
                </div>
            </div>

        </div>
    );
}


export default HeaderText;
