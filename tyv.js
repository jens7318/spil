total = 0
function figur(nr) {
if(nr == 1) {
return 'kirsebaer.gif'
}
else if(nr == 2) {
return 'ananas.gif'
}
else if(nr == 3) {
return 'appelsin.gif'
}
else if(nr == 4) {
return 'blomme.gif'
}
else if(nr == 5) {
return 'banan.gif'
}
else if(nr == 6) {
return 'aeble.gif'
}
else {
return 'bar.gif'
}
}

function spil() {
ok = true
while(ok == true) {
total += -5
gevinst = 0
number1 = Math.floor(7*Math.random()) + 1
number2 = Math.floor(7*Math.random()) + 1
number3 = Math.floor(7*Math.random()) + 1
hjul1.src = figur(number1)
hjul2.src = figur(number2)
hjul3.src = figur(number3)

if(number1 == 1 && number2 == 1 && number3 == 1) {
gevinst = 50
}
else if(number1 == 2 && number2 == 2 && number3 == 2) {
gevinst = 100
}
else if(number1 == 3 && number2 == 3 && number3 == 3) {
gevinst = 150
}
else if(number1 == 4 && number2 == 4 && number3 == 4) {
gevinst = 200
}
else if(number1 == 5 && number2 == 5 && number3 == 5) {
gevinst = 250
}
else if(number1 == 6 && number2 == 6 && number3 == 6) {
gevinst = 300
}
else if(number1 == 7 && number2 == 7 && number3 == 7) {
gevinst = 500
}
total += gevinst
document.getElementById("p1").innerHTML = "Total: "+total+" kr."
if(gevinst == 0) {
ok = confirm('Du tabte. Du har i alt tjent '+total+' kr. Vil du prøve igen?')
}
else {
ok = confirm('Du vandt '+gevinst+' kr. Du har i alt tjent '+total+' kr. Vil du prøve igen?')
}
}
}


