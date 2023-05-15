import { Character } from "./Models/Character.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Character.js').Character[]} */
  characters = [
    new Character({
      "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
      "name": "Harry Potter",
      "alternate_names": [
        "The Boy Who Lived",
        "The Chosen One"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "31-07-1980",
      "yearOfBirth": 1980,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "black",
      "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
      },
      "patronus": "stag",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Daniel Radcliffe",
      "alternate_actors": [],
      "alive": true,
      "image": "https://ik.imagekit.io/hpapi/harry.jpg"
    }),
    new Character({
      "id": "3db6dc51-b461-4fa4-a6e4-b1ff352221c5",
      "name": "Neville Longbottom",
      "alternate_names": [],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "30-07-1980",
      "yearOfBirth": 1980,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "",
      "hairColour": "blonde",
      "wand": {
        "wood": "cherry",
        "core": "unicorn tail-hair",
        "length": 13
      },
      "patronus": "Non-Corporeal",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Matthew Lewis",
      "alternate_actors": [],
      "alive": true,
      "image": "https://ik.imagekit.io/hpapi/neville.jpg"
    })
  ]




}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
