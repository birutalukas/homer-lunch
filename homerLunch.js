"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const timeToEat = () => {
    return new Promise((resolve, reject) => {

        rl.question('How much minutes Homer has for lunch? ', (answerTimeTotal) => {
            let lunchTime = `${answerTimeTotal}`;

            if (`${answerTimeTotal}` < 60) {
                console.log('Ok, we have to hurry up!');
            } else {
                console.log('Sounds good, take it easy!');
            }

            rl.question('How long he needs to eat a Cheesburger in minutes? ', (timePerCheese) => {
                let cheesburgerTime, cheesburgerSum;
                cheesburgerTime = cheesburgerSum = `${timePerCheese}`;    
                
                if (`${timePerCheese}` < 3) {
                    console.log('Wow!!! ' + cheesburgerTime + ' mins is fast... What the appetite. :o');
                } else {
                    console.log('Yeah! He likes to enjoy the food.');
                }

                rl.question('Is he fast on eating Hamburgers? How much minutes? ', (timePerHam) => {
                    let hamburgerTime, hamburgerSum;
                    hamburgerTime = hamburgerSum = `${timePerHam}`;

                    if (`${timePerHam}` < 5) {
                        console.log('Whoah, the whole Hamburger in ' + hamburgerTime + ' minutes ?');
                    } else {
                        console.log('Meat needs to be well chewed...')
                    }

                    console.log("")

                    rl.question("Ok! I will take care of him if You type 'YES'", (order) => {
                        if(`${order}` === 'YES') {
                            let totalCheesburgers = Math.floor(lunchTime / cheesburgerTime);
                            let totalHamburgers = Math.floor(lunchTime / hamburgerTime);
                    
                            for (cheesburgerSum; cheesburgerSum <= lunchTime; cheesburgerSum += cheesburgerTime ) {
                                for (hamburgerSum; hamburgerSum <= lunchTime; hamburgerSum += hamburgerTime ) {
                                    // Countint Food Items to Eat MAX
                                }
                            }
                            console.log("In " + lunchTime + " minutes Homer can eat maximum " + totalCheesburgers + " cheesburgers or " + totalHamburgers + " hamburgers");
                        } else {
                            console.log("Thanks! See You later!");
                            rl.close();
                        }
                    });
                });
            });
        });
    });
};

timeToEat();