const Newday= document.getElementById("dayzz")
const Newhrs= document.getElementById("hrss")
const Newmin= document.getElementById("minss")
const Newsec= document.getElementById("secc")
const launch = new Date('11/20/2022')

const second = 1000
const minute = second*60
const hour = minute*60
const day = hour*24
let RunTime
function countDown() {
    const today= new Date()
    const start = launch - today
    
    
   
    
    const days = Math.floor(start/day)
    const hours = Math.floor((start%day)/hour)
    const minutes = Math.floor((start%hour)/minute)
    const seconds = Math.floor((start%minute)/second)
    Newsec.innerHTML=seconds
    Newmin.innerHTML=minutes
    Newhrs.innerHTML=hours
    Newday.innerHTML=days

    

    
    
}

 RunTime= setInterval(countDown,second )