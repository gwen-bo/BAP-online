import { Vector } from 'p5';

class ParticleModel {
    constructor(p5) {
        this.pos = new Vector(p5.random(p5.width), p5.random(p5.height));
        this.vel = new Vector(0, 0);
        this.acc = new Vector(0, 0);
        this.p5 = p5;
        this.maxspeed = 0.8;

        //om van de verschillende punten een meer vloeiende lijn te maken
        this.prevPos = this.pos.copy();
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    follow(vectors, scl, cols) {
        //eerst scalen van particles op het canvas om ze daarna volgens de vectoren in het flowfield (positie van alle vectoren) te laten bewegen
        let x = this.p5.floor(this.pos.x / scl);
        let y = this.p5.floor(this.pos.y / scl);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        this.p5.stroke(255, 30);
        this.p5.strokeWeight(1);
        //this.p5.point(this.pos.x, this.pos.y);
        //we willen geen punten tonen, maar eigenlijk een lijn
        this.p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);

        //om telkens terug naar de vorige positie te gaan telkens het opnieuw getekend/getoond wordt
        this.updatePrev();
    }

    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges() {
        if (this.pos.x > this.p5.width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = this.p5.width;
            this.updatePrev();
        }
        if (this.pos.y > this.p5.height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = this.p5.height;
            this.updatePrev();
        }

    }
}

export default ParticleModel;