const { nextTick } = require("@tarojs/taro");

const order500  = ()=>{
    if(nodetpye=1){
        console.log('do 500');
        return;
    } else {
        return 'nextTick';
    }
}
const order200  = ()=>{
    if(nodetpye=2){
        console.log('do 200');
        return;
    } else {
        return 'nextTick';
    }
}
function Chain(fn){
    this.fn = fn;
    this.next = null;
}
Chain.prototype.setNext =function(next){
    return this.next = next;
}
Chain.prototype.passRequest=function(){
    let ret = this.fn.apply(this, arguments);
    if(ret ==='nextTick'){
       return this.next && this.next.passRequest.apply(this.next, arguemtns)
    } 
    return ret;
}
const chainorder500 = new Chain(order500);
const chainorder200 = new Chain(order200);
chainorder500.setNext(chainorder200);
chainorder500.passRequest();