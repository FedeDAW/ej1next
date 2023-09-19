
import CharacterList from '../../character-list/components/character-list';
import { useCharactersPage } from '../hooks/useCharactersPage';
import { useCounter } from '../hooks/useCounter';

export default async function CharactersPage() {
    const {characters} = await useCharactersPage();
    const { count, increment } = useCounter();
    
    return (
        <main>
            <div>
                Lista de personajes
                <p>You clicked {count} times</p>
                <button onClick={increment}>
                    Click me
                </button>
                <CharacterList characters={characters}/>
            </div>
        </main>
    )
}