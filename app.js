// SECTION ARRAY [AUTOMATION]

let automation_items = [
  {
    name: 'Basic Auto Miner',
    cost: 50,
    cost_starting: 50,
    automation: 3,
    buys: 1
  },
  {
    name: 'Advanced Auto Miner',
    cost: 200,
    automation: 5,
    buys: 1
  },
  {
    name: 'Industrial Auto Miner',
    cost: 500,
    automation: 10,
    buys: 1
  },
  {
    name: 'Titanic Auto Miner',
    cost: 1000,
    automation: 100,
    buys: 1
  }
]

// SECTION ARRAY [Items]

let manual_items = [
  {
    name: 'pickaxe',
    clicker_addition: 1,
    cost: 100,
    buys: `1`,
  },
  {
    name: 'drill',
    clicker_addition: 2,
    cost: 500,
    buys: '1',
  },
  {
    name: 'Driller Rover',
    clicker_addition: 5,
    cost: 1000,
    buys: '1',
  },
  {
    name: 'Mining Platform',
    clicker_addition: 25,
    cost: 10000,
    buys: '1',
  },
]

// SECTION VARIABLES

let resource_count = 10000000
let clicker_count = 1
let automation_clicks = 0

// SECTION SHOP COST

let number_times_bought = 1

let basic_auto_price = 50
let advanced_auto_price = 200
let industrial_auto_price = 500
let titanic_auto_price = 1000


// SECTION USER MANIPULATED DATA

function increase_click_count(){
  resource_count += clicker_count
  console.log(resource_count);
  draw_resource_clicks()
}

function buy_hand_drill(){
  clicker_count += 3
  console.log(clicker_count);
  draw_clicker_data()
}

// SECTION USER MANIPULATED DATA [AUTOMATED UPGRADES]



// function buy_basic_auto(){
//   console.log('attempting to buy basic auto');
//   if (resource_count >= (basic_auto_price * number_times_bought)) {
//     number_times_bought += 1
//     resource_count -= basic_auto_price * number_times_bought
//     automation_clicks += 3
//     // console.log('bought auto drill');
//     // console.log(basic_auto_price * number_times_bought);
//     draw_resource_clicks()
//     draw_automation_clicks()
//   } else {console.log('did not buy auto drill');}
// }

function buy_automation(automation_name){
  const purchased_automation = automation_items.find(a => a.name == automation_name)
  if (resource_count >= (purchased_automation.cost)) {
    resource_count -= purchased_automation.cost; 
    purchased_automation.cost = purchased_automation.cost_starting * purchased_automation.buys
    automation_clicks += purchased_automation.automation;
    purchased_automation.buys += 1;
    console.log(`bought ${purchased_automation.name}`);
    draw_resource_clicks()
    draw_automation_clicks()
    document.getElementById(`Basic Auto Miner`).innerText = `${purchased_automation.name} COST: ${purchased_automation?.cost}`
  } else {'Not enough RESOURCE'}
}


// SECTION AUTOMATED DATA [DRAW BOUND]

function draw_resource_clicks(){
let resource_elm = document.getElementById('resource-box')
// @ts-ignore
resource_elm.innerText = resource_count
}

function draw_clicker_data(){
  let clicker_elm = document.getElementById('clicker-count')
  // @ts-ignore
  clicker_elm.innerText = clicker_count
}

function draw_automation_clicks(){
  let automation_elm = document.getElementById('automation-clicks')
  // @ts-ignore
  automation_elm.innerText = `AUTOMATION AMOUNT ${automation_clicks}`
}

// SECTION SHOP FUNCTIONS

function draw_automation_p(automation_name){
 const purchased_automation = automation_items.find(a => a.name == automation_name)
 
}


// function draw_basic_auto_p(){
//   let basic_auto_elm = document.getElementById("basic-auto")
//   basic_auto_elm.innerText = `BASIC AUTO DRILLER: COST: ${basic_auto_price * (number_times_bought * number_times_bought)}`
// }
// SECTION AUTOMATED DATA [WHEN ACTIVATED]

function automated_mining(){
  resource_count += automation_clicks
  console.log('BEEP BOOP AUTOMATION RUNNING');
  draw_resource_clicks()
  draw_automation_p()
}

// SECTION AUTOMATED DATA [INTERVAL BOUND]
buy_automation(`Basic Auto Miner`)
draw_automation_p()
setInterval(automated_mining, 10000)