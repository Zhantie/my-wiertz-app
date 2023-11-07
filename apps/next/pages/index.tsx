// import { CardJobInfo, DemoCard } from 'app/components/cardJobInfo'
import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { DemoCard } from '../../../packages/app/components/MyCard'
import { CardJobInfo } from 'app/components/cardJobInfo'

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
