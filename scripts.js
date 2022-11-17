let servicesRequested = []
let service1 = document.getElementById("service1")
let service2 = document.getElementById("service2")
let service3 = document.getElementById("service3")
let taskEl = document.getElementById("container1")
let totalEl = document.getElementById("total-price")
let noteEl = document.getElementById("note")
let total = 0

service1.addEventListener("click", function(){
    servicesRequested.push({service: "Wash Car", price: 10})
    taskEl.innerHTML +=`<p>${servicesRequested[servicesRequested.length-1].service}</p><p> $${servicesRequested[servicesRequested.length-1].price}</p>`
    service1.disabled=true
    total += servicesRequested[servicesRequested.length-1].price
    noteEl.innerHTML = "We accept cash, credit card, or PayPal"
    totalEl.innerHTML = `$${total}`
})

service2.addEventListener("click", function(){
    servicesRequested.push({service: "Mow Lawn", price: 20})
    taskEl.innerHTML +=`<p>${servicesRequested[servicesRequested.length-1].service}</p><p> $${servicesRequested[servicesRequested.length-1].price}</p>`
    service2.disabled=true
    total += servicesRequested[servicesRequested.length-1].price
    noteEl.innerHTML = "We accept cash, credit card, or PayPal"
    totalEl.innerHTML = `$${total}`
})

service3.addEventListener("click", function(){
    servicesRequested.push({service: "Pull Weeds", price: 30})
    taskEl.innerHTML +=`<p>${servicesRequested[servicesRequested.length-1].service}</p><p> $${servicesRequested[servicesRequested.length-1].price}</p>`
    service3.disabled=true
    total += servicesRequested[servicesRequested.length-1].price
    noteEl.innerHTML = "We accept cash, credit card, or PayPal"
    totalEl.innerHTML = `$${total}`
})

function reset(){
    servicesRequested = []
    taskEl.innerHTML =""
    service1.disabled=false
    service2.disabled=false
    service3.disabled=false
    noteEl.innerHTML = ""
    totalEl.innerHTML = `$0`
    total=0
}


