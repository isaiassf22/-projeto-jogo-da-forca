
import { alfabeto } from "./letras";
import { semAcento } from "./palavras";
import forc0 from "./img/forca0.png"
import forc1 from "./img/forca1.png"
import forc2 from "./img/forca2.png"
import forc3 from "./img/forca3.png"
import forc4 from "./img/forca4.png"
import forc5 from "./img/forca5.png"
import forc6 from "./img/forca6.png"
import React from "react";
import GlobalStyle from "./style/globalStyle";
import styled from "styled-components";

let correct = 0
let factor = ''
let wrong = 0


export default function Jogar() {


    //apertar o escolher palavra para liberar o jogo
    const [selected, setSelected] = React.useState(false)


    //selecionar as fotos de acordo com os erros
    const [photos, setPhotos] = React.useState(forc0)
    //verificar numero de erros
    const [erro, setErro] = React.useState(0)

    const [perdeu, setPerdeu] = React.useState(false)

    const [ganhou, setGanhou] = React.useState(false)

    const [desabilitaInput, setDesabilitaInput] = React.useState(true)

    const [desabilitaTeclado, setDesabilitaTeclado] = React.useState(alfabeto)

    const [caracteres, setArrayPalavra] = React.useState([])
    const [palavraEscolhida, setPalavraEscolhida] = React.useState()

    const [selectLetters, setSelectLetters] = React.useState([])
    
    const [result,setResult]=React.useState("letra")

    function Palavras() {

        setSelected(true)
        setDesabilitaInput(false)
        setDesabilitaTeclado([])
        const palavra = semAcento[Math.floor(Math.random() * (semAcento.length - 1))]
        setPalavraEscolhida(palavra)
        console.log(palavra)
        const arrayP = palavra.split('')
        console.log(arrayP)
        setArrayPalavra(arrayP)

    }

    function tryAgain() {
        setArrayPalavra([])
        setSelectLetters([])
        setErro(0)
        setPhotos(forc0)
        Palavras()
        correct = 0
        wrong=0
    }


    function Letters() {
        function letter(props) {
            factor = props
            console.log(factor)
            setSelectLetters([...selectLetters, factor])
            setDesabilitaTeclado([...desabilitaTeclado, factor])
            let incidence = caracteres.filter(function fill(el) { if (el === factor) { return factor } })
            if (caracteres.includes(factor)) {
                correct += incidence.length
                incidence.map(() => console.log(`achei um ${factor}`))

                console.log(correct)


            }

            if (caracteres.includes(factor) === false) {
                setErro(erro + 1)
                wrong += 1
                const listImg = [forc1, forc2, forc3, forc4, forc5, forc6]
                setPhotos(listImg[erro])
                console.log(`esta no ${wrong} erro`)

            }





            validation()

        }

        function validation() {
            console.log(`acertei ${correct} vezes`)

            if (correct === caracteres.length) {
                setGanhou(true)
                setTimeout(() => alert('voce ganhou!!'), 1000)
                setTimeout(() => window.location.reload(), 3000)
                setResult("ganhou")
                setDesabilitaTeclado(alfabeto)
            }






        }
        if ((erro) === 6) {
            setPerdeu(true)
            setTimeout(() => alert('voce perdeu!!'), 1000)
            setTimeout(() => window.location.reload(), 3000)
            setResult("perdeu")
            setDesabilitaTeclado(alfabeto)
        }
        return (
            <Botoes>
                {alfabeto.map((n) => <button key={n} onClick={() => letter(n)} disabled={desabilitaTeclado.includes(n)} >{n}</button>)}
            </Botoes>

        )
    }

    function Chutar() {
        const [keyWord, setKeyWord] = React.useState("")

        function Check() {
            console.log(palavraEscolhida)
            console.log(keyWord)
            setKeyWord("")
            if (keyWord === palavraEscolhida) {
                setGanhou(true)
                setTimeout(() => alert('voce ganhou!!'), 1000)
                setTimeout(() => window.location.reload(), 3000)
                setResult("ganhou")
                setDesabilitaTeclado(alfabeto)
            } else {
                setPhotos(forc6)
                setPerdeu(true)
                setTimeout(() => alert('voce perdeu!!'), 1000)
                setTimeout(() => window.location.reload(), 3000)
                setResult("perdeu")
                setDesabilitaTeclado(alfabeto)
            }

        }
        return (
            <Chute>
                <p>já sei a palavra</p>
                <input disabled={desabilitaInput} placeholder="digite a palavra" value={keyWord} onChange={e => setKeyWord(e.target.value)} />
                <button onClick={Check}>chutar</button>
            </Chute>

        )
    }



    return (
        <>
            <GlobalStyle />

            <h1>Bem vindo ao jogo da forca</h1>
            <Main>
                <img src={photos} className="forca" alt="forca" />
                <Right_side>
                    <button onClick={selected ? tryAgain : Palavras} > Escolher palavra</button>
                    <Palavrax>
                        <div>
                            {ganhou || perdeu ? <p className={result}>{palavraEscolhida}</p>: caracteres.map((l, index) => <p className={result}  key={index}>{selectLetters.includes(l) ? l : '-'}</p>)}
                        </div>
                    </Palavrax>
                </Right_side>


            </Main>
            <Letters />
            <Chutar />
        </>
    )
}

const Botoes = styled.div`
    display: flex;
    max-width: 1000px;
    flex-wrap: wrap;
    button{
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: rgba(165, 158, 158, 0.253);
}
`
const Chute = styled.div`
    display: flex;
    max-width: 1000px;
    button{
    width: 80px;
    height: 50px;
    background-color: aqua;
    margin: auto 0 ;
    margin-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    }
    p{
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    }
    input{
    width: 350px;
    height: 35px;
    margin: auto 0;
    text-align: center;
    font-size: 16px;
    }

`
const Main = styled.div`
     display: flex;
    position: relative;
    background-color: aquamarine;
    button{
    width: 230px;
    height: 60px;
    font-size: 17px;
    background-color: rgb(89, 255, 47);
    color: #fff;
    border-radius: 5px;
    margin: 70px 100px;
}

`
const Right_side = styled.div`
    display: flex;
    flex-direction: column;
`
const Palavrax = styled.div`
    margin: auto 0;
    margin-left: 100px;
    display: flex;
    
    div{
    display: flex;
    
    
    }
   
    p.traco{
        width: 50px;
        height: 4px;
        background-color: black;
        border-radius: 3px;
        margin-right: 4px;
    }
    p.letra{
        margin-right: 4px;
        color: black;
        font-size: 60px;
        margin-left: 10px;
    }
    p.ganhou{
        margin-right: 4px;
        color: green;
        font-size: 60px;
        margin-left: 10px;
    }
    p.perdeu{
    margin-right: 4px;
    color: red;
    font-size: 60px;
    margin-left: 10px;
    }


`