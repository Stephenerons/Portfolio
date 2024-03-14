"use client"
import React, { useState } from 'react'
import style from './app.module.css'



export default function Calculator() {
    const [ current , setCurrent] = useState(' ')

    const [activeClicked, setActiveClicked] = useState('default')

    const active = (e) => {
        setActiveClicked(e)
    }

    const numbers = (e) => {
    setCurrent((prev) => prev + e)
}

 const deleteAll = () =>{
    setCurrent('')

}

 const deleteSingle = () =>{
    setCurrent((prev) => prev.slice(0, -1))

 }

 const equate = () =>{
    try{
        const result = eval(current);
        setCurrent(result.toString());
    }

    catch (error) {
        setCurrent('Error');
      }
 }

 const percentage = () => {
    setCurrent((prev) => {
      try {
        const result = eval(prev + '/100');
        return result.toString();
      }
       catch (error) {
        return 'Error';
      }
    });
  };

const squareRoot = () => {
    setCurrent((prev) => {
        try {
            const result = Math.sqrt(eval(prev));
            return result.toString();
        } catch (error) {
            return 'Error';
        }
    });
};

const cubeRoot = () => {
    setCurrent((prev) => {
        try{
            const result = Math.cbrt(eval(prev))
            return result.toString()

        }
        catch (error) {
            return 'Error'

        }

    })

}

const pi = () => {
    setCurrent(eval(22/7))
}

const square = () => {
    setCurrent((prev) => {
        try {
            const result = eval(prev * prev);
            return result.toString();
        } catch (error) {
            return 'Error';
        }
    });
};

const oneThird = () => {
    setCurrent((prev) => {
        try{
            const result =  eval(1/prev)
            return result.toString()
        }

        catch (error) {
            return 'Error'

        }
    })
}


  return (

    <div className='flex'> 
            {/* container div starts */}


<section className='w-full flex justify-center items-center my-4'>

    <div >
 {/* most outer container starts  */}
    <div className='w-[21rem] h-[33.25rem] bg-[#2E2727] rounded-lg  shadow-outerInner flex items-center justify-center'>

        {/* screen container starts */}
        <div className='w-[19rem] h-[31.25rem]'>
            <div className=' h-[5.125rem] w-[19rem] bg-[#2E2727] shadow-screen rounded-t-lg flex justify-end items-center'>
                <input type="text" name="screen" readOnly value={current} className= 'border-none text-end w-[18rem] h-12 text-2xl text-white bg-inherit outline-none' id="" />
                
            </div>
        {/* screen container ends  */}

        {/* Buttons Container starts */}
            <div className='h-[26.125rem] w-[19rem] bg-[#2E2727] flex justify-center items-center py-4 px-4 gap-5 flex-wrap '>

                    <input type="button" className ={`${style.blue} text-xl font-normal text-[#D94242] `}  onClick={squareRoot} value="&#8730;" />
                    <input type="button" className ={`${style.blue}  text-xl `}  onClick={cubeRoot} value="&#8731;" />
                    <input type="button" className ={`${activeClicked === 'CE' ?`${style.red} text-xl font-normal` : `${style.red} text-xl font-normal` }`} onClick={() => {deleteAll(''); active('CE');}} value="CE" />
                    <input type="button" className ={`${style.blue} text-xl font-normal `}  onClick={() =>{ deleteSingle(''); active();}} value="C" />

          
                    <input type="button" className ={`${style.btn} text-xl font-normal`} onClick={oneThird} value="&#185;/x" />
                    <input type="button" className ={`${style.btn} text-xl font-normal`} onClick={square} value="x&#178;"  />
                    <input type="button" className ={`${style.btn} text-xl font-normal`} onClick={pi} value="&Pi;"  />
                    <input type="button" className ={`${activeClicked === '/' ? `${style.btn} border border-[#5F8F99]` : `${style.btn} text-xl font-normal` }`} onClick={() => {numbers('/'); active('/');}}  value="&divide;" />



                    <input type="button" className ={`${activeClicked === 7 ?`${style.btn} border border-[#5F8F99]` : style.btn }`}   onClick={() => {numbers(7); active(7);}} value="7" />
                    <input type="button" className ={`${activeClicked === 8 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(8); active(8);}}   value="&#56;" />
                    <input type="button" className ={`${activeClicked === 9 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(9); active(9);}}  value="&#57;" />
                    <input type="button" className = {`${activeClicked === '*' ? `${style.btn} border border-[#5F8F99]` : `${style.btn} text-xl font-normal` }`} onClick={() => {numbers('*');  active('*')}}  value="&#215;" />


                    <input type="button" className ={`${activeClicked === 4 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(4); active(4);}}  value="&#52;" />
                    <input type="button" className ={`${activeClicked === 5 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(5); active(5);}}  value="&#53;" />
                    <input type="button" className ={`${activeClicked === 6 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(6); active(6);}}  value="&#54;" />
                    <input type="button" className ={`${activeClicked === '-' ? `${style.btn} border border-[#5F8F99]` : `${style.btn} text-xl font-normal` }`} onClick={() =>{ numbers('-'); active('-')}}  value="-" />


                    <input type="button" className ={`${activeClicked === 1 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(1); active(1);}}  value="&#49;" />
                    <input type="button" className ={`${activeClicked === 2 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(2); active(2);}}  value="&#50;" />
                    <input type="button" className ={`${activeClicked === 3 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(3); active(3);}}  value="&#51;" />
                    <input type="button" className ={`${activeClicked === '+' ? `${style.btn} border border-[#5F8F99]` : `${style.btn} text-xl font-normal` }`} onClick={() =>{ numbers('+'); active('+');}}  value="+" />


                    <input type="button" className ={`${style.btn} text-xl font-normal`} onClick={() => percentage('%')} value="&#37;" />
                    <input type="button" className ={`${activeClicked === 0 ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers(0); active(0);}}  value="0" />
                    <input type="button" className ={`${activeClicked === '.' ?`${style.btn} border border-[#5F8F99]` : style.btn }`} onClick={() => {numbers('.'); active('.');}}  value="." />
                    <input type="button" className ={`${style.green} text-xl font-normal text-[#38DF0E]`} onClick={equate} value="=" />


            </div>
        {/* Button container ends */}
        </div>
    </div>

    </div>


</section>


</div>
  )
}
