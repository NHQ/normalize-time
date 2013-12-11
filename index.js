module.exports = function(start, dur, min, max){

	if(!min) min = 0;
	if(!max) max = 1;
	var end = start + dur;
	var d = end - start;
	var r = max - min;

	return function(time){

		return min + (time - start) * r / d
	
	}

}
