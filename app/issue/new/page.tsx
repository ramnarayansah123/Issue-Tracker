"use client"

import Navbar from "@/app/component/Navbar";
import { Button,  Callout,  TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm ,Controller} from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react";


interface IssueForm{
    tittle:string;
    description:string;
}
export default function NewIssuePage() {
    const router=useRouter();
    const {register,control,handleSubmit}= useForm<IssueForm>();
   const[error,setError]= useState('');
    

    return (
        <>
        <Navbar></Navbar>
        <div className="max-W-xl">
            {error &&<Callout.Root color="red" className="mb-5">
                <Callout.Text>{error}</Callout.Text>

            </Callout.Root>}
            <form className=" space-y-3 "onSubmit={handleSubmit(async(data)=>{
                try {
                    await axios.post("/api/users",data);
                    router.push('/issue');
                    
                } catch (error) {
                    setError("An unexpected error occured.");
                }
            })}>
            <TextField.Root placeholder="Search the docs…"{...register("tittle")}>
                </TextField.Root>
                <Controller
                name="description"
                control={control}
                render={({field})=> <SimpleMDE placeholder="Reply to comment…"{...field}/>}
                
                />
               
                <Button>Submit New Issue</Button>
            </form>
            </div>
        </>
    );
}
