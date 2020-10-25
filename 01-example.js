class A {
    logMessage(msg){
        console.log(123, msg);
    }
}
class B {
    a = new A();
    // may  influence A
    findA(msg){
        this.a.logMessage(msg);
    }
}
class C{
    say2A(msg){
        (new B()).findA(msg);
    }
}
(new C()).say2A('hi'); // 有层层调用的耦合问题
const {EventEmitter} = require('./01');
const evet= new EventEmitter();
evet.$on('message', (args)=>{
    (new A()).logMessage(args);
});
evet.$emit('message', 'say2A'); //这样解耦