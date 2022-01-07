import string from './css.js'

let n =1
let time = 100
demo2.innerHTML=string.substring(0,n)
demo.innerText=string.substring(0,n)
//从第0个到第n个显示string的子字符串
const run =()=>{
    n=n+1
    if(n>string.length){
        window.clearInterval(id)
        return 
     }
     demo2.innerHTML=string.substring(0,n)
     demo.innerText=string.substring(0,n)
     demo.scrollTop =demo.scrollHeight
}


const play= ()=>{
    return setInterval(run, time)
}
const pause =()=>{
    window.clearInterval(id)
}
const Slow=()=>{
    pause()
    time =300
    id =play()
}
const Normal=()=>{
    pause()
    time =100
    id =play()
}
const Fast =()=>{
    pause()
    time =0
    id =play()
}
let id = play()

btnPause.onclick=()=>{
    pause()
}

btnPlay.onclick=()=>{
    id = play()
}

btnSlow.onclick = Slow 
btnNormal.onclick=Normal
btnFast.onclick=Fast