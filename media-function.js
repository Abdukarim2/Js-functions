function media(screen, callback){
    var windowMediaMatch = window.matchMedia(`(${screen})`);
    function checkMedia(x){
        var status = false
        if(x.matches){
            status = true
        }
        else{
            status = false
        }
        callback(status)
    }
    checkMedia(windowMediaMatch);
    windowMediaMatch.addListener(checkMedia)
}

// Examples
// media("max-width: 768px", function(x){
//     // x is true when, window's width <= max-width: 768px
//     // x is false when, window's width >= max-width: 768px

//     //x is true 
//     if(x) document.body.style.background = "green"

//     //x is false 
//     else document.body.style.background = "red"
// })