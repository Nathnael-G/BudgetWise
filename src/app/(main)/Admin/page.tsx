"use client"
import BudgetTasks from '@/components/BudgetTasks'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import PredectionSection from '@/components/PredectionSection'
import React from 'react'
import { useState } from 'react';

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
    <NavBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <div className='ml-64 max-w-[2000px] mr-6'>
    <Header />
    <PredectionSection />
    <BudgetTasks />
    </div>
    </>
  )
}

export default Admin