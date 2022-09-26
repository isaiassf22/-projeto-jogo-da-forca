
import "./style.css"
import { palavraEscolhida } from "./palavras"
import { caracteres } from "./palavras"
import { alfabeto } from "./letras";
import forc0 from "./img/forca0.png"
import forc1 from "./img/forca1.png"
import forc2 from "./img/forca2.png"
import forc3 from "./img/forca3.png"
import forc4 from "./img/forca4.png"
import forc5 from "./img/forca5.png"
import forc6 from "./img/forca6.png"
import React from "react";



export default function Jogar() {

    //apertar o escolher palavra para liberar o jogo
    const [selected, setSelected] = React.useState(false)
    function chooseWord() {
        setSelected(true)
    }
    //selecionar as fotos de acordo com os erros
    const [photos, setPhotos] = React.useState(forc0)
    let erro = 0




    function Palavras() {

        console.log(palavraEscolhida)

        let quantidadeDeLetras = palavraEscolhida.length
        const traco = <div className="traco"></div>
        let tracos = []
        console.log(caracteres)
        function numerTracos() {
            for (let i = 0; i < quantidadeDeLetras; i++) {
                tracos.push(traco)
            }

        }
        numerTracos()
        return (
            <>
                {tracos}
            </>
        )
    }

    function Letters(){
        let factor=''
        function letter (props){
            factor=props
            console.log(factor)
            for (let i=0;i<caracteres.length;i++){
                if(caracteres[i]===factor){
                    console.log(`achei um ${factor}`)
                    console.log(i)
                }
            }
            
            erro+=1
           
            switch (erro) {
                case erro = 1:
                    setPhotos(forc1)
                    break;
                case erro = 2:
                    setPhotos(forc2)
                    break;
                case erro = 3:
                    setPhotos(forc3)
                    break;
                case erro = 4:
                    setPhotos(forc4)
                    break;
                case erro = 5:
                    setPhotos(forc5)
                    break;
                case erro = 6:
                    setPhotos(forc6)
                    break;
                    default:
                        
            }
            console.log(`esta no ${erro} erro`)
        }
        const renderAlfabeto=alfabeto.map((n)=> <button onClick={()=>letter(n)}>{n}</button>)
        return(
            <div className="botoes">
                {renderAlfabeto}
            </div>
        )
    }

    function Chutar(){
        const [keyWord,setKeyWord]=React.useState("")
        
        function Check(){
            console.log(palavraEscolhida)
            console.log(keyWord)  
            setKeyWord("")    
            if(keyWord===palavraEscolhida){
               alert('acertou miseravi!!') 
            }else{
                erro=6
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



    return (
        <>
            <h1>Bem vindo ao jogo da forca</h1>
            <main>
                <img src={photos} className="forca" alt="forca" />
                <div className="right-side">
                    <button className="escolher" onClick={chooseWord} > Escolher palavra</button>
                    <div className="palavraX">
                        {selected ? Palavras() : ''}
                    </div>

                </div>

            </main>
            <Letters/>
            <Chutar/>
        </>
    )
}