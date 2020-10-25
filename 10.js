// waster memory
function Model(gender, cloth){
    this.gender = gender;
    this.cloth = cloth;
}
Model.prototype.print = function(){
    console.log(`${this.gender}_${this.cloth}`);
}
for(let i=0;i<50;i++){
    const model  = new Model('male', `cloth_${i}`);
    model.print();
}
// 享元, 内部不容易改变， 
function Model(){
}
const model = new Model();
for(let i=0;i<50;i++){
    model.cloth = `cloth_${i}`
    model.print();
}