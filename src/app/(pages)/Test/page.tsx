"use client"
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Textarea } from '@/app/components/ui/textarea'
import { Button, buttonVariants } from '@/app/components/ui/button'
import Image from 'next/image'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form'
import { Input } from '@/app/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Label } from '@/app/components/ui/label'

const formSchema = z.object({
 

  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password should be atleast 8 character',
  })
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     email:"",
     password:""
    },
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <MaxWidthWrapper>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
    <div className='flex flex-col items-center space-y-2 text-center'>
      Place the pic here
      <h1 className='text-2xl font-bold'>
        Create an account
      </h1>
      <Link 
      className={buttonVariants({
        variant:'link'
      })}
      href='/sign-in'>
        Already have an account sign in
        <ArrowRight className='h-4 w-4'/>
        </Link>
    </div>
    </div>
    </div>
   
      <Form {...form}>
        <div className='grid gap-6'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-10'>
        <div className='grid gap-2'>
        <div className='gid gap-1 py-2'>
       <Label>Email</Label>
       <Input/>
        </div>
        <div className='gid gap-1 py-2'>
       <Label>Password</Label>
       <Input/>
        </div>
        </div>
        <Button className='max-sm:w-full'>SignIn</Button>
        </form>

        </div>
       
      </Form>
      
      </MaxWidthWrapper>
    </>
  );
}