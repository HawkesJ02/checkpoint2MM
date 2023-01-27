console.log('workings');

// SECTION VARIABLES

let resource_count = 0
let clicker_count = 1
let automation_clicks = 0

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
  if (resource_count >= 50) {
    resource_count -= 50
    automation_clicks += 3
    console.log('bought auto drill');
    draw_resource_clicks()
    draw_automation_clicks()
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

// SECTION AUTOMATED DATA [WHEN ACTIVATED]

function automated_mining(){
  resource_count += automation_clicks
  console.log('BEEP BOOP AUTOMATION RUNNING');
  draw_resource_clicks()
}

// SECTION AUTOMATED DATA [INTERVAL BOUND]

// setInterval(automated_mining, 500)