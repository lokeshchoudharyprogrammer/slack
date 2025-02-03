"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { SignInFlow } from '../types';
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from 'lucide-react';

interface SignInProps {
  setState: (state: SignInFlow) => void
}

function SignInCard({ setState }: SignInProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [pending, setPending] = React.useState(false)
  const { signIn } = useAuthActions();
const [error,setError]=React.useState('');
const OnPasswordSignIn=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

setPending(true);
signIn("password",{
  email,password,flow:"signIn"
}).catch((err)=>{
  setError("Invalid Email or Password")
}).finally(()=>{
  setPending(false)
})

}

  const onProvider = (value: "github" | "google") => {
    setPending(true)
    signIn(value).finally(() => {
      setPending(false)
    })
  }
  return (
    <Card className='w-full h-full p-8 ' >
      <CardHeader className='px-0 pt-0 '>
        <CardTitle>
          Login to your account
        </CardTitle>
      <CardDescription>
        Use your email to sign in
      </CardDescription>
      </CardHeader>

      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
          <TriangleAlert className="size-4"/>
          <p>{error}</p>
        </div>
      )}

      <CardContent className='space-y-5 px-0 pb-0'>
        <form onSubmit={OnPasswordSignIn} className='space-y-2.5'>
          <Input disabled={false} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
          <Input disabled={false} value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
          <Button type='submit' className='w-full' size={"lg"} disabled={pending}>
            Continue
          </Button>
        </form>
        <Separator />

        <div className='flex flex-col gap-y-2.5 '>
          <Button
            disabled={pending}
            onClick={() => onProvider("google")}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
          >
            <FcGoogle className='size-5 absolute top-3 left-5' />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => onProvider("github")}
            variant={"outline"}
            size={"lg"}
            className='w-full relative'
          >
            <FaGithub className='size-5 absolute top-3 left-5' />
            Continue with Github
          </Button>

        </div>
        <p className='text-xs text-muted-foreground'>
          Don't have an account ?
          <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor:pointer">Sign Up</span>

        </p>

      </CardContent>
    </Card>
  );
}

export default SignInCard;
