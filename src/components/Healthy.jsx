import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import garden from '../components/image/garden.jpg'
import basket from '../components/image/basket.avif'
import delivery from '../components/image/delivery.png'

const Healthy = () => {
  return (
     
  <div className="container px-4 py-5" id="featured-3">
  <h1 className="pb-2 border-bottom" style={{fontFamily:'Playfair Display'}}>Delivery</h1>
  <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
    <div className="col">
      <div className=" bg-gradient">
        <img src={garden} className='w-50 h-50' alt="" />
      </div>
      <h2 style={{fontFamily:'Playfair Display'}}>Harvesting</h2>
      <p class="scrollable border p-3" style={{fontFamily:'Playfair Display'}}>Vegetable harvesting is a crucial stage in the agricultural process, marking the transition from cultivation to consumption. This practice involves carefully collecting mature vegetables at the right time to ensure optimal flavor, texture, and nutritional value. Timing is essential; harvesting too early can result in underdeveloped produce, while waiting too long may lead to overripening or spoilage. Different vegetables require specific harvesting techniques, from gently pulling root vegetables like carrots and beets to cutting leafy greens and fruiting crops such as tomatoes and peppers.</p>
    </div>
    <div className="col">
      <div className=" bg-gradient">
      <img src={basket} className='w-50 h-20' alt="" />
      </div>
      <h2 style={{fontFamily:'Playfair Display'}}>Packing</h2>
      <p class="scrollable border p-3" style={{fontFamily:'Playfair Display'}}>Vegetable packing is an essential process in the supply chain, ensuring that fresh produce reaches consumers in optimal condition. This stage involves carefully sorting, cleaning, and packaging vegetables to preserve their quality and extend shelf life. Proper packing techniques help protect vegetables from damage during transportation and storage, reducing spoilage and waste. Different types of packing materials are used, including cartons, crates, and breathable plastic bags, each chosen for its ability to maintain freshness and prevent bruising.</p>
    </div>
    <div className="col">
      <div className=" bg-gradient">
      <img src={delivery} className='w-50 h-50' alt="" />
      </div>
      <h2 style={{fontFamily:'Playfair Display'}}>Delivery</h2>
      <p class="scrollable border p-3" style={{fontFamily:'Playfair Display'}}>Vegetable delivery is an essential service that connects fresh produce from farms to consumers’ doorsteps, ensuring convenient access to healthy food. This service has gained popularity in recent years, especially as more people prioritize fresh, locally sourced ingredients in their diets. Delivery systems can vary, from large-scale grocery delivery services to smaller community-supported agriculture (CSA) programs that provide seasonal vegetables directly from local farms. Efficient logistics are crucial, as vegetables are perishable items that require prompt handling and transportation to maintain freshness and quality.</p>
    </div>
  </div>
</div>
  )
}

export default Healthy