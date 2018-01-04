import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-localstorage-mock'
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;



let exampleData = [
    {date: "2017-12-23T17:33:33.265Z", obj: {"pain":"3","work":"9","sleep":"8","notes":"notes","pressure":1025}},
    {date: "2017-12-24T17:33:33.265Z", obj: {"pain":"4","work":"2","sleep":"12","notes":"notes","pressure":1029}},
    {date: "2017-12-25T17:33:33.265Z", obj: {"pain":"6","work":"5","sleep":"8","notes":"notes","pressure":1030}},
    {date: "2017-12-26T17:33:33.265Z", obj: {"pain":"9","work":"3","sleep":"6","notes":"notes","pressure":1028}},
    {date: "2017-12-27T17:33:33.265Z", obj: {"pain":"6","work":"0","sleep":"4","notes":"notes","pressure":1026}},
    {date: "2017-12-28T17:33:33.265Z", obj: {"pain":"3","work":"1","sleep":"9","notes":"notes","pressure":1026}},
    {date: "2017-12-29T17:33:33.265Z", obj: {"pain":"1","work":"3","sleep":"10","notes":"notes","pressure":1020}},
];
const loadExampleData = () => {
    exampleData.map((obj) => {
        localStorage.setItem(obj.date, JSON.stringify(obj.obj))
    });

};

global.loadExampleData = loadExampleData;

global.exampleData = [
    {date: "2017-12-23T17:33:33.265Z", obj: {"pain":"3","work":"9","sleep":"8","notes":"notes","pressure":1025}},
    {date: "2017-12-24T17:33:33.265Z", obj: {"pain":"4","work":"2","sleep":"12","notes":"notes","pressure":1029}},
    {date: "2017-12-25T17:33:33.265Z", obj: {"pain":"6","work":"5","sleep":"8","notes":"notes","pressure":1030}},
    {date: "2017-12-26T17:33:33.265Z", obj: {"pain":"9","work":"3","sleep":"6","notes":"notes","pressure":1028}},
    {date: "2017-12-27T17:33:33.265Z", obj: {"pain":"6","work":"0","sleep":"4","notes":"notes","pressure":1026}},
    {date: "2017-12-28T17:33:33.265Z", obj: {"pain":"3","work":"1","sleep":"9","notes":"notes","pressure":1026}},
    {date: "2017-12-29T17:33:33.265Z", obj: {"pain":"1","work":"3","sleep":"10","notes":"notes","pressure":1020}},
];
// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};