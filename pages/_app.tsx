import { FoodList, Oburger, RedPeapers } from '@/Data/font';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${Oburger.variable} ${RedPeapers.variable} ${FoodList.variable}`}>
      <Component {...pageProps} />
    </main>
  ); 
}
