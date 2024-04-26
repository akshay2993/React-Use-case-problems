import { useEffect, useState } from "react"
import './styles.css'

const LoadMoreComponent = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
        clickCount === 0 ? 0 : clickCount * 10}`)
      const data = await response.json()
      console.log('data',data)
      if(data && data.products && data.products.length>0) {
        setProducts((prev) => [...prev, ...data.products])
        // setProducts(data.products)

        setLoading(false)
        // console.log('products',products)
      }
    } catch (error) {
      console.log(`Error occured: ${error.message}`)
      setLoading(false)
    }
  }

  // useEffect(() => {
  //   fetchData()
  
  // }, [])
  
  useEffect(() => {
    fetchData()
    console.log('products',products)
      if(products.length == 100) setDisableButton(true)

  }, [clickCount])

  
  // useEffect(() => {
  //   // fetchData()  
  //   products && products.length == 100 ? setDisableButton(true) : null
  // }, [products])

  if (loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <div className="wrapper">
        {products && products.length ? products.map((product) => {
          return <div className="card" key={product.id}>
            <img src={product.thumbnail} />
            <p>{product.brand}</p>
            <p>{product.title}</p>
          </div>
        }) : <h3>No products to show.</h3>}
      </div>

      <button
        style={{ marginTop: '20px' }}
        disabled={disableButton}
        onClick={() => setClickCount(clickCount + 1)}
      >Load More</button >

      {disableButton ? <p>You have reached end of products list.</p>: null} 
    </>
  )
}

export default LoadMoreComponent
