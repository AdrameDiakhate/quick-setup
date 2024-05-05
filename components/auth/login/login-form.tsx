'use client';


import React, { useState } from 'react'
import { Input } from '../../ui/input'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useToast } from '../../ui/use-toast';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '../../ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

type LoginFormProps = {
    email: string;
    password: string;
    // handleSubmit: () => void;
}

const loginFormSchema = z.object({
    email: z.string().email({
        message: 'Veuillez verifier votre email'
    }),
    password: z.string().min(8).max(20, {
        message : 'Le mot de passe doit avoir avoir entre 8 et caractères'
    })
})

function LoginForm() {

    const [loading , setLoading] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const { toast } = useToast()
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })

     async function onSubmit(values: z.infer<typeof loginFormSchema>) {

        console.log(values)
        let data ;
        if (values) {

            data = JSON.stringify({
                email: values.email,
                password: values.password
              })
          }
        setLoading(true);
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        });
    
        if (response.status === 200) {
          toast({
            title: 'Account created. Confirm your email to get started.',
            description: 'Your account has been created successfully',
          });
          router.push('/member');
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 lg:space-y-5">

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
                    <FormLabel className='flex justify-between decoration-primary text-primary'>
                      <span> Password </span>
                      <a href='#'> Forgot password ?</a>
                    </FormLabel>
                    <FormControl
                    >
                        <Input placeholder="abcdef12345" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div>
                  {
                  loading ? 
                      <Button type="submit" variant={'secondary'} size={'lg'} className='w-full bg-[#b4b4b6] text-[#000] text-md font-semibold'>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Veuillez patientier svp ...
                      </Button>
                  : 
                      <Button type="submit" variant={'secondary'} size={'lg'} className='w-full bg-[#b4b4b6] text-[#000] text-md font-semibold'> 
                      <div className='flex items-center'>
                        <span> Continue </span>
                        <ArrowRight size={'sm'} className='w-10 h-5'/> 
                      </div>
                  </Button>
                  }
                </div>

            </form>
        </Form>
    </div>
  )
}

export default LoginForm