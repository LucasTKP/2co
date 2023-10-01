import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

interface Props {
    modalTask: boolean
    setModalTask: React.Dispatch<React.SetStateAction<boolean>>
}

function ModalCreateTask({ modalTask, setModalTask }: Props) {
    const status = ["Fazendo...", "Em analise...", "Concluido"]

    return (
        <section className='z-50'>
            <Dialog.Root onOpenChange={setModalTask} open={modalTask}>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/70 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#282828] py-[20px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <Dialog.Title className="text-[18px] font-semibold flex items-center gap-x-[10px] px-[20px]">
                            <p className='text-emerald-500 truncate'>FlashGospel</p>
                            <Image src='/icons/chevronRight.svg' alt='' width={0} height={0} className='w-[7px]' />
                            <p className='text-[#c6c6c6] whitespace-nowrap'>Nova Tarefa</p>
                        </Dialog.Title>
                        <form className='mt-[25px] text-[#282828]'>
                            <div className='flex flex-col justify-center px-[25px]'>
                                <input className='bg-[#c6c6c6] p-[5px] rounded-[4px] w-full text-[20px] placeholder:text-[#282828] focus:outline-none focus:ring-emerald-500 focus:ring-[1px]' placeholder='Título...' />

                                <textarea rows={5} className='duration-100 mt-[20px] caret-emerald-500 resize-none bg-[#c6c6c6] p-[5px] rounded-[4px] w-full text-[18px] placeholder:text-[#282828] focus:outline-none focus:ring-emerald-500 focus:ring-[1px]' placeholder='Descrição...' />
                            </div>
                            <hr className='w-full h-[3px] bg-[#c6c6c6] mt-[30px]' />
                            <div className='flex items-center text-[#C6C6C6] px-[20px] mt-[20px]'>
                                <select required onChange={(e) => 'HandleOnChangeState(e.target.value)'} className='text-[#c6c6c6] px-[4px] py-[4px] border-[2px] border-[#c6c6c6]  rounded-[5px] bg-[#282828]'>
                                    <option value="" disabled selected className='w-fit bg-transparent text-[14px]'>Status</option>
                                    {status.map((option, index) => {
                                        return (
                                            <option key={index} value={`${option}`} className='checked:bg-[#d1d1d1] checked:text-black bg-transparent truncate text-[14px]'>
                                                <p className='truncate'>{option}</p>
                                            </option>
                                        )
                                    })}
                                </select>

                                <select required onChange={(e) => 'HandleOnChangeState(e.target.value)'} className='ml-[10px] text-[#c6c6c6] px-[4px] py-[4px] border-[2px] border-[#c6c6c6]  rounded-[5px] bg-[#282828]'>
                                    <option value="" disabled selected className='w-fit bg-transparent text-[14px]'>Atribuir</option>
                                    {status.map((option, index) => {
                                        return (
                                            <option key={index} value={`${option}`} className='checked:bg-[#d1d1d1] checked:text-black bg-transparent truncate text-[14px]'>
                                                <p className='truncate'>{option}</p>
                                            </option>
                                        )
                                    })}
                                </select>
                                <button className='hover:opacity-70 duration-100 ml-auto font-semibold text-[#05A060] px-[15px] py-[4px] bg-emerald-500/30 border border-emerald-500 rounded-[4px]'>Criar</button>
                            </div>

                        </form>
                        <Dialog.Close asChild>
                            <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            >
                                <Cross2Icon className='w-full h-full text-[#7F7F7F]' />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    );
}

export default ModalCreateTask;