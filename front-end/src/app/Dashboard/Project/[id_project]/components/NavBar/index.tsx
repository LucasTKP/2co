import { CaretDownIcon, CaretLeftIcon } from '@radix-ui/react-icons'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { ProjectContext } from '@/src/app/Dashboard/Project/[id_project]/layout'
import { dataUserContext } from '@/src/app/context/user'
import Link from 'next/link'


function Index() {
    const [navBar, setNavBar] = useState<Boolean>(true)
    const { projectContext } = useContext(ProjectContext)
    const { userContext } = useContext(dataUserContext)
    const [menuCowokers, setMenuCowokers] = useState<Boolean>(true)
    const cowokers = [{ name: 'Vinicius Garcia' }, { name: 'Lucas Gean' }, { name: 'Miguel Kelton' }]


    return (
        <section className={`${navBar ? 'w-[300px] text-gray-300' : 'w-[35px]'} duration-300`}>
            <div className={`${navBar ? 'p-[20px] border-r-[3px] border-r-[#4A4A4A] w-[300px]' : 'w-[0px]'} duration-300  h-screen flex flex-col`}>
                <Image src={'/icons/twoArrows.svg'} width={20} height={17} alt='' onClick={() => { setNavBar(!navBar), setMenuCowokers(!navBar) }} className={`cursor-pointer flex items-center duration-300 ${navBar ? 'self-end' : 'rotate-180 absolute mt-[20px] ml-[10px]'}`} />

                <p className='text-[22px] text-emerald-500 truncate mt-[15px]'>{projectContext?.name}</p>

                <div className='flex items-center mt-[30px] min-h-[51px]'>
                    {userContext.avatar ?
                        <Image src={userContext.avatar} priority width={51} height={51} alt="" className='rounded-[8px] drop-shadow-[0px_0px_5px_rgba(255,255,255,0.25)]' />
                        :
                        <svg className="h-[30px] w-[30px] animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" style={{ strokeWidth: 4 }} />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    <p className='ml-[20px] text-[20px] truncate'>{userContext.name}</p>
                </div>

                <hr className='w-[30%] h-[3px] rounded-full bg-[#D9D9D9] my-[30px]' />

                <div className='px-[10px]  gap-y-[30px] flex flex-col'>
                    <div className='flex items-center gap-x-[30px] text-[18px]'>
                        <Image src={'/icons/user.svg'} width={28} height={28} alt='' className='hover:opacity-70 cursor-pointer duration-100' />
                        <p className='hover:opacity-70 cursor-pointer duration-100 truncate'>Meinhas Tarefas</p>
                        <p className='opacity-[0.60] ml-auto hover:opacity-40 cursor-pointer duration-100 truncate'>5</p>
                    </div>


                    <div className='flex items-center gap-x-[30px] text-[18px]'>
                        <Image src={'/icons/calendarNavBar.svg'} width={28} height={26} alt='' className='hover:opacity-70 cursor-pointer duration-100' />
                        <p className='hover:opacity-70 cursor-pointer duration-100 truncate'>Tarefas</p>
                        <p className='opacity-[0.60] ml-auto hover:opacity-40 cursor-pointer duration-100 truncate'>8</p>
                    </div>

                    <div>
                        <div onClick={() => setMenuCowokers(!menuCowokers)} className='flex items-center gap-x-[30px] text-[18px]'>
                            <Image src={'/icons/twoHand.svg'} width={0} height={0} alt='' style={{ width: 'auto', height: 24 }} className='hover:opacity-70 cursor-pointer duration-100' />
                            <p className='hover:opacity-70 cursor-pointer duration-100 truncate'>Equipe</p>
                            <Image src={'/icons/arrowBottom.svg'} width={0} height={0} alt='' style={{ width: 'auto', height: 8 }} className={`${navBar ? 'ml-auto hover:opacity-70 cursor-pointer duration-100' : 'hidden'} ${menuCowokers ? '' : 'rotate-180 duration-100'}`} />
                        </div>

                        <div className={`duration-200 relative w-full flex flex-col gap-y-[5px] mt-[15px] ${menuCowokers ? 'h-[100%]' : 'h-[0%]'}`}>
                            {cowokers.map((cowoker) => {
                                return (
                                    <button className={`h-full cursor-default ${navBar ? 'w-fit' : ''}`} key={cowoker.name}>
                                        <p className=' text-emerald-500 font-semibold truncate ml-[60px] text-left hover:opacity-70 duration-100 h-full overflow-y-hidden'>{cowoker.name}</p>
                                    </button>
                                )
                            })}

                            <div className={`w-[3px] h-[90%] bg-[#4E4E4E] rounded-full ml-[14px] ${navBar ? 'absolute' : ''}`} />
                        </div>
                    </div>
                </div>

                <Link href='/Dashboard' className='cursor-pointer hover:opacity-70 duration-100 mt-auto flex items-center'>
                    <Image src={'/icons/arrowLeft.svg'} width={0} height={0} alt='' style={{ width: 'auto', height:  19}} className={`${navBar ? '' : 'hidden'} ${menuCowokers ? '' : 'rotate-180'}`} />
                    <p className='ml-[15px] truncate text-[20px]'>Projetos</p>
                </Link>
            </div>
        </section>
    )
}

export default Index