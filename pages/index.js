import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Bank</title>
        <meta name="description" content="Easy Bank Landing Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />
    </div>
  )
}
