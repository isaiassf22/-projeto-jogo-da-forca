import "./style.css"
import react from "react"
import { palavraEscolhida } from "./palavras"

export default function Chutar(){
    const [keyWord,setKeyWord]=react.useState("")
    
    function Check(){
        console.log(palavraEscolhida)
        console.log(keyWord)
      
        setKeyWord("")
        
    
        if(keyWord===palavraEscolhida){
            console.log('oi')
        }
        
    }
    return(
        <div className="chute">
            <p>já sei a palavra</p>
            <input placeholder="digite a palavra" value={keyWord} onChange={e=> setKeyWord(e.target.value)} />
            <button onClick={Check}>chutar</button>
        </div>
    )
}