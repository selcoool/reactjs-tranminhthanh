import React, { Component } from 'react'
import {glasses} from './api/dataglasses.js'
console.log('glasses',glasses)
export default class App extends Component {
  state = {
    selectedGlass: null
  };



  handleSelectGlass = (glass) => {
  this.setState({
    selectedGlass: glass
  });
};

  renderTest=()=>{

    const { selectedGlass } = this.state;

    if (selectedGlass) {
    return (
     <>
      <img src={selectedGlass.url} className='w-[70%] absolute mt-[70px] opacity-75 '  alt={`${selectedGlass.name}`}/>

       <div className='absolute w-full h-fit bottom-0 right-0 bg-orange p-1 bg-opacity-45 '>
        <h6 className='text-cyan-600 font-bold'>{selectedGlass.name}</h6>
        <p className='text-[10px] text-white'>{selectedGlass.desc}</p>
        <p  className='text-[10px] text-rose-600 font-bold'>{selectedGlass.price}</p>
       </div>
       </>
   
    )} else {
      return null;
    }
  }
  
  renderGlasses=()=>{
    return glasses.map((glass)=>{
      return (
        <div key={glass.id} onClick={() => this.handleSelectGlass(glass)} className='cursor-pointer'>
        <img src={`${glass.url}`} className='w-full  object-cover' alt={`${glass.name}`}/>
        </div>
      )
    })
  }


  render() {
    return (
         <div className='w-screen h-screen bg-background-store bg-center  '>
    <div className='text-center text-white py-4 bg-gray bg-opacity-35'>
      TRY GLASSES APP ONLINE
    </div>
     <div className='flex flex-col'>
      <div className=' flex flex-row justify-center  items-center gap-20 my-8'>
      <div className='h-60 w-60 bg-background-model bg-cover border-2 relative flex justify-center cursor-pointer '>
      {this.renderTest()}
      </div>
        <div className='h-60 w-60 bg-background-model bg-cover border-2' >

        </div>
      </div>

      <div className='bg-neutral-400 mx-44 bg-opacity-35 '>
          <div className='grid grid-cols-6 p-10 gap-x-8 gap-y-8 '>
          
         {this.renderGlasses()}
          </div>
      </div>

     </div>



    </div>
    )
  }
}

