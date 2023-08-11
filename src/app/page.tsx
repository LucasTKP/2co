'use client'
import Image from 'next/image'
import { GitHubLogoIcon }from '@radix-ui/react-icons'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'


export default function Home() {
  const { data: session } = useSession()

  useEffect(() => {
    function VerifySession(){
      console.log(session)
      if(session != null){
        window.location.replace('/Dashboard')
      }
    }
    VerifySession()
  }, [session])
  

  return (
    <main className="flex flex-col items-start">
      <Image src={'/icons/Logo2Co.svg'} width={80} height={80} alt='' className='m-[15px]'/>
      <p className='text-emerald-400 text-center self-center text-[50px]'>Faça login e comece a organizar <br/>os seus ToDos</p>
      <button onClick={() => signIn("github")} className='group hover:text-emerald-500 hover:border-emerald-500 duration-100 text-emerald-400 self-center border-[2px] border-emerald-400 px-[15px] py-[5px] text-[22px] rounded-[10px] flex items-center gap-x-[5px] mt-[50px]'>
        Entrar com o github
        <GitHubLogoIcon width={25} height={25} className='group-hover:rotate-45 duration-100'/>
      </button>
    </main>
  )
}
