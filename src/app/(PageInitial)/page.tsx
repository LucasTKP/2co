'use client'
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'


export default function Home() {
  const { data: session } = useSession()
  const originUrl =

    useEffect(() => {
      function VerifySession() {
        console.log(session)
        if (session != null) {
          window.location.replace('/Dashboard')
        }
      }
      VerifySession()
    }, [session])


  return (
    <main className="flex flex-col items-center">
      <Image src={'/icons/Logo2Co.svg'} width={80} height={80} alt='' className='mt-[50px]' />
      <div className='mt-[50px] bg-[#2D2D2D] px-[50px] pb-[50px] rounded-[12px] flex flex-col items-center border-[#5F5F5F] border drop-shadow-[4px_4px_6px_rgba(0,0,0,0.25)]'>

        <Image src={'/images/logoSignIn.png'} alt={''} width={363} height={351}/>

        <div className='w-full h-[3px] bg-emerald-500 fill-none rounded-full'/>

        <h1 className='text-[#fff] text-[30px] mt-[40px] font-poppins font-[300]'>Faça Login e comece <br />a organizar os seus  <br /> ToDos</h1>
        <button onClick={() => signIn("github", { callbackUrl: `${window.location.origin}/Dashboard` })} className='mt-[40px] group duration-100 hover:text-[#fff] text-[#9B9B9B] self-center border-[2px] border-emerald-500 px-[15px] py-[10px] text-[22px] rounded-[10px] flex items-center gap-x-[20px]'>
          Entrar com o github
          <GitHubLogoIcon width={35} height={35} className='text-[#FFFFFF] group-hover:rotate-45 duration-200 rounded-full' />
        </button>
      </div>
    </main>
  )
}