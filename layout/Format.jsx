import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

function Format({children}) {
  return (
    <>
    <Head>
        <title>Blogging-Platform-webSkitters</title>
    </Head>
      <Header/>
      <main>{children} </main>
      <Footer/>
    </>
  )
}

export default Format
