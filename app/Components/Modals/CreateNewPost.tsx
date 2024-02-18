'use client'

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ModalTemplate from "./ModalTemplate";
import useNewPostModalStore from "@/app/hooks/useNewPostModalStore";
import CreatePostModalTemplate from "./CreatePostModalTemplate";


const CreateNewPostModal = () => {
    const {control, handleSubmit, formState:{errors}} = useForm<FieldValues>()
    const {isOpen, onClose} = useNewPostModalStore();


    const onSubmit: SubmitHandler<FieldValues> = (data: any) => { 
        console.log(data)
    }

    const bodyContent = (
        <div className="flex h-[300px] flex-col gap-4">
            <div className='flex justify-between w-full gap-3'>
                Hey I am working
            </div>
        </div>  
    )

    return (
        <CreatePostModalTemplate title="Add Medicine Brand" body={bodyContent} secondaryActionLabel={'Cancel'} secondaryAction={onClose} onSubmit={handleSubmit(onSubmit)} actionlabel={'Create'} isOpen={isOpen} onClose={onClose} />
    )
}

export default CreateNewPostModal