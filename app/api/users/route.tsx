
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import { prisma } from "@/prisma/client";

const createIssueSchema= z.object({
    tittle: z.string().min(1,'Tittle is required').max(255),
    description: z.string().min(1,'Description is required.')
});


export async function POST(request:NextRequest){
    const body=await request.json();

    const validation= createIssueSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.format,{status:201})

    const newIssue= await prisma.issue.create({
        data: {tittle:body.tittle, description:body.description }

    })

    return NextResponse.json(newIssue);



}