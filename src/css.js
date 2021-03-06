const string = `
.skin *{box-sizing: border-box;margin:0;padding:0;}
.skin *::before,.skin *::after{box-sizing: border-box;}

.skin{
    background:#ffe600;
    min-height:50vh;
    position: relative;
    
}
.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    height: 0px;
    width: 0px;
    position:relative;
    left:50%;
    top:145px;
    margin-left: -10px;
    z-index: 10;
    /*要再看一下margin和相对定位*/
}

@keyframes wave{
    0%{
        transform:rotate(0deg);
    }
    33%{
        transform:rotate(10deg);
    }
    66%{
        transform:rotate(-10deg);
    }
    100%{
        transform:rotate(0deg);
    }

}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 0.2s infinite;
}

.yuan{
   
    width: 20px;
    height: 8px;
    position: absolute;
    bottom: 10px;
    left:-10px;
    border-radius: 10px 10px 0 0;
    background-color: black;

   
}

.eye{
    border:1px solid black;
    height: 64px;
    width: 64px;
    position: absolute;
    left:50%;
    top:100px;
    margin-left: -32px;
    border-radius: 50%;
    background-color: #2e2e2e;
}
.eye::before{
    content: "";
    display: block;
    border:3px solid black;     
    width:25px;
    height:25px;
    position: relative;
    top:2px;
    left:11px;
    border-radius: 50%;
    background-color: white;

}
.eye.left{
    transform:translateX(-100px);
    
}
.eye.right{
    transform:translateX(100px);
}

.mouth{
    width: 200px;
    height:100px;
    position: absolute;
    left:50%;
    top:170px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;
    

}
.mouth .up .lip{
    border:3px solid black ;
    height:30px;
    width:100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left:50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
    
    border-radius: 0 0 0 50px;
    transform: rotate(-17deg) translateX(-53px);
    
}
.mouth .up .lip.right{
    
    border-radius: 0 0 50px 0;
    transform: rotate(17deg) translateX(53px);
}

.mouth .up .lip::before{
    content:'';
    display: block;
    height:28px;
    width:7px;
    position: absolute;
    bottom: 0px;
    background-color: #ffe600;   

}

.mouth .up .lip.left::before{   
    right:-6px;  
}
.mouth .up .lip.right::before{   
    left:-6px;  
}

.mouth .down{
    
    height:190px;
    width:200px;
    top:10px;
    position:absolute;
    overflow: hidden;
}
.mouth .down .yuan1{
    border:3px solid black;
    height:1000px;
    width:150px;
    position:absolute;
    left:50%;
    margin-left:-75px;
    bottom: 10px;
    border-radius: 95px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    
    height:160px;
    width:150px;
    position:absolute;
    bottom: 0;
    left:50%;
    margin-left: -75px;
    border-radius: 50%;
    background:#ff485f ;
}

.face{
    position:absolute;
    border:3px solid black;
    height:88px;
    width:88px;
    left:50%;
    top:200px;
    margin-left:-44px;
    border-radius: 50%;
    background: #ff0000;
    z-index: 3;

}
.face.left{
    transform:translateX(-160px);
}
.face.right{
    transform:translateX(160px);
}
`
export default string;