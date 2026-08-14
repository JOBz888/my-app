import React from 'react'

const page = async () => {
await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>

    <h1>Hello</h1>
    <p>name : got</p>
    </>
  )
}

export default page;