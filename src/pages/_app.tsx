import React from 'react'
import '../assets/styles/style.css'
import { Provider } from "react-redux";
import { store } from "../store";
const MyApp = ({ Component, pageProps }) => {


  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
