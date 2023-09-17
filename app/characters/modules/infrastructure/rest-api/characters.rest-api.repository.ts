import { CharactersService } from "../../domain/services/characters.crud.respository"

const getCharacters = async () => {
    try{
        const response = await fetch("https://akabab.github.io/superhero-api/api/all.json")
        const characters = await response.json()
        return characters
    }catch(error){
        throw error
    }
}

export const characteresApiRepository: CharactersService = {
    getCharacters
}