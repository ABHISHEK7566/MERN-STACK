let x = "Hello From Main Module";

function calculator(a,b){
    let z = a + b;
    return z;
}
export default {x, calculator};
// module.export = {x, calculator};