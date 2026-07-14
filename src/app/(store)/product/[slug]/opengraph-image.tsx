import Image from "next/image"
import { ImageResponse } from "next/og"
import colors from "tailwindcss/colors"
import { api } from "@/app/data/api"
import type { Product } from "@/app/data/types/product"
import { env } from "@/env"

// Image metadata
export const alt = "About Acme"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  // Font loading, process.cwd() is Next.js project directory

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={productImageURL} alt="" style={{ width: "100%" }} />
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
