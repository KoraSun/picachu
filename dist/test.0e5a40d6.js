const string = let;
demo2.innerHTML = string.substring(0, n);
demo.innerText = string.substring(0, n);
//从第0个到第n个显示string的子字符串
let id = setInterval(()=>{
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    n = n + 1;
    demo2.innerHTML = string.substring(0, n);
    demo.innerText = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
}, 0);

//# sourceMappingURL=test.0e5a40d6.js.map
