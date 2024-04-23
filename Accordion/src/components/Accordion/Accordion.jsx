import { useState } from 'react'
import data from './data'

const Accordion = () => {
    const [multiple, setMultiple] = useState([])
    const [singleSelected, setSingleSelected] = useState(null)
    const [multipleSelectEnabled, setMultipleSelectEnabled] = useState(false)

    const handleSingleSelect = (id) => {
        singleSelected === id ? setSingleSelected(null) : setSingleSelected(id)
    }

    const handleMultipleSelect = (id) => {
        let multipleCopy = [...multiple]

        let indexOfCurrentId = multipleCopy.indexOf(id)

        indexOfCurrentId === -1 ? multipleCopy.push(id) : multipleCopy.splice(indexOfCurrentId, 1)
        setMultiple(multipleCopy)
    }

    return (
        <div className='wrapper'>
        <button onClick={() => {setMultipleSelectEnabled((prev) => !prev)}}>Enable multiple Select</button>
            { data && data.length > 0 ?
                 data.map((dataItem) => {
                return (
                    <div key={dataItem.id} className='accordion'>
                        <div onClick={() => multipleSelectEnabled ? handleMultipleSelect(dataItem.id) : handleSingleSelect(dataItem.id)} className='question'>
                            <h2>{dataItem.question}</h2>
                            <span>+</span>
                        </div>
                        {multipleSelectEnabled ? 
                            multiple.includes(dataItem.id) &&
                            <div className='answer'>
                                <p>{dataItem.answer}</p>
                            </div> :
                            singleSelected == dataItem.id &&
                            <div className='answer'>
                                <p>{dataItem.answer}</p>
                            </div>
                        }
                    </div>
                )
            }) : null }

        </div>
    )
}

export default Accordion
