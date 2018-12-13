try {
    setTimeout( function() {
        throw new Error("DANGER ZONE!");
    }, 2000) ;
} catch (e) {
    console.log("I caught the error!");
}


/*
Output:
throw new Error("DANGER ZONE!");
          ^

Error: DANGER ZONE!
    at Timeout._onTimeout()
*/
