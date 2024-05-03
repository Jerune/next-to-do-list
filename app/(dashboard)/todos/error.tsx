'use client'

import Error from "next/error"

function ErrorUI({error}) {
  return (
    <div>Oops...{error.message}</div>
  )
}

export default ErrorUI