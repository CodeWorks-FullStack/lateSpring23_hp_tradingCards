import { appState } from "../AppState.js"
import { charactersService } from "../Services/CharactersService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function drawCharacters() {
  console.log('🧙‍♂️ this is from the draw....', appState.characters)

  let template = ''

  appState.characters.forEach(c =>{
    template += c.CardTemplate
  })


  setHTML('characters', template)

}


export class CharactersController {

  constructor() {
    console.log('🥋 they are fighting.... 🌩️')
    appState.on('characters', drawCharacters)

    this.goGetMyCharactersFromTheOtherComputerMachine()
    // drawCharacters()
  }


  async goGetMyCharactersFromTheOtherComputerMachine() {
    try {
     await charactersService.goGetTheCharactersFromTheOtherMachinePlease()
    } catch (error) {
      Pop.error(error)
    }
  }



}