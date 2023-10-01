'use client'
import React, { useState } from 'react'
import ModalCreateTask from './components/Task/ModalCreateTask'

function Page() {
  const [tasks, setTasks] = useState<boolean>(true)
  const [modalTask, setModalTask] = useState<boolean>(true)
  return (
    <section className='mt-[50px] w-full flex flex-col items-center'>
      <ModalCreateTask modalTask={modalTask} setModalTask={setModalTask}/>
      <div className='w-[90%]'>
        <div className='w-full'>
          <div className='flex items-center font-bold'>
            <p onClick={() => setTasks(true)} className={`${tasks ? '' : 'text-[#4E4E4E]'} hover:opacity-70 duration-100 cursor-pointer ml-[20px]`}>Tarefas</p>
            <p onClick={() => setTasks(false)} className={`${tasks ? 'text-[#4E4E4E]' : ''} hover:opacity-70 duration-100 cursor-pointer ml-[60px]`}>Concluidas</p>
            <p onClick={() => setModalTask(true)} className='hover:opacity-70 duration-100  cursor-pointer ml-auto font-semibold text-emerald-500'>Criar Novo</p>
          </div>
          <div className='w-full h-[3px] bg-[#4A4A4A]'>
            <div className={`h-full w-[100px] bg-emerald-500 duration-200 ${tasks ? '' : 'ml-[133px]'}`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page