import Image from "next/image"
import "./character-list.css"
import Link from "next/link"
import { Character } from "@/app/characters/modules/domain/entities/character.model"
import Counter from "../../counter-page/components/counterPage"

const CharacterList = ({characters}: {characters: Array<Character>}) => {

    return (
        <section className="characters-list">
            {/* Receptor datos Counter */}
            <Counter/>
            <ul className="charaters">
                {characters.map(character => {
                    return (
                        <li className="character" key={character.id}>
                            <Link href={`/personajes/${character.id}`}>
                            <div className="character-card">
                                <Image 
                                    className="character-card__image"
                                    alt={character.name}
                                    src={character.images.md} 
                                    width={320}
                                    height={480}
                                />
                                <label className="character-card__name">{character.name}</label>
                            </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section >
    )
}

export default CharacterList