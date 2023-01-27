const heroes = [
    {
        name: 'Slabrock',
        type: 'dwarf',
        image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
        damage: 7,
        health: 100,
    },
    {
        name: 'Ironstag',
        type: 'mage',
        image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
        damage: 10,
        health: 65,
    }
]


const boss = {
    health: 1000,
    maxHealth: 1000,
    damage: 5,
    level: 1
}

let backpack = {
    gold: 10,
    potions: 0
}

let healthPercentage = 0


function attackBoss(){

    let heroDamageTotal = 0
    
    heroes.forEach(p => {
        heroDamageTotal += p.damage
    })
    
    let bossHealth = boss.health -= heroDamageTotal
    // debugger
    if (boss.health <= 0) {
        boss.health = boss.maxHealth += 125
        backpack.gold += 20

        heroes.forEach(hero => {
        hero.damage += 5
        hero.health += 10
    })
    console.log(backpack)
    
    }
    healthPercentage = (boss.health/boss.maxHealth)*100
    drawHealthBar()
}

    // let bossHealth = boss.find(boss => boss.health == health)
    


function drawHeroes(){
    let hero = document.getElementById('heroes')

    template = ''

    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        template += `<div class="col-2 border border-success text-light">
        <div class="d-flex justify-content-evenly align-items-center ">
            <h4>${hero.name}</h4>
            <img class="img-fluid hero-1"
                src="${heroes.image}" alt=""
                >
        </div>
        <div class="text-center">
            <h4>HP:${hero.health}</h4>
            <h4>${hero.type}</h4>
        </div>
    </div>`
    }
    hero.innerHTML = template
}


// function drawShop(){}


function drawHealthBar(){

let healthBarElem = document.getElementById("health-bar")    
let template = ''


    template += `
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-danger" style="width:${healthPercentage}%"></div>
                            </div>
    `


healthBarElem.innerHTML = template

}


// function buyPotion(){}
// function buyHeroOne(){}
// function buyHeroTwo(){}
// function youLost(){}


drawHeroes()