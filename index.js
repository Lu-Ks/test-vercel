const start = async () => {
  const resp = await fetch("https://test-vercel-nine-teal.vercel.app/api/index");
  console.log({ resp });
  const data = await resp.json()
  console.log({ data })
}

start();