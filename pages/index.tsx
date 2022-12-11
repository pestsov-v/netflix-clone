import type {GetServerSideProps} from 'next'
import Head from 'next/head'
import {Banner, Header} from "../components";
import requests from "../utils/requests";
import {HomePageProps} from "../types/pages";

const Home = (homeProps: HomePageProps) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
            <Banner netflixOriginals={homeProps.netflixOriginals}/>
        </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
    ] = await Promise.all([
        fetch(requests.NETFLIX_ORIGINALS).then((res) => res.json()),
        fetch(requests.TRENDING).then((res) => res.json()),
        fetch(requests.TOP_RATED).then((res) => res.json()),
        fetch(requests.ACTION_MOVIES).then((res) => res.json()),
        fetch(requests.COMEDY_MOVIES).then((res) => res.json()),
        fetch(requests.HORROR_MOVIES).then((res) => res.json()),
        fetch(requests.ROMANCE_MOVIES).then((res) => res.json()),
        fetch(requests.DOCUMENTARIES).then((res) => res.json()),
    ])

    return {
        props: {
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
        },
    }
}
