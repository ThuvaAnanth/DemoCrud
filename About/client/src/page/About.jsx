import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import backgroundImage from '../assets/heroIMG.jpg'
import blackTea from '../assets/blackTea.jpg'
import greenTea from '../assets/greenTea.jpg'
import oolongTea from '../assets/oolongTea.jpg'
import yellowTea from '../assets/yellowTea.jpg'
import categoriesBgUrl from '../assets/categoriesBgUrl.jpg'
import Overview from '../assets/Overview.jpg'
import expert from '../assets/expert.jpg'
import review from '../assets/review.jpg'
import partnership from '../assets/partnership.jpg'
import aboutus from '../assets/ABOUT_US.jpeg'
export default function About() {
  return (
    <div>
        <Navbar/>
        <div className="w-[1519px] h-[700px] bg-cover" style={{ backgroundImage:`url(${aboutus})`}}>
            <p className='text-white font-bold text-center ml-10 text-8xl pt-60'>About Us</p>
          
        </div>
        {/* this dic for counter up */} 
        <div className = "Contain">
            <div className="left-side" style={{ margin : '20px'}}>
                <img  className='w-[700px] h-[300px] 'src={Overview} alt= "Company Overview"/>
            </div>
           
            <div classNmae ="right-side" style={{ margin : '120px'}}>  
                 <h1 className ='text-center font-bold text-black'>Company Overview</h1>
                 <h5>FreshLeaf specializes in selling and managing a diverse range of premium tea varieties, focusing on Oolong, black, green, and yellow teas. They cater to tea enthusiasts who value quality, flavor,and ethical sourcing.
                 FreshLeaf's focus on quality, variety, and ethical sourcing positions them well to attract discerning tea lovers. Further insights into their specific offerings, management practices, and marketing strategies would allow for a more detailed evaluation.</h5> 
            </div>

            
           
        </div>

        <div className = "Contain">

        <div classNmae ="right-side" style={{ margin : '20px'}}>  
                 <h2 className ='text-center font-bold text-black'>Expertise in Tea</h2>
                 <h5>FreshLeaf appears to have the potential to offer a captivating and informative experience for tea enthusiasts, but could benefit from further details and specific examples to showcase its expertise.By implementing these suggestions, it can strengthen its online presence and establish itself as a trusted source for tea enthusiasts.</h5> 
            </div>

            <div className="left-side" style={{ margin : '20px'}}>
                <img  className='w-[500px] h-[300px] 'src={expert} alt= "Expertise in tea"/>
            </div>
        
        </div>
         

        <div className = "Contain">
            <div className="left-side" style={{ margin : '20px'}}>
                <img  className='w-[300px] h-[300px] 'src={review} alt= "Company Overview"/>
            </div>
           
            <div classNmae ="right-side" style={{ margin : '120px'}}>  
                 <h2 className ='text-center font-bold text-black'>Customer Staisfaction</h2>
                 <h5>customer recently had the pleasure of browsing the FreshLeaf website and learning about their diverse selection of tea leaves, including Oolong, Black, Green, and Yellow varieties.</h5> 
            </div>
           
        </div>

        <div className = "Contain">

        <div classNmae ="right-side" style={{ margin : '20px'}}>  
                 <h2 className ='text-center font-bold text-black'>Partnerships</h2>
                 <h5>FreshLeaf appears to have the potential to offer a captivating and informative experience for tea enthusiasts, but could benefit from further details and specific examples to showcase its expertise.By implementing these suggestions, it can strengthen its online presence and establish itself as a trusted source for tea enthusiasts</h5> 
            </div>

            <div className="left-side" style={{ margin : '20px'}}>
                <img  className='w-[500px] h-[300px] 'src={partnership} alt= "Expertise in tea"/>
            </div>
        
        </div>
        {/* categories of tea postion */}
        <div className="w-[1519px] h-[500px] bg-cover" style={{ backgroundImage:`url(${categoriesBgUrl})`}}>
            <h1 className='text-center text-white text-5xl mb-8'>Categories of tea</h1>
            
            <div className=' flex gap-36 px-5'>
            <div> 
                <img className='w-44 h-44 rounded-full bg-cover ' src={blackTea} alt="black tea" /> 
                 <h3 className='text-white text-2xl text-center mt-5'>Black Tea</h3>
                 <p className='text-center text-white'>Black tea flavors.</p>
             </div>
            <div> 
                <img className='w-44 h-44 rounded-full bg-auto' src={greenTea} alt="black tea" /> 
                 <h3 className='text-white text-2xl text-center mt-5'>Green Tea</h3>
                 <p className='text-center text-white'> Green tea offers a crisp</p>
            </div>
            <div> 
                <img className='w-44 h-44 rounded-full bg-auto' src={oolongTea} alt="black tea" /> 
                 <h3 className='text-white text-2xl text-center mt-5'>Oolong Tea Tea</h3>
                 <p className='text-center text-white'>Distinctive oolong tea flavors</p>
            </div>
            <div> 
                <img className='w-44 h-44 rounded-full bg-cover' src={yellowTea} alt="black tea" /> 
                 <h3 className='text-white text-2xl text-center mt-5'>Yellow Tea</h3>
                 <p className='text-center text-white'>Yellow tea offers a mellow </p>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
