import { Header } from "@/components/header"
import type { ReactNode } from "react"

type Props = { children: ReactNode }

export default function StoreLayout({ children }: Props) {
  return (
    <div className="mx-auto grid w-full max-w-[1600px]grid-rows-app gap-5 p-8 grid-">
      <Header />
      {children}
    </div>
  )
}
