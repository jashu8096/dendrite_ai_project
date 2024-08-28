import './App.css'
import { FaPen } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { MdTextFields } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoShapes } from "react-icons/io5";
import { BsColumns } from "react-icons/bs";



function App(){

  return (
    <>

    <div className="main-bg">
      <h1 className="main-heading">
      Whiteboard
      </h1>




      <div  className="whiteboard-box">
      

      </div>

      <div className="icon-box">

        {/* pen */}
        <div>
        <FaPen className='icon' />


        </div>
     
      {/* hand */}
      <div>
      <FaHand className='icon'/>


      </div>

     
      {/* text */}

      <div>
      <MdTextFields className='icon'/>

      </div>
      

      {/* arrow */}

      <div>
      <FaLocationArrow className='icon'/>


      </div>

      
      {/* shapes */}
      <div>
      <IoShapes className='icon'/>


      </div>

      
      {/* boxes */}

      <div>
      <BsColumns className='icon'/>

      </div>


      






      </div>


    </div>
    
    
    </>
  )

  
}

export default App