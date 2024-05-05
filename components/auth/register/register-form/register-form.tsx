'use client';

import { z } from 'zod'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';


const registerFormSchema = z.object({
    username: z.string().min(3).max(20,{
        message: 'Le username doit avoir entre 3 et 20 caractères',
    }),
    email: z.string().email({
        message: 'Veuillez verifier votre email'
    }),
    password: z.string().min(8).max(20, {
        message : 'Le mot de passe doit avoir avoir entre 8 et caractères'
    }),
    confirmPassword: z.string().min(8).max(20, {
      message : 'Le mot de passe doit avoir avoir entre 8 et caractères'
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

// registerFormSchema.parse({password: data.password, confirmPassword: data.confirmPassword})


function RegisterForm() {

  const [loading , setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { toast } = useToast()

    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
      })

     async function onSubmit(values: z.infer<typeof registerFormSchema>) {

        console.log(values)
        let data ;
        if (values) {
          if(values.password !== values.confirmPassword){
            setError('confirmPassword', { type:'server', message: 'Passwords do not match' });
            return;
          }
          else{
            data = JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
              })
          }
        }

        setLoading(true);
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        });
    
        if (response.status === 201) {
          toast({
            title: 'Account created. Confirm your email to get started.',
            description: 'Your account has been created successfully',
          });
          router.push('/confirmation');
        } else {
          const errorData = await response.json();
          console.log(errorData)
          Object.keys(errorData.errors).forEach((field) => {
            setError(field, { type: 'server', message: errorData.errors[field] });
          });
        }
    
        setLoading(false);
      }

  return (
    <div className='w-full mt-7'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:space-y-2">

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-md'>Username</FormLabel>
                <FormControl
                >
                  <Input placeholder="Ada" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl
                >
                  <Input placeholder="ndiakhate01998@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl
                >
                  <Input placeholder="abcdef12345" type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                >
                  <Input placeholder="abcdef12345" type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {
            loading ? 
              <Button type="submit" variant={'secondary'} size={'lg'} className='w-full bg-[#b4b4b6] text-[#000] text-md font-semibold'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Veuillez patientier svp ...
              </Button>
            : <Button type="submit" variant={'secondary'} size={'lg'} className='w-full bg-[#b4b4b6] text-[#000] text-md font-semibold'>Create account</Button>
          }

        </form>
      </Form>
    </div>
  )
}

export default RegisterForm