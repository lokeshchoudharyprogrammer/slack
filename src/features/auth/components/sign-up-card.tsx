"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { SignInFlow } from '../types';
 
interface SignUpProps {
  setState:(state:SignInFlow) => void
}

function SignUpCard({setState}:SignUpProps) {

  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
  const [confirmpassword,setConfirmPassword]=React.useState("")

  return (
    <Card className='w-full h-full p-8 ' >
      <CardHeader className='px-0 pt-0 '>
        <CardTitle>
          Sign up to your account
        </CardTitle>
      </CardHeader>
      <CardDescription>
        Use your email to sign Up
      </CardDescription>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-2.5'>
          <Input disabled={false} value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <Input disabled={false} value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <Input disabled={false} value={confirmpassword} type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} required />
          <Button type='submit' className='w-full' size={"lg"} disabled={false}>
            Continue
          </Button>
        </form>
          
          <Separator  />

          <div className='flex flex-col gap-y-2.5 '>
            <Button
            disabled={false}
            onClick={() => { }}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
            >
              <FcGoogle className='size-5 absolute top-3 left-5'/>
              Continue with Google
            </Button>
            <Button
            disabled={false}
            onClick={() => { }}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
            >
              <FaGithub className='size-5 absolute top-3 left-5'/>
              Continue with Github
            </Button>

          </div>
          <p className='text-xs text-muted-foreground'>
            Already have an account ?
            <span onClick={()=>setState("signIn")} className="text-sky-700 hover:underline cursor:pointer">Sign In</span>

          </p>
        
      </CardContent>
    </Card>
  );
}

export default SignUpCard;
