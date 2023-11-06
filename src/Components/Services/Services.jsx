import React from 'react';
import product1 from '../img/product-6.png'
import product2 from '../img/product-2.png'
import product3 from '../img/product-3.png'
import Service from '../ServiceChild/Service';


const Services = () => {
return (
 <div>
    <h1 className='text-[26px] font-semibold text-center text-black my-4 md:my-8'>My Service</h1>
    <div className="grid md:grid-cols-3  container mx-auto mr-4 ">
        <Service img={product1} name='Red Berry' price='489'/>
        <Service img={product2} name='Vegetable Edible Mushroom' price='399'/>
        <Service img={product3} name='Vegetable Broccoli' price='541'/>
    </div>
</div>


);
};

export default Services;
