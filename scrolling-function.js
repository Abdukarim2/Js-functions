function scrolling(options){
    let element = options.el;
    let position = options.position;
    let value = options.value;
    let match = options.match;
    let nomatch = options.nomatch;
    if(element !== null){
       if(position){  
            function checkr(elementTop, elementHeight, el, windowHeight){
                if(position.toLowerCase() === "top"){
                    if(elementTop <= value){
                        if(match){
                            match(el)
                        }
                        else{
                           // return true 
                        }
                    }
                    else{
                        if(nomatch){
                            nomatch(el)
                        }
                        else{
                           // return false 
                        }
                    }
                }
                else if(position.toLowerCase() === "bottom"){
                    let calc = windowHeight - (elementHeight + elementTop);
                    if(calc >= value){
                        if(match){
                            match(el)
                        }
                        else{
                           // return true 
                        }
                    }
                    else{
                        if(nomatch){
                            nomatch(el)
                        }
                        else{
                           // return false 
                        }
                    }
                }
                else if(position.toLowerCase() === "center"){
                    let calc = (windowHeight - elementHeight) / 2;
                    if(elementTop <= calc){
                        if(match){
                            match(el)
                        }
                        else{
                           // return true 
                        }
                    }
                    else{
                        if(nomatch){
                            nomatch(el)
                        }
                        else{
                           // return false 
                        }
                    }
                }
            }
            window.addEventListener('scroll', function(){
                let windowHeight = window.innerHeight;
                if(!element.length){
                    let elementTop = Math.ceil(element.getBoundingClientRect().top);   
                    let elementHeight = element.getBoundingClientRect().height;
                    checkr(elementTop, elementHeight, element,  windowHeight)
                }
                else{
                    element.forEach(function(e){
                        let elementTop = Math.ceil(e.getBoundingClientRect().top);   
                        let elementHeight = e.getBoundingClientRect().height;
                        checkr(elementTop, elementHeight, e,  windowHeight)
                    })
                }
            })   
       }
       else{
            console.log(new Error("scrolling position  undefined"))
       }
    }
}

// Examples
// scrolling({
//     el:document.querySelector(".test"),
//     position:"bottom",
//     value:100,
//     // match function runs when element's bottom is 100 px 
//     match(el){
//         console.log(el)
//         // do something on match
//     },
//     // nomatch function runs when element's bottom is not 100 px
//     nomatch(el){
//         console.log(el)
//         // do something on nomatch
//     }
// })

// scrolling({
//     el:document.querySelector(".test"),
//     position:"top",
//     value:100,
//     // match function runs when element's top is 100 px
//     match(el){
//         console.log(el)
//         // do something on match
//     },
//     // nomatch function runs when element's top is not 100 px
//     nomatch(el){
//         console.log(el)
//         // do something on nomatch
//     }
// })

// scrolling({
//     el:document.querySelector(".test"),
//     position:"center",
//     //match function runs when element's position is center mobile, tabled, desktop dynamic
//     match(el){
//         console.log(el)
//         // do something on match
//     },
//     //nomatch function runs when element's position is not center mobile, tabled, desktop dynamic
//     nomatch(el){
//         console.log(el)
//        // do something on nomatch
//     }
// })