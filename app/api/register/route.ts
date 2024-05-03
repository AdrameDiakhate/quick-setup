import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import prisma from "@/lib/prisma";
import { EmailTemplate } from "@/components/email-template";


interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
}

export async function POST (req: NextRequest){

  if(!req.body || req.body ===null){{
    return NextResponse.json({
      statusCode: 400,
      body: "Bad request"
    })
  }}

  const requestBody = await req.json();
  
  const { username , email , password, confirmPassword , firstName , lastName  } : RegisterRequest = requestBody;

  // Crypt password with bcrypt

  // Get salt from bcrypt
  const salt = await bcrypt.genSalt(10);

  // Hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, salt);    

  const dataTobeRegistered = {
    username: username,
    email: email,
    password: hashedPassword,
    firstName: firstName || "",
    lastName: lastName || "",
  }

  console.log(dataTobeRegistered)

  // Save user to database

  try{

    const user = await prisma.user.create({
      data: dataTobeRegistered
    })
    
    const response = await fetch('/api/send' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipient: dataTobeRegistered.email,
        subject: "Welcome to quick setup",
        content: EmailTemplate({ username: dataTobeRegistered.username })
      })
    })

    console.log("response: " + response)

    return NextResponse.json({
      statusCode: 201,
      body: "User created successfully"
    })

  }catch(err) {

    return NextResponse.json({
      statusCode: 500,
      body: "Internal server error"
    })

  }


}
