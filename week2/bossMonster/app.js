const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}


function attackBoss(){

    let heroDamageTotal = 0
    
    heroes.forEach(p => {
        heroDamageTotal += p.damage
    })
    
    let bossHealth = boss.health -= heroDamageTotal
    
    if (bossHealth <= 0) {
        bossHealth += 100
    }
    console.log(bossHealth)
    
   }

    // let bossHealth = boss.find(boss => boss.health == health)
    


function drawHeroes(){}
function drawShop(){}


function drawHealthBar(){

let healthBarElem = document.getElementById("health-bar")    
let template = ''

}


function buyPotion(){}
function buyHeroOne(){}
function buyHeroTwo(){}
function youLost(){}
