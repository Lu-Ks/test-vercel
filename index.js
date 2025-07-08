const start = async () => {
  const resp = await fetch("https://vercel.com/luks-projects-25936331/test-vercel/index")
  console.log({ resp });
}

start();