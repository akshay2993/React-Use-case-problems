import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './styles.css'


const ImageSlider = ({ url, limit }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const getImages = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}?limit=${limit}`)
            const data = await response.json()

            console.log(data)
            data && setImages(data)
            setLoading(false)

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)

        }
    }

    const moveLeft = () => {
        setCurrentSlide(currentSlide === 0 ? limit - 1 : currentSlide - 1)
    }

    const moveRight = () => {
        setCurrentSlide(currentSlide === limit - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== '') getImages(url)
    }, [url])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (errorMsg) {
        return <div>`Error Occured : ${errorMsg}`</div>
    }

    return (
        <div className="wrapper">
            <button className="arrow arrow-left" onClick={moveLeft}><FaAngleLeft /></button>
            {images && images.length ?
                images.map((image) => {
                    return <img
                        key={image.id}
                        className={image.id == currentSlide ? 'active' : 'inactive'}
                        src={image.download_url} />
                }): null}
            <button className="arrow arrow-right" onClick={moveRight}><FaAngleRight /></button>
            <div className="dots-nav-wrapper">
                {images.map((image) => {
                    return <div key={image.id} onClick={() => {setCurrentSlide(Number(image.id))}} className={`dot-indicator ${currentSlide == image.id ? 'active' : 'inactive'}`}></div>
                })}
            </div>

        </div>
    )
}

export default ImageSlider
