const heroes = [
    {
        name: 'Slabrock',
        type: 'dwarf',
        damage: 7,
        health: 100,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8976d5d-0e1b-4ad2-bb35-823d462c0ad5/d89skuo-8a4ea3fe-4e35-4cfe-b96f-550a4f20c767.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4OTc2ZDVkLTBlMWItNGFkMi1iYjM1LTgyM2Q0NjJjMGFkNVwvZDg5c2t1by04YTRlYTNmZS00ZTM1LTRjZmUtYjk2Zi01NTBhNGYyMGM3NjcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Nmst0Vlbk3q6C_pIEk_JLqRoImDJGo2OlQQtie1WQuw'
    },
    {
        name: 'Ironstag',
        type: 'mage',
        damage: 10,
        health: 65,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016fc6fa-c326-4d87-9a5f-fd9d307155c2/d8gn0g9-27bff5aa-b311-4ed4-968e-0702e19a2b4f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmZjNmZhLWMzMjYtNGQ4Ny05YTVmLWZkOWQzMDcxNTVjMlwvZDhnbjBnOS0yN2JmZjVhYS1iMzExLTRlZDQtOTY4ZS0wNzAyZTE5YTJiNGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iv8vaWksaqZoqvn0ZFe1qoM-6SpYaPH0DpgQRnRjOxc'
    },
    {
        name: 'Grebble',
        type: 'goblin',
        damage: 2,
        health: 25,
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f6f528b-9c63-4fe8-9626-aafa748edaf5/d7rhwsi-5a8b5cf7-a724-4a53-91a6-f72cd339e25b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNmY1MjhiLTljNjMtNGZlOC05NjI2LWFhZmE3NDhlZGFmNVwvZDdyaHdzaS01YThiNWNmNy1hNzI0LTRhNTMtOTFhNi1mNzJjZDMzOWUyNWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jfkwQJoANvTMZvYy3XUcV-hajQeG9ArAGUjc5BOcWxc'
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
        boss.health = boss.maxHealth += 500
        backpack.gold += 20

        heroes.forEach(hero => {
        hero.damage += .5
        hero.health += 10
    })
    console.log(backpack)
    console.log(boss.health)
    
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
        template += `<div class="col-2  text-light">
        <div class="d-flex justify-content-evenly align-items-center ">
            <h4>${hero.name}</h4>
            <img class="img-fluid hero-1"
                src=${hero.image} alt=""
                >
        </div>
        <div class="text-center">
            <h4 id="hero-health">HP:${hero.health}</h4>
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

function goldUp(){
    let goldCount = document.getElementById('gold')
    goldCount.innerText = backpack.gold += 2
}
function heroDamage(){
    heroes.forEach(damage => {
        damage.health -= 3

        if(damage.health < 0){
            damage.health = 0
        }
    })

    drawHeroes()
}

// function buyPotion(){}
// function buyHeroOne(){}
// function buyHeroTwo(){}
// function youLost(){}

setInterval(goldUp, 2000)
setInterval(heroDamage, 3000)
drawHeroes()