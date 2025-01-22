"use client"

import Navbar from "@/app/component/Navbar";
import { Button,  TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm} from "react-hook-form"


interface IssueForm{
    tittle:string;
    description:string;
}
export default function NewIssuePage() {
    
    return (
        <>
        <Navbar></Navbar>
            <div className="max-W-xl space-y-3">
            <TextField.Root placeholder="Search the docs…">
                </TextField.Root>
                <SimpleMDE placeholder="Reply to comment…"/>
                <Button>Submit New Issue</Button>
            </div>
        </>
    );
}
