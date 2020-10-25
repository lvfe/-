Function.prototype.before = function(beforeFn){
    const _self = this;
    return function(){
        beforeFn.apply(this, arguments);
        return _self.apply(this, arguments);
    }
}
Function.prototype.after = function(afterFn){
    const _self = this
    return function(){
        const _ret = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return _ret;
    }
}
//装饰器模式不一i的那个是@， 只要不改变函数， 就算装饰器
let hello = function(){
    console.log('hello');
}

hello = hello.before(()=>console.log('before'));//需要赋值
hello = hello.after(()=>console.log('after')); //需要赋值
hello();