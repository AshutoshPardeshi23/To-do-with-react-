import React, { useState } from 'react'
import { FaArrowDownAZ } from 'react-icons/fa6'
import { FcTodoList } from 'react-icons/fc'
import { IoClose } from 'react-icons/io5'

const App = () => {
    const [titel, settitel] = useState('');
    const [desc, setdesc] = useState('');
    const [data, setdata] = useState([]);
    let [maxH, setmaxH] = useState("max-h-7")

    const submitdata = (e) => {
      e.preventDefault();
      if(titel === "" || desc === "") return alert('Entar Your Task');
      setdata([...data, {titel, desc}])
      settitel('')
      setdesc('')
    }
    const deleteTask = (i) => {
      let copytask = [...data]
          copytask.splice(i,1)
          setdata(copytask)
    }

    let renderTask = <h2>No task Available</h2>
    const [choise, setchoise] = useState(0);
    if(data.length>0){
      renderTask = data.map((t,i)=>{
         if(choise === 0) {
          return <li key={i} className='m-0 top-0  gap-0 w-screen'> 
            <div className= "w-screen mt-1 text-start rounded justify-between bg-slate-700 top-0">
              <h4  className=' text-2xl text-rose-600  m-2 flex overflow-hidden border-b-2 justify-between border-gray-100'>{t.titel}    
                <div>
                  <button onClick={()=>{ maxH === "max-h-7" ? setmaxH('') : setmaxH('max-h-7')  }} ><FaArrowDownAZ color='white' /></button>                      
                  <button onClick={()=>{ deleteTask(i) }} className='w-5 h-5 bg-red-400 m-2 mr-7 text-center text-xl '><IoClose /></button>
                </div>
              </h4>
              <div className='max-w-7xl overflow-hidden text-start'>     
                <p  className={`text-xl ${maxH} text-white m-2`} >{t.desc}</p>
              </div>
          </div>
      </li>
        } else{
          return <li key={i} className='flex items-centerc justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'> 
            <h5 className=' text-2xl font-semibold'> {t.titel} </h5>
            <h6 className=' text-xl font-semibold'> {t.desc} </h6>
          </div>
          <button onClick={() => { deleteTask(i) }} className=' bg-red-400 text-white px-4 py-2 rounded font-bold '>Delete</button>
         </li>
        }
        
      })}
        
  return (
    <>
    <h1 className="bg-zinc-500 text-white text-6xl text-center">Todo List</h1>
    <button onClick={()=>{ (!choise)? setchoise(1) : setchoise(0)}} className='px-4 py-2 m-5 text-xl bg-zinc-500 rounded text-white'>choise format</button>
    <form onSubmit={ submitdata }>
        <input className='px-6 py-2 m-5 text-xl border-zinc-800 border-4' type="text" onChange={(e)=>{ settitel(e.target.value) }}  placeholder='Entar titel here' value={titel}/>
        <input className='px-6 py-2 m-5 text-xl border-zinc-800 border-4' type="text" onChange={(e)=>{ setdesc(e.target.value) }} placeholder='Entar description here' value={desc}/>
        <button className='px-4 py-2 m-5 text-xl bg-zinc-500 rounded text-white'>ok</button>
      </form>
    <div className='py-5 w-screen bg-slate-200'>
        <ul>
            {renderTask}
        </ul>
    </div>
    </>
  )
}

export default App

