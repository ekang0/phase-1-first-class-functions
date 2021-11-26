const receivesAFunction = callback => callback(); 

/* function returnsANamedFunction() {
    return receivesAFunction;
}; */

let returnsANamedFunction = () => receivesAFunction;

function returnsAnAnonymousFunction() {
    return () => {}
};