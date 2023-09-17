
import CharacterList from '../../character-list/components/character-list';
import { useCharactersPage } from '../hooks/useCharactersPage';

export default async function CharactersPage() {
    const {characters} = await useCharactersPage()
        
    return (
        <main >
            <div>
                Lista de personajes
                <CharacterList characters={characters}/>
            </div>
        </main>
    )
}