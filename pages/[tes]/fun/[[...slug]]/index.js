import { useRouter } from 'next/router'
import React from 'react'

function Slug() {
  const router = useRouter()
  return (
    <h1>
      {router.query?.slug?.length > 0 ? router.query.slug[0] : 'Index' }
    </h1>
  )
}

export default Slug
