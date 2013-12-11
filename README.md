# normalize-time
This is a normalizer for time-based stuff.  The module is a function that takes 4 arguments:
* start time
* duration
* min
* max

min and max are optional, and wil default to 0 and 1 respectively.

It returns a function that takes a single param, time
```
npm install normalize-time
```
## usage
```js
var tnorm = require('normalize-time');
var time = new Date().getTime();
var duration = 3000;

var normalize = tnorm(time, duration)

for(var t = time; t < time + duration){
	console.log(normalize(t));
	t = new Date().getTime();
}
```
What we have done here is created a function that will normalize 3 seconds of time to values between zero and one.  We could have passed min and max values to normalize between any two values.

You may find this useful with such modules as [jsynth](https://npmjs.org/package/jsynth)

## test
wow johnny wrote a test.
to run the tests:
```
npm install tape
node test.js
```
 

