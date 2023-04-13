import type { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/style.css'
import Leyout from '@/components/Leyout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="l-wrap">
      <div className="l-container">
        <div className="l-inner">
          <Leyout>
            <Component {...pageProps} />
          </Leyout>
        </div>
      </div>
    </div>
  )
}
