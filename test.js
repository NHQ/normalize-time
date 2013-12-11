var test = require('tape');
var tnorm = require('./');

var norm = tnorm(1000, 3000, 0, 1)
var vals = []


for(var x = 1000; x <= 4000; x+=.1){
	vals.push(norm(x))
}

test('checking normalized values are between zero and 1', function(t){

	t.ok(vals[0] >= 0)
	t.ok(0 <= vals[Math.random() * 4000] <= 1)
	t.ok(vals[vals.length - 1] <= 1)
	t.end()
})

var norm2 = tnorm(1000, 3000, 101, 1001)
var vals2 = []

for(var x = 1000; x <= 4000; x+=.1){
	vals2.push(norm2(x))
}


test('checking normalized values between 101 and 1001', function(t){
        t.ok(vals2[0] >= 101)
        t.ok(101 <= vals2[Math.random() * 4000] <= 1001)
        t.ok(vals[vals2.length - 1] <= 1001)
        t.end()
})
