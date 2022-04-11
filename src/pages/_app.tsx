import { AppProps } from 'next/app'
import {Header} from '../components/Header'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'


const initialOptions = {
  'client-id': 'AbUb5H570aNACwORXYm3g96e0yLz1ku5uXKURDdnZyG-uL78NRm8SF6pW4fzu1U1zHNENUM58y1XEiIr',
  currency: 'BRL',
  intent: 'capture'
}



function MyApp({ Component, pageProps }: AppProps ) {
  return(
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
        
    </NextAuthProvider>

  )
}

export default MyApp
