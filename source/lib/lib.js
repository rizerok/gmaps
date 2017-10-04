import 'babel-polyfill';
import '../styles/style.styl';
export const test1 = {
    title:'Test'
};
export const test2 = {
    title:'Test2'
};
export const test3 = class Test3{
    constructor(){

    }
    static title(){
        return 'Test3';
    }
};
export let test4 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Success!');
    }, 3000);
});
export default {
    test1,
    test2,
    test3,
    test4
};