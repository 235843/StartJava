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
import TestsPage from '../Views/TestsPage'
import HelpPage from '../Views/HelpPage'
import ProfileComponent from '../Components/ProfileComponent'
import ProfilePage from '../Views/ProfilePage'

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

          <Route element={
              <Suspense fallback={null}>
                <TestsPage category="Podstawy Javy"/>
              </Suspense>
            }
            path={paths.basicsTest}/>

            <Route element={
                <Suspense fallback={null}>
                  <TestsPage category="Metody w Javie"/>
                </Suspense>
              }
              path={paths.methodsTest}/>

            <Route element={
                <Suspense fallback={null}>
                  <TestsPage category="Klasy w Javie"/>
                </Suspense>
              }
              path={paths.classesTest}/>
            
            <Route element={
                <Suspense fallback={null}>
                  <TestsPage category="Obsługa plików w Javie"/>
                </Suspense>
              }
              path={paths.fileTest}/>
            
            <Route element={
                <Suspense fallback={null}>
                  <TestsPage category="Test końcowy"/>
                </Suspense>
              }
              path={paths.endTest}/>

           <Route element={
              <Suspense fallback={null}>
                <HelpPage/>
              </Suspense>
            }
            path={paths.help}/>
            
           <Route element={
              <Suspense fallback={null}>
                <ProfilePage />
              </Suspense>
            }
            path={paths.profile}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router
