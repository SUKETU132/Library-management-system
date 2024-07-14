import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Signup/Signup.jsx';
import FirstPage from './Pages/FirstPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />}>
        <Route index element={<FirstPage />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);