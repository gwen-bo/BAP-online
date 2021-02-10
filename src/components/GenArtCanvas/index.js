import React from "react";
import Sketch from "react-p5";
import { Vector } from 'p5';
import ParticleModel from "../../models/ParticleModel";
import { useStores } from "../../hooks/useStore";
import styles from "./GenArtCanvas.module.css";

const GenArtCanvas = () => {
    const {userStore} = useStores();

    let inc = 0.02;
    let scl = 20;
    let cols;
    let rows;
    let zoff = 0;

    let particles = [];

    //moet evenveel spots hebben als er rijen en kolommen zijn
    let flowfield;

    let setup = async (p5, canvasParentRef) => {
        //canvasgrootte hier bepalen - responsive opbouwen a.d.h.v. switch case
        // max width werken (anders bij min. blijft het altijd true) - laatste en grootste mag wel gerust min widt zijn
        let mqlMedium = window.matchMedia('(max-width: 768px)');
        let mqlLarge = window.matchMedia('(max-width: 1200px)');
        // let mqlLarger = window.matchMedia('(min-width: 1200px)');

        if(mqlMedium.matches || window.innerWidth === 768){
            p5.createCanvas(350, 350).parent(canvasParentRef);
        }else if(mqlLarge.matches){
            p5.createCanvas(600, 600).parent(canvasParentRef);
        }else {
            p5.createCanvas(750, 750).parent(canvasParentRef);
        }


        //Canvas centreren
        //let xyz = p5.createCanvas(1000, 1000).parent(canvasParentRef);
        //let x = (p5.windowWidth - p5.width) / 2;
        //let y = (p5.windowHeight - p5.height) / 2;
        //xyz.position(x, y);

        //Omzetten van pixels van retina scherm naar default van 1
        //p5.pixelDensity(1);

        cols = p5.floor(p5.width / scl);
        rows = p5.floor(p5.height / scl);

        flowfield = new Array(cols * rows);

        let visitors = await userStore.loadUsersForGenArt();
        let amount = visitors.length;
        
        for (let i = 0; i < amount; i++) {
            particles[i] = new ParticleModel(p5);
        }
        p5.background(0);
    };


    let draw = (p5) => {


        let yoff = 0;


        for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
                // -- dit was voor pixels!
                //let index = (x + y * p5.width) * 4;

                // -- dit is voor ons grid!
                let index = x + y * cols;

                // berekening van de vectoren (de "maal 4 op het einde zorgt ervoor dat de particles niet gewoon naar links uit het scherm bewegen, maar in alle richtingen kunnen gaan")
                const angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI * 4;
                const v = Vector.fromAngle(angle);
                v.setMag(0.5);

                //alle vectoren die berekend worden, worden opgeslaan in de array van flowfield!! (Belangrijk om te weten)
                flowfield[index] = v;

                xoff += inc;

                p5.stroke(0, 50);
                p5.strokeWeight(1);

                // -- dit zijn de vectorlijntjes die er normaal achter stonden!
                // p5.push();
                // p5.translate(x * scl, y * scl);
                // p5.rotate(v.heading());
                // p5.line(0, 0, scl, 0);
                // p5.pop();
            }

            yoff += inc;
            zoff += 0.0001;
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield, scl, cols);
            particles[i].update();
            particles[i].show();
            particles[i].edges();
        }

    };
    //weergave van de parameters via Sketch component uit react-p5 library
    return(
        
                <div className={styles.canvas}>
                    <Sketch setup={setup} draw={draw} className={styles.art} />
                </div>
        
    )
};

export default GenArtCanvas;