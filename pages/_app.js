import '../styles/globals.css'
import reducer, { initialState } from "../utils/reducer"

import { StateProvider } from '../utils/StoreProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </>
  )
}

export default MyApp
