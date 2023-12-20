import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { paths } from '../utils/paths'
import LoginPage from '../Views/LoginPage'
import HomePage from '../Views/HomePage'
import MainComponent from '../Components/MainComponent'
import BasicsPage from '../Views/BasicsPage'
import MethodsPage from '../Views/MethodsPage'
import ClassesPage from '../Views/ClassesPage'
import FilePage from '../Views/FilePage'

const Router = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route element={
            <Suspense fallback={null}>
              <HomePage/>
            </Suspense>
          }
          path={paths.landingPage}/>
          
        <Route element={
            <Suspense fallback={null}>
              <LoginPage/>
            </Suspense>
          }
          path={paths.signIn}/> 
        <Route element={
            <Suspense fallback={null}>
              <BasicsPage/>
            </Suspense>
          }
          path={paths.basics}/>
         
        <Route element={
            <Suspense fallback={null}>
              <MethodsPage/>
            </Suspense>
          }
          path={paths.methods}/> 
        <Route element={
            <Suspense fallback={null}>
              <ClassesPage/>
            </Suspense>
          }
          path={paths.classes}/>  
         
         <Route element={
            <Suspense fallback={null}>
              <FilePage/>
            </Suspense>
          }
          path={paths.files}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router
