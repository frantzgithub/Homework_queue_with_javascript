

function queue(){
    this.arr = [];
}

queue.prototype.add = function(val){
    this.arr.push(val);
}
queue.prototype.del = function(val){
    this.arr.shift(val);
}

const fifo = new queue();

fifo.add(4)
fifo.add(6)
fifo.add(8)
fifo.del()

console.log(fifo)