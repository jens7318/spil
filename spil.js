total = 0
function spil() {
  ok = true
  while(ok == true) {
    kast1 = Math.floor(6*Math.random()) + 1
    kast2 = Math.floor(6*Math.random()) + 1
    if(kast1 == 1 && kast2 == 1) {
       gevinst = 30
       terning1.src = 'ener.gif'
       terning2.src = 'ener.gif'
    }
    else if(kast1 == 2 && kast2 == 2) {
       gevinst = 45
       terning1.src = 'toer.gif'
       terning2.src = 'toer.gif'
    }
    else if(kast1 == 3 && kast2 == 3) {
       gevinst = 45
       terning1.src = 'treer.gif'
       terning2.src = 'treer.gif'
    }
    else if(kast1 == 4 && kast2 == 4) {
       gevinst = 30
       terning1.src = 'firer.gif'
       terning2.src = 'firer.gif'
    }
    else if(kast1 == 5 && kast2 == 5) {
       gevinst = 45
       terning1.src = 'femmer.gif'
       terning2.src = 'femmer.gif'
    }
    else if(kast1 == 6 && kast2 == 6) {
       gevinst = 60
       terning1.src = 'sekser.gif'
       terning2.src = 'sekser.gif'
    }
    else {
     if(kast1 == 1) {
       gevinst = 10
       terning1.src = 'ener.gif'
     }
     else if(kast1 == 2) {
       gevinst = 15
       terning1.src = 'toer.gif'
     }
     else if(kast1 == 3) {
       gevinst = 15
       terning1.src = 'treer.gif'
     }
     else if(kast1 == 4) {
       gevinst = 10
       terning1.src = 'firer.gif'
     }
     else if(kast1 == 5) {
       gevinst = 15
       terning1.src = 'femmer.gif'
     }
     else {
       gevinst = 20
       terning1.src = 'sekser.gif'
     }
     if(kast2 == 1) {
       gevinst += 10
       terning2.src = 'ener.gif'
     }
     else if(kast2 == 2) {
       gevinst += 15
       terning2.src = 'toer.gif'
     }
     else if(kast2 == 3) {
       gevinst += 15
       terning2.src = 'treer.gif'
     }
     else if(kast2 == 4) {
       gevinst += 10
       terning2.src = 'firer.gif'
     }
     else if(kast2 == 5) {
       gevinst += 15
       terning2.src = 'femmer.gif'
     }
     else {
       gevinst += 20
       terning2.src = 'sekser.gif'
     }
    }
    total += gevinst
    document.getElementById("p1").innerHTML = "Total: "+total+" kr."
    ok = confirm('Din gevinst er '+gevinst+' kr.'+' Din total er '+total+'\n Fortsæt?')
  }
}