const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

  //SECTION functions

function drawNames(array){
    let nameElement = document.getElementById('name')
    let names = ''
    console.log('Draw names');
    array.forEach(package => {
        names += `
            <div class="row white-border mb-3">
                <div class="col-3 fs-1 green-text">TO: </div>
                <div class="col-3 fs-1 green-text">${package.to}</div>
                <div class="col-3 fs-1 green-text">ID: </div>
                <div class="col-3 fs-1 green-text">${package.trackingNumber}</div>
            </div>`
    })
    nameElement.innerHTML = names
}

// SECTION BUTTON

function filterHeavy(){
    const heavyBox = packages.filter(package => package.weight > 5)
    const heavyBoxId = packages.filter(package => packages.trackingNumber)
    console.log(heavyBox)
    drawNames(heavyBox)
    drawTracking(heavyBoxId)
}
function filterFragile(){
    const fragileBox = packages.filter(package => package.weight < 5)
    const fragileBoxId = packages.filter(package => packages.trackingNumber)
    console.log(fragileBox)
    drawNames(fragileBox)
    drawTracking(fragileBoxId)
}
function filterPriority(){
    let priority = window.prompt('Filter by Priority! | Express | Standard | Free |')
    const priorityBox = packages.find(package => package.priorityLevel)
}

drawNames(packages)
