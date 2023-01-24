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
        <div class="row white-border">
                <div class="col-3 fs-1 green-text">TO: </div>
                <div class="col-9 fs-2">${package.to}</div>
            </div>`
    })

    nameElement.innerHTML = names
}

function drawTracking(track){
    let idElement = document.getElementById('tracking')
    let trackingTemplate = ''

    packages.forEach(tracking => {
        trackingTemplate += `
        <div class="row white-border">
                <div class="col-3 fs-1 green-text">ID: </div>
                <div class="col-9 fs-2">${tracking.trackingNumber}</div>
            </div>`
    })
    
    idElement.innerHTML = trackingTemplate
}

function filterHeavy(){
    const heavyBox = packages.filter(package => package.weight > 5, packages.trackingNumber )
    console.log(heavyBox)
    drawNames(heavyBox)
    drawTracking(heavyBox)
}

drawNames(packages)
drawTracking(packages)