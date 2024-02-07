let mm = {
maxHp: 50,
    hp: 50,
dps: 5,
attack(another){
    another.hp -= this.dps;
},
healPoint: 8,
heal(){ 
    this.hp += healPoint
    if(this.hp > this.maxHp){
        this.hp = this.maxHp
    }

},
isAlive(){
    return  this.hp > 0;
}
};
let warrior = {
hp: 100,
dps: 11,
range: 0
}

console.log(mm):
console.log(mm.isAlive())
console.log("aaaa")
enemy.hp -=100;
enemy.heal ();
console.log(mm.isAlive);