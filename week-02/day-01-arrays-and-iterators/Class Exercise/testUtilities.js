function assert(input, output, testFunction) {
    return output === testFunction(input);
} //if true, works 

assert(["monday", "tuesday", "wednesday"], "monday", first)

