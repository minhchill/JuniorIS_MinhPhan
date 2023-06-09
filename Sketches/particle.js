class Particle extends VerletParticle2D {
  constructor(x, y) {
    super(x, y)
  }
  
  draw() {
    fill(this.isLocked ? 128 : 255)
    ellipse(this.x, this.y, 8)
  }
}

// class Particle extends VerletParticle2D {
//   constructor(x, y) {
//     super(x, y)
//   }
  
//   draw() {
//     if (this.isLocked) {
//       push()
//       ambientLight(255)
//       fill(100)
//       strokeWeight(1)
//       stroke(80)
//       circle(this.x, this.y, 12)
//       pop()
//     }
//   }
// }