import { Request, Response } from 'express';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config();

export const home = async (req: Request, res: Response)=>{
  res.render('pages/home');
};

export const email = async (req: Request, res: Response)=>{
  const user = 'contato@penedodev.com'
  const pass = process.env.PASS as string

  try {
    let transport = nodemailer.createTransport({
      host: "smtp.umbler.com",
      port: 587,
      auth: {
        user: user,
        pass: pass
      },
    })
      
    let message = {
      from: user,
      to: user,
      subject: 'Assunto de teste',
      text: 'Opa Fulano Tudo bem?',
    }
  
    let info = await transport.sendMail(message)
    
    console.log(info)
    res.send('E-mail enviado com sucesso!')
  } catch (error) {

    console.log('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar e-mail!');
  }

  
};