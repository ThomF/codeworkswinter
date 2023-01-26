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

let healthPercentage = 0


function attackBoss(){

    let heroDamageTotal = 0
    
    heroes.forEach(p => {
        heroDamageTotal += p.damage
    })
    
    let bossHealth = boss.health -= heroDamageTotal
    // debugger
    if (boss.health <= 0) {
       boss.health = boss.maxHealth += 35
    }

    healthPercentage = (boss.health/boss.maxHealth)*100
    console.log('[Boss health]', boss.health, '[MAX HEALTH]', boss.maxHealth, '[Health percentage]', healthPercentage)
    drawHealthBar()
    
   }

    // let bossHealth = boss.find(boss => boss.health == health)
    


function drawHeroes(){}
function drawShop(){}


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


function buyPotion(){}
function buyHeroOne(){}
function buyHeroTwo(){}
function youLost(){}
