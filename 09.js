myEvent = {
    stop: function(e){
        if(typeof e.preventDefault() === 'function'){
            e.preventDefault();
        }
        if(typeof e.stopPropagation() == 'function'){
            e.stopPropagation();
        }
        // for IE
        if(typeof e.returnValue === 'boolean'){
            e.returnValue = false;
        }
        if(typeof e.cancelBubble === 'boolean'){
            e.cancelBubble = true
        }
    },
    addEvent(dom, type, fn) {
        if(dom.addEventListener){
            dom.addEventListener(type, fn, false);
        } else if(dom.attachEvent){
            dom.attachEvent(`on${type}`, fn);
        } else {
            dom['on'+type] = fn;
        }
    }
}