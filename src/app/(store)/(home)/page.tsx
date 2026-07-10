export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <h1>Olá</h1>
    </div>
  )
}
