import Image from "next/image";
import Link from "next/link";

const fetchSingleCharacter = async (id: any) =>{
    const res = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`, {
        next: {revalidate: 60}
    });

    return( res.json() );
}

export default async function CharacterPage({params}: any){
    const { id } = params;
    const character = await fetchSingleCharacter(id);

    return (
            <div className="character-container">
                <Image 
                    className="character-card__image"
                    alt={character.name}
                    src={character.images.md} 
                    width={175}
                    height={200}
                />
                <ul className="infoCharacter" style={{ background:'#444'}}>
                    
                        <li>
                            <h2 className="nameCharacter">{character.name}</h2>
                        </li>
                        <li>
                            <h3>Estadisticas</h3>
                            <p>Inteligencia: {character.powerstats.intelligence}</p>
                            <p>Fuerza: {character.powerstats.strength}</p>
                            <p>Velocidad: {character.powerstats.speed}</p>
                            <p>Resistencia: {character.powerstats.durability}</p>
                            <p>Poder: {character.powerstats.power}</p>
                            <p>Combate: {character.powerstats.combat}</p>
                        </li>
                    
                </ul>
                <Link href={`/personajes`}><button>{'Lista de Personajes'}</button></Link>
            </div>
    );
}