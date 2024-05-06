import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


interface ConfirmationTokenRequest {
    confirmationToken : string;
}

export async function GET (req: NextRequest){

    if(!req.body || req.body ===null){{
        return NextResponse.json({
          statusCode: 400,
          body: "Bad request"
        })
      }}
    
   const requestBody = await req.json();

  const confirmationToken = req.nextUrl.searchParams.get("confirmationToken") as string;

      
   const user = await prisma.user.findUnique({
         where: {
             emailConfirmed: false,
             confirmationToken: confirmationToken
         }
    })

    
    if(user){
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                emailConfirmed: true
            }
        })
        return NextResponse.json({
            statusCode: 200,
            body: true
        })
    }else{
       return NextResponse.json({
        statusCode: 404,
        body: false
    })
    }
}