import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import PredectionSection from '@/components/PredectionSection'
import React from 'react'

function Admin() {
  return (
    <>
    <NavBar />
    <div className='ml-64 max-w-[2000px] mr-6'>
    <Header />
    <PredectionSection />
    </div>
    </>
  )
}

export default Admin