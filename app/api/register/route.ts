import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import prisma from "@/lib/prisma";
import nodemailer from 'nodemailer';
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from 'uuid';


interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
}

function GenerateConfirmationLink(token: string): string {
  if (!token || token === null) {
      return "Invalid token";
  } else {
      return `http://localhost:3000/confirmation/${token}`;
  }
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

  const uniqueUUID = uuidv4() + uuidv4() + uuidv4();

  const confirmationLink = GenerateConfirmationLink(uniqueUUID);

  // const htmlContent = fs.readFileSync(path.join(__dirname, "confirmation_email.html"), "utf-8");

  // Remplacer toutes les variables dans le HTML avec les valeurs appropriées
  // const htmlBody = htmlContent
  //     .replace("[NomUtilisateur]", "Adrame Diakhate") // Remplacer par le nom de l'utilisateur
  //     .replace("[LienConfirmation]", GenerateConfirmationLink(uniqueUUID)); // Remplacer par le lien de confirmation généré

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
    confirmationToken: uniqueUUID,
    emailConfirmed: false
  }

  console.log(dataTobeRegistered)

  const htmlBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email de confirmation</title>
      </head>
      <body>
          <p> Bonjour ${dataTobeRegistered.firstName || ''} ${dataTobeRegistered.lastName || ''}</p>

          Cliquer sur le lien ci-dessous pour confirmer votre adresse email :

          <a href="${confirmationLink}">Confirmer mon adresse email</a>

      </body>
      </html>
  `;


  // Save user to database

  try{
    const user = await prisma.user.create({
      data: dataTobeRegistered
    })

    // Send email to user

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'marquise.gutkowski@ethereal.email',
          pass: 'NK41kKUvAtFADYZDh7'
      }
  });

    console.log("transporter ", transporter)

    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <marquise.gutkowski@ethereal.email>', // sender address
      to: "ndiakhate01998@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: htmlBody, // html body
    });

    console.log(" infos ", info)

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
