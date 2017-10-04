import {test3} from 'dist/lib';
import {test4} from 'dist/lib';
import lib from 'dist/lib';
import 'dist/lib.css';
import './index.styl'
console.log(test3.title());
console.log(lib);
test4.then(mess=>console.log(mess)+1);