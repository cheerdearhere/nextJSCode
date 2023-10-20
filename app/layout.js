import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import {pageLink} from "@/app/components/commons";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="navbar">
          <Link href={pageLink.home}>홈</Link>
          <Link href={pageLink.list}>제품 목록</Link>
          <Link href={pageLink.cart}>장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
