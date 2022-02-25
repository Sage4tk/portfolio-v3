import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

//components
import Nav from '../components/Nav'

//get projects from api
export const getStaticProps = async () => {
  const res = await fetch("https://zackpersonalapi.herokuapp.com/api/portfolio");
  const data = await res.json();

  return {
    props: {
      projects: data
    }
  }
}

const Home: NextPage<any> = ({ projects }) => {
  return (
    <div className="main-page">
      <Head>
        <title>Timothy Timbol | Portfolio</title>
        <meta name="description" content="Timoty Timbol's portfolio website that showcases front-end development works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav page="home"/>
      <section className='landing-wrapper'>
        <h1>Hello World, I am Timothy,<br/>a Front-End Developer</h1>
        <p>An aspiring developer from the Philippines and a life-long learner. I've coded for years and my mastery on front-end stacks will help solve problems. I do not wish to limit myself so I strive to learn new things everyday.</p>
        <button>Download Resume</button>
      </section>
    </div>
  )
}

export default Home
