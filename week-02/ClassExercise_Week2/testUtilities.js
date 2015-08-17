/*
function assert(input, output, testFunction) {
    return output === testFunction(input);
} //if true, works 

function mphToKph(mph) {
    return Math.round(mph*1.61);
}

//test result
console.log(
    'mphToKph pass?',
    assert(60,97,mphToKph)
);
*/

//test for last
var week = ["monday", "tuesday", "wednesday"];

function assert(input, output, testFunction) {
    return output === testFunction(input);
} //if true, works 

function last(array){
	return array[array.length-1];
}

function first(array){
	return array[0];
}

function min(array){
    array.sort(function(a,b){
        return a - b;
    });
    return(array[0]);
}

//test result
console.log(
    'Min pass?',
    assert([144, 12, 81, 9], 9, min)
);

//test result for laste
console.log("Last Pass?", assert(week, 'wednesday', last));
console.log("First Pass?", assert(week, 'monday', first));
