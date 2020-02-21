class Cercle{
    constructor(rayon) {
      this.rayon = rayon  
    }

    perimetre() {
        return 2 * this.rayon * Math.PI
    }

    aire(){
        return Math.pow(this.rayon,2) * Math.PI
    }
}

var cercle = new Cercle(5)

console.log('Le perimetre est de ',cercle.perimetre())
console.log('La surface est de ',cercle.aire())