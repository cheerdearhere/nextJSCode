import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import {pageLinks} from "@/app/components/serverSide/linkList";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="navbar">
          <Link href={pageLinks.home}>홈</Link>
          <Link href={pageLinks.list}>제품 목록</Link>
          <Link href={pageLinks.cart}>장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
