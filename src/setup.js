import React ,{ useState} from 'react'
import {useHistory} from 'react-router-dom'

function setup() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value , setValue] = useState(0)
    
    function one (){
        setValue(value +1)
    }
     function two (){
        setValue(value +2)
    }
     function three (){
        setValue(value +3)
    }
     function four (){
        setValue(value +4)
    }
     function five (){
        setValue(value +5)
    }



  return (
    <>
     <section className='container'>
           <div className='logo'> <img src='./images/icon-star.svg' alt=''/></div>
           <div className='innerContainer'>
                <h2> How did we do?</h2>
                <p> Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                <button className='btn'onClick={one}>1</button>
                <button className='btn'onClick={two}>2</button>
                <button className='btn'onClick={three}>3</button>
                <button className='btn'onClick={four}>4</button>
                <button className='btn'onClick={five}>5</button>
                <button className='submit' 
                onClick={()=>{history.push('/page2')}} >submit </button>
               
           </div>
     </section>
    </>
  )
}

export default setup