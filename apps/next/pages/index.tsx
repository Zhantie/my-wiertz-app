// import { CardJobInfo, DemoCard } from 'app/components/cardJobInfo'
import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { DemoCard } from 'app/components/JobCard/MyCard'


export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
       <DemoCard isLikeButton={true} isChosenCard={true} isJobCardInfo={false}  />
    </> 
  )
}
