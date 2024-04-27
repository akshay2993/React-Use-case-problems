import { useEffect, useState } from "react"
import './style.css'

const ScrollIindicator = ({ url }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [scrollPercent, setScrollPercent] = useState(0)

  const fetchData = async (url) => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data.products)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setErrorMsg(error.message)
      setLoading(false)
    }
  }


  const calculateScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
    const percentage = ((scrolled/height)*100)
    console.log(percentage)
    setScrollPercent(percentage)
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercentage)
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if(errorMsg) {
    return <h2>{errorMsg}</h2>
  }

  return (
    <div className="scroll-main-wrapper">
      <div className="scroll-indicator-wrapper">
        <h1>Scroll Indicator</h1>
        <div style={{width:`${scrollPercent}%`}} className="scoll-indicator"></div>
      </div>
      <div style={{ marginTop: '160px'}}>
        {products && products.length ?
          products.map((item) => <p key={item.id}>{item.title}</p>)
          : null
        }
      </div>
    </div>
  )
}

export default ScrollIindicator
