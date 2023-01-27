console.log('workings');

// SECTION VARIABLES

let resource_count = 0
let clicker_count = 1
let automation_clicks = 0

// SECTION SHOP COST

let number_times_bought = 1

let basic_auto_price = 50

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

function buy_basic_auto(){
  console.log('attempting to buy basic auto');
  if (resource_count >= (basic_auto_price * number_times_bought)) {
    resource_count -= 50
    number_times_bought += 1
    automation_clicks += 3
    console.log('bought auto drill');
    console.log(basic_auto_price * number_times_bought);
    draw_resource_clicks()
    draw_automation_clicks()
    draw_basic_auto_p()
  } else {console.log('did not buy auto drill');}
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

function draw_basic_auto_p(){
  let basic_auto_elm = document.getElementById("basic_auto")
  basic_auto_elm.innerText = `BASIC AUTO DRILLER: COST: ${basic_auto_price * number_times_bought}`
}

// SECTION AUTOMATED DATA [WHEN ACTIVATED]

function automated_mining(){
  resource_count += automation_clicks
  console.log('BEEP BOOP AUTOMATION RUNNING');
  draw_resource_clicks()
}

// SECTION AUTOMATED DATA [INTERVAL BOUND]

draw_basic_auto_p()
setInterval(automated_mining, 10000)