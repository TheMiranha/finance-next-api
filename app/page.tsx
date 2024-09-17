import dynamic from "next/dynamic";

const Page = dynamic(() => import('./csr').then(e => e.CSR), {
  ssr: false
})

export default function App() {
  return (
    <Page />
  )
}