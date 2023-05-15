export class Character {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.alive = data.alive
    this.image = data.image || 'https://cdn.dribbble.com/users/1832496/screenshots/3723665/walkloop.gif'
    this.wizard = data.wizard
  }


  get CardTemplate() {
    return /*html*/`
      <div class="col-md-4 col-lg-3 my-3"> 
        <div class="card ${this.alive ? '' : 'dead'} ">
          <img class="character-image rounded-top" src="${this.image}" alt="${this.name}">
          <div class="card-body">
            <p class="d-flex justify-content-between align-items-baseline">
              <b>${this.name}</b>
              <b>${this.wizard ? '🪄' : '🥔'}</b>
            </p>
          </div>
        </div>
      </div>
    `
  }



}