import React, { useState, useEffect } from "react";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Login_Signup from "./Components/Login_Signup/Login_Signup";
import { RouterProvider } from "react-router-dom";
import { Holidays } from "./Components/Holidays/Holidays";
import ViewHoliday from "./Components/Holidays/ViewHoliday/ViewHoliday";
import AddHoliday from "./Components/Holidays/AddHoliday/AddHoliday";
import EmployeeSignup from "./Components/Login_Signup/EmployeeSignup";
import CalculateIncentive from "./Components/Holidays/CalculateIncentive/CalculateIncentive";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: 'login',
        element: <Login_Signup />
      },
      {
        path:'employeeLogin',
        element: <EmployeeSignup/>
      },
      {
        path: 'holidays',
        element: <Holidays />,
        children: [{
          path: 'viewHoliday',
          element: <ViewHoliday />
        },
        {
          path: 'addHoliday',
          element: <AddHoliday />
        },
        {
          path: 'calculate',
          element: <CalculateIncentive/>
        }
        ]

      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)


