'use client'

import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import useAnimeTitle from '@/hooks/useAnimeTitle'
import { getRandomAnime } from '@/modules/v1'
import { getRandomAnimeType } from '@/types/v1'
import { Github, Home, Infinity, Linkedin, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  async function randomAnime() {
    const randomData: getRandomAnimeType = await getRandomAnime()
    useAnimeTitle.setState({ AnimeTitle: randomData.data.title })
  }
  return (
    <>
      <header className="border-b p-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu size={28} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <Separator />
                    <SheetDescription asChild>
                      <div className="flex flex-col items-start gap-y-1">
                        <Button variant="link">
                          <Home size={28} />
                          <Link href="/">Home</Link>
                        </Button>
                        <Button variant="link">
                          <Github size={28} />
                          <Link href="https://github.com/duggavamshidhar" target="_blank">
                            GitHub
                          </Link>
                        </Button>
                        <Button variant="link">
                          <Linkedin size={28} />
                          <Link href="https://www.linkedin.com/in/duggavamshidhar" target="_blank">
                            LinkedIn
                          </Link>
                        </Button>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <Image src="/logo.png" alt="logo" width={28} height={28} />
              <div className="font-bold">
                <Link href="/">AnimeCharge</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-1">
              <Button variant="outline" size="icon" onClick={() => randomAnime()}>
                <Infinity size={28} />
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}