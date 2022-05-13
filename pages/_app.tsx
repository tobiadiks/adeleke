import '../assets/css/globals.css'
import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Component {...pageProps} />)
}

export default MyApp
