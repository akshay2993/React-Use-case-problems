import { useEffect, useState } from "react"
import './style.css'

const RandomBgColor = () => {
    const [bgColor, setBgColor] = useState('white')
    const [colorType, setColorType] = useState('')

    const randomUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const generateHexColor = () => {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hexArray[randomUtility(hexArray.length)]
        }
        console.log(hexColor)
        setBgColor(hexColor)
        setColorType('hex')
    }

    const generateRgbColor = () => {
        let r, g, b = ''
        r = randomUtility(255)
        g = randomUtility(255)
        b = randomUtility(255)

        console.log(`rgb(${r},${g},${b})`)

        setColorType('rgb')
        setBgColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
    }, [colorType])

    return (
        <div className="container" style={{ backgroundColor: bgColor }}>
            <div className="btn-container">
                <button onClick={generateRgbColor} >Rgb Color</button>
                <button onClick={generateHexColor} >Hex Color</button> <br />

            </div>
            <button onClick={colorType === 'rgb' ? generateRgbColor : generateHexColor}>Get Random Color</button>
            <div style={{
                marginTop: '50px',
                fontSize: '45px',
                fontWeight: 'bold'
            }}>{colorType === 'rgb' ? `${bgColor}` : `Hex ${bgColor}`}</div>
        </div>
    )
}

export default RandomBgColor
