import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode, setQrcode]=useState('')
    const [input, setIput]=useState('')
    function handleGenetateQRcode(){
        setQrcode(input)
        setIput('')
    }
  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input
         type="text" 
         name="qr-code" 
         value={input}
         placeholder="Enter your value here" 
         onChange={(e)=>setIput(e.target.value)}
         />
        <button disabled={input && input.trim() !==""? false : true} onClick={handleGenetateQRcode}>Generate</button>
      </div>
      
      <div>
        <QRCode 
        id="qr-code-value"
        value={qrCode}
        size={400}
        bgColor="white"
        />
      </div>
    </div>
  );
}
