import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="border-t p-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-x-1 text-sm font-medium">
            <div>
              <Link href="/">AnimeCharge</Link>
            </div>
            <div>{'-'}</div>
            <div>{new Date().getFullYear()}</div>
          </div>
        </div>
      </footer>
    </>
  )
}