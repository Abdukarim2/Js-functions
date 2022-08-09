function q(el, which=false){
    if(el != "undefined" && el != null){
        if (typeof(el) === 'string'){
            if (el !== '' || el !== ""){
                if (el.startsWith("#")){
                    /* query id */
                    let element;
                    if(which){
                        element = which.querySelector(`${el}`)
                    }
                    else {
                        element = document.querySelector(`${el}`)
                    }
                    if (typeof(element) != 'undefined' && element != null){
                       element.q = function(inel){
                        return q(inel, element)
                       }
                       return element
                    }
                    else {
                        console.log(new Error("element undefined"))
                        return null
                    }
                }
                else {
                    /* query classes */
                    let element;
                    if(which){
                        if(which.querySelectorAll(`${el}`).length === 1) element = which.querySelector(`${el}`)
                        else if(which.querySelectorAll(`${el}`).length >= 2) element = which.querySelectorAll(`${el}`)
                    }
                    else {
                       if(document.querySelectorAll(`${el}`).length === 1) element = document.querySelector(`${el}`)
                       else if(document.querySelectorAll(`${el}`).length >= 2) element = document.querySelectorAll(`${el}`) 
                    }
                    if (typeof(element) != 'undefined' && element != null){
                        if (element.length >= 2 ){
                            element.forEach((e)=>{
                                e.q = function(inel){
                                    return q(inel, e)
                               }
                            })
                            return element
                        }
                        else{
                            element.q = function(inel){
                                return q(inel, element)
                           }
                        }
                        return element
                    }
                    else {
                        console.log(new Error("element undefined"))
                        return null
                    }
                }
            }
            else {
                console.log(new Error(`The provided selector is empty`))
            }
        }
        else {
            console.log(new TypeError(`type error the query is must be string '${el}' is not a valid selector`))
        }
    }
    else {
        console.log(new Error("q must accept 1 positional argument"))
    }
}

// Examples
// q(".classname") or q("tagname") or q("#id")
// q("body").q("div").q(".some_class").q("#some_id") ...
// It returns the element itself or nodelist