import React from 'react'
import Main from '../components/Main';
import Home from '../components/Home';
import NotFound from '../components/NotFound'
import { MemoryRouter } from 'react-router-dom'

describe('Main Router Component', () => {

    it('Shows NotFound at /random route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/random' ]}>
                <Main/>
            </MemoryRouter>
        );
        expect(wrapper.find(NotFound)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
    });
    it('Shows Home at /migraine route', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/migraine' ]}>
                <Main/>
            </MemoryRouter>
        );
        expect(wrapper.find(NotFound)).toHaveLength(0);
        expect(wrapper.find(Home)).toHaveLength(1);
    });
    it('Should get data from localstorage', () => {
        let obj = {
            date: "2017-12-23T17:33:33.265Z",
            obj: {"hello":"world"}
        };

        localStorage.setItem(obj.date, JSON.stringify(obj.obj));
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); // PASSES
        const wrapper = shallow(<Main />);
        console.log(localStorage.__STORE__); // LOOKS LIKE IT SHOULD
        console.log(wrapper.state()); // EMPTY! because all the data is placed into localStorage.__STORE__
        expect(localStorage.getItem).toHaveBeenCalledTimes(1) //FAILS


    })
});