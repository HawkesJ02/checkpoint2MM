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
    cost_starting: 200,
    automation: 5,
    buys: 1
  },
  {
    name: 'Industrial Auto Miner',
    cost: 500,
    cost_starting: 500,
    automation: 10,
    buys: 1
  },
  {
    name: 'Titanic Auto Miner',
    cost: 1000,
    cost_starting: 1000,
    automation: 100,
    buys: 1
  }
]

// SECTION ARRAY [Items]

let items = [
  {
    name: 'Pickaxe',
    cost: 100,
    cost_starting: 100,
    clicker_addition: 1,
    buys: 1,
  },
  {
    name: 'Drill',
    cost: 500,
    cost_starting: 500,
    clicker_addition: 3,
    buys: 1,
  },
  {
    name: 'Driller Rover',
    cost: 1000,
    cost_starting: 1000,
    clicker_addition: 5,
    buys: 1,
  },
  {
    name: 'Mining Platform',
    cost: 10000,
    cost_starting: 10000,
    clicker_addition: 25,
    buys: 1,
  },
]

// SECTION VARIABLES

let resource_count = 0
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


function buy_item(item_name){
  const purchased_item = items.find(i => i.name == item_name)
  if (resource_count >= purchased_item.cost) {
    resource_count -= purchased_item.cost; 
    clicker_count += purchased_item.clicker_addition;
    purchased_item.buys += 1;
    purchased_item.cost = purchased_item.cost_starting * purchased_item.buys;
    console.log(`bought ${purchased_item.name}`);
    draw_resource_clicks();
    draw_clicker_data();
    draw_item_shop(item_name);
  }
}

// SECTION USER MANIPULATED DATA [AUTOMATED UPGRADES]

function buy_automation(automation_name){
  const purchased_automation = automation_items.find(a => a.name == automation_name)
  if (resource_count >= (purchased_automation.cost)) {
    resource_count -= purchased_automation.cost; 
    automation_clicks += purchased_automation.automation;
    purchased_automation.buys += 1;
    purchased_automation.cost = purchased_automation.cost_starting * purchased_automation.buys
    console.log(`bought ${purchased_automation.name}`);
    draw_resource_clicks()
    draw_automation_clicks()
    draw_automation_shop(automation_name)
  } else {'Not enough RESOURCE'}
}


// SECTION AUTOMATED DATA [DRAW BOUND]

function draw_item_shop(item_name){
  const purchased_item = items.find(i => i.name == item_name)
  document.getElementById(`${purchased_item.name}`).innerHTML = `
 <div>${purchased_item.name}</div>
 <div> COST: ${purchased_item.cost} </div>
 <div> UPGRADE AMOUNT: ${purchased_item.buys - 1}</div>
  `
}

function draw_resource_clicks(){
let resource_elm = document.getElementById('resource-box')
// @ts-ignore
resource_elm.innerText = resource_count
}

function draw_automation_shop(automation_name){
  const purchased_automation = automation_items.find(a => a.name == automation_name)
  document.getElementById(`${purchased_automation.name}`).innerHTML = `
  <div>${purchased_automation.name}</div>
  <div>COST: ${purchased_automation.cost}</div>
  <div>UPGRADE AMOUNT: ${purchased_automation.buys -1}</div>
  `
}

function draw_clicker_data(){
  let clicker_elm = document.getElementById('clicker-count')
  // @ts-ignore
  clicker_elm.innerText = `MINING UPGRADES: ${clicker_count}`
}

function draw_automation_clicks(){
  let automation_elm = document.getElementById('automation-clicks')
  // @ts-ignore
  automation_elm.innerText = `AUTOMATION AMOUNT: ${automation_clicks}`
}

// SECTION SHOP FUNCTIONS


// SECTION AUTOMATED DATA [WHEN ACTIVATED]

function automated_mining(){
  resource_count += automation_clicks
  console.log('BEEP BOOP AUTOMATION RUNNING');
  draw_resource_clicks()
}

// SECTION AUTOMATED DATA [INTERVAL BOUND]

draw_item_shop(`Pickaxe`);
draw_item_shop(`Drill`);
draw_item_shop(`Driller Rover`);
draw_item_shop(`Mining Platform`);
draw_automation_shop(`Basic Auto Miner`);
draw_automation_shop(`Advanced Auto Miner`);
draw_automation_shop(`Industrial Auto Miner`);
draw_automation_shop(`Titanic Auto Miner`);
setInterval(automated_mining, 2000);