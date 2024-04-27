import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGen = () => {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')

  const handleQrCodeGenerate = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div >
      <p>Qr Code Generator</p>
      <div>
        <input type="text" value={input} placeholder='Enter a name' onChange={e => setInput(e.target.value)} />
        <button disabled={input == ''} onClick={handleQrCodeGenerate}>Generate</button>
      </div>
      <QRCode value={qrCode} />
    </div>
  )
}

export default QrCodeGen
