 
//#5a598f27
//rgb(186, 195, 206)

import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor]=useState('hex');
    const [color, setColor]=useState('#000000');
    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

     function handleCreateRandomHexColor() {
         const hex=[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
         let hexColor='#';
         for(let i=0; i<6; i++){
             hexColor += hex[randomColorUtility(hex.length)];
         }
            setColor(hexColor); 

    }
    function handleCreateRandomRgbColor(){
        const r=randomColorUtility(256)
        const g= randomColorUtility(256)
        const b= randomColorUtility(256)

        const rgbcolor =`rgb(${r},${g},${b})`
        console.log(rgbcolor)
        setColor(rgbcolor)
    }

return <div style={
    {
        width: "100vw",
        height: '100vh',
        background: color
    }
}>
    <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
    <button onClick={()=>setTypeOfColor('rgb')}>Create RBG Color</button>
    <button onClick={typeOfColor=== 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate random color</button>
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
        }
    }>
        <h3>{typeOfColor==="rgb" ? "RGB COLOR":"HEX COLOR"}</h3>
        <h1>{color}</h1>

    </div>
</div>
}