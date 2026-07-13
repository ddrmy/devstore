import { Header } from "@/components/header"
import { CartProvider } from "@/contexts/cart-context"
import type { ReactNode } from "react"

type Props = { children: ReactNode }

export default function StoreLayout({ children }: Props) {
  return (
    <CartProvider>
      <div className="mx-auto grid w-full max-w-[1600px]grid-rows-app gap-5 p-8 grid-">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
