import { getCharacters } from "@/app/characters/modules/infrastructure/rest-api/index.rest-api.repository"

const useCharactersPage = async () => {
    const characters = await getCharacters()    

    return {characters}
}

export {
    useCharactersPage
}