import '../styles/globals.css'
import Context from '../components/Context'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import '../styles/style.css'
import '../styles/grid-layout.css'





function MyApp({ Component, pageProps }) {
  const location = useRouter()

  return (
    <Context >
      <AnimatePresence exitBeforeEnter >
        <Component {...pageProps} key={location.route} location={location} />
      </AnimatePresence>
    </Context>
  )
}

export default MyApp
