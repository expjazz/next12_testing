import { useRouter } from 'next/router'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { i18n } from '../../next-i18next.config'
import { useTranslation } from 'react-i18next'

function TextStar() {
  const router = useRouter()
  const { t } = useTranslation()
  console.log('router', router)
  return (
    <div>
      Test
      {
        t('test')
      }
    </div>
  )
}

export async function getStaticPaths() {
  const paths = []
  const getBookingsFrontPage = [
    {
      url: 'a/hello',
    },
    {

      url: 'b/world'
    }
  ]
  getBookingsFrontPage.forEach(tag => {
    i18n.locales.forEach(locale => {
      paths.push({ params: { tes: tag.url?.split('/')[1] }, locale })
    })
  })

  return {
    paths,
    fallback: true
  }
}
export async function getStaticProps(props) {
  const { locale } = props
  return {
    props: {
      test: 'test',
      ...(await serverSideTranslations(locale, ['common', 'footer'])),

    }
  }
}

export default TextStar
