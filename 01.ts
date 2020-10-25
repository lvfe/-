export class EventEmitter{
    callbacks:Map<string, Array<Function>> = new Map();
    $on(name:string, fn:Function){
        if(!this.callbacks.has(name)){
            this.callbacks.set(name, [fn]);
        } else {
            const fns = this.callbacks.get(name)
            fns.push(fn);
        }
    }
    $emit(name:string,  ...args) {
        if(this.callbacks.has(name)){
            const fns = this.callbacks.get(name);
            fns.forEach((fn)=>{
                try{
                    fn.apply(null, args);
                } catch(error){

                }
            });
        }
    }
    $off(name:string) {
        this.callbacks.delete(name);
    }
}

const event1 = new EventEmitter();
event1.$on('event1', (msg)=>{
    console.log(`from event1 ${msg}`)
});
event1.$on('event1', (msg)=>{
    console.log(`from event11 ${msg}`)
});
event1.$emit('event1', 'hello');
setTimeout(()=>{
    event1.$emit('event1', 'hello');
}, 1000)
event1.$on('event1', (msg)=>{
    console.log(`from event111 ${msg}`)
});