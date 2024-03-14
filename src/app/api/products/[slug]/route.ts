/* eslint-disable prettier/prettier */

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    console.log(params.slug)

    // await new Promise(resolve => setTimeout(resolve, 2000))

    // const featuredProducts = data.products.filter((product) => product.featured)

    return Response.json({})
}