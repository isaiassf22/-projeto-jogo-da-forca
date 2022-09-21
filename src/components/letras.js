export default function Letters(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const renderAlfabeto=alfabeto.map((n)=> <button>{n}</button>)
    return(
        <div className="botoes">
            {renderAlfabeto}
        </div>
    )
}