import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import SiteNav from './SiteNav'

export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container className="relative">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="" width={40} height={40} className="w-10 h-10" priority />
            <span className="text-xl font-bold text-aiceless-blue">Aiceless</span>
          </Link>
          <SiteNav />
        </div>
      </Container>
    </header>
  )
}
