'use client'

import { IoMdClose } from 'react-icons/io'
import { useState, useCallback, useEffect } from 'react';
// import Button from '../Button';

interface ModalTemplateProps {
    isOpen?: boolean;
    onClose: ()=> void;
    onSubmit: ()=> void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionlabel?: string;
    // disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
    paddingTop?: string;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({paddingTop, isOpen, body, title, onClose, onSubmit, secondaryAction, secondaryActionLabel, actionlabel}) => {

    const [showModal, setShowModal] = useState(isOpen)


    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 300);
    },[isOpen],)

    const handleSubmit = useCallback(()=> {
        onSubmit();
        // handleClose();
    },[onSubmit])

    const handleSecondaryAction = useCallback(()=> {
        if(!secondaryAction){
            return;
        }
        secondaryAction();
    }, [secondaryAction])

    if(!isOpen){
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-opacity-60 outline-none no-scrollbar focus:outline-none backdrop-blurr-sm bg-black">
            <div className={`relative w-full h-full mx-auto my-6 transition md:w-4/6 lg:w-2/4 xl:w-[500px] lg:h-auto md:h-auto`}>
                <div className={`h-ful duration-300 ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'} translate`}>
                    <div className='ptt-20'> {/* This adds padding below the modal*/}
                        <div className={`relative flex flex-col w-full h-full bg-white rounded border dark:bg-[#1B1F23] shadow-lg outline-none translate lg:h-auto md:h-auto focus:outline-none`}>
                            <div className='flex items-center justify-between p-3 rounded-t relative border-b-[1px]'>
                                <div className='text-lg font-semibold'>
                                    {title}
                                </div>
                                <button onClick={handleClose} className='p-1 transition border-0 hover:opacity-70'>
                                    <IoMdClose size={18}/>
                                </button>
                            </div>
                            <div className='relative flex-auto p-6'>
                                {body}
                            </div>
                            <div className='flex flex-col gap-2 p-6'>
                                <div className='flex flex-row items-center w-full gap-4'>
                                    {/* {secondaryAction && secondaryActionLabel && (<Button small label={secondaryActionLabel} onClick={handleSecondaryAction} outline/>)} */}
                                    {/* {actionlabel && (<Button label={actionlabel} small onClick={handleSubmit}/>)} */}
                                </div>
                                {/* footer */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTemplate