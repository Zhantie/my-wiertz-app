import { CardJobInfo } from 'app/components/cardJobInfo'
import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CardJobInfo />
    </>
  )
}
