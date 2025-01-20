"use client"

import Navbar from "@/app/component/Navbar";
import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewIssuePage() {
    return (
        <>
        <Navbar></Navbar>
            <div className="max-W-xl space-y-3">
            <TextField.Root placeholder="Search the docs…">
                </TextField.Root>
                <TextArea placeholder="Reply to comment…"/>
                <Button>Submit New Issue</Button>
            </div>
        </>
    );
}
