"use client"
import Sample from '@/components/Sample'
import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


import React from 'react'

function page() {
  return (
    <>
    
    <Sample/>
    <div>
      <Button >Click me</Button>
      <Link className={buttonVariants({ variant: "outline" })} href="/login">Click here</Link>

    </div>
    </>
  )
}

export default page