module.exports = DSQ
const redis = require('redis')


// crear resdis client
let client = redis.createClient();



function DSQ(name) {
    this.id = name
    console.log(this.id)
}
DSQ.prototype.Push = function (val) {
    this.push(val,this)
}
DSQ.prototype.push = function (val,q) {
    console.log('RPUSH ' + q.id + ' ' + val)
    client.rpush(q.id, val)
}
DSQ.prototype.save = function (val) {
    console.log(this.id)
    console.log(val)
    this.output=val
    console.log(this.output)
}

DSQ.prototype.Pop = function () {
    return this.pop(this)
}
DSQ.prototype.pop = function (q) {
    console.log('LPOP ' + this.id)
    client.lpop(this.id, function (err, reply) {
        console.log('pop= ' + reply)
        q.save(reply)
    })
    console.log('out :  '+q.output)
    return q.output
}
DSQ.prototype.peek = function () {
    console.log('LPOP ' + this.id)
    client.lpop(this.id, function (err, reply) {
        console.log('peek= ' + reply)
    })
    console.log('LPUSH ' + this.id)
    client.lpush(this.id, f)
}
DSQ.prototype.Show = function () {
    return this.show(this)
}
DSQ.prototype.show = function (q) {
    client.lrange(this.id, 0,-1,function (err, reply) {
        console.log('Q= ' + reply)
        q.save(reply)
    })
    return q.output
}