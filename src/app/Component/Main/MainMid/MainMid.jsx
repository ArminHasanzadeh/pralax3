import React from 'react';
import SecTop from './component/SecTop';
import Mid from './component/Mid';


function MainMid() {
    return (
        <section className='w-full h-auto overflow-hidden z-40 flex-col gap-20 flex '>
          <SecTop />
          <Mid /> 
        </section>
    );
}

export default MainMid;