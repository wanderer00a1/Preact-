
export default function Pokemon({pokeball = 151}){
    const Pokeurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeball}.png`
    return(
            <div className="Pokemon">
                <img src={Pokeurl} alt="" />
            </div>        
    )
}