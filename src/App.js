import React, { useState } from "react";
import Data from './Data';
import './App.css';

function App(){
  const[data,setData]=useState(Data)
  return (
    <div className='App'>
      <section className="sec1">
      <main className="main1">
         <h2>Today Birthday {data.length}😍</h2>
          {data.map((x)=>{
            return(
              <div className='Cards' key={x.id}>
                <img src={x.image} alt="" height={'50px'} width={'50px'}/>
                <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>
              </div>
            );
          })
          }
          <button id="btn1" onClick={()=>setData([])}>Clear</button>
        </main>
        
      </section> 
    </div> 
  )
}
export default App