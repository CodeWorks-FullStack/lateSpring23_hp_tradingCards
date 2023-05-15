import { appState } from "../AppState.js"
import { Character } from "../Models/Character.js"
import { hpApi } from "./AxiosService.js"

class CharactersService {
  async goGetTheCharactersFromTheOtherMachinePlease() {
    // YOU DO THIS PRETTY MUCH THE SAME WAY ALL THE DAYS....
    const response = await hpApi.get('/api/characters')
    console.log(response.data)
    // ['🐟', '🐠', '🐡', '🦈'].map(f => new Sushi(f))
    // ['🍣', '🍣', '🍣', '🍣']
    appState.characters = response.data.map(c => new Character(c))


  }

}



export const charactersService = new CharactersService()