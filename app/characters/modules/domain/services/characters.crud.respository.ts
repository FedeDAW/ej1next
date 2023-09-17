import { Character } from "../entities/character.model";

export interface CharactersService {
    getCharacters: () => Promise<Array<Character>>
}