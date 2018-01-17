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

    it('Should load example data into localStorage', () => {
        const wrapper = shallow(<Main />);
        wrapper.instance().loadExampleData();
        expect(localStorage.length).toBe(7);
        expect(localStorage.setItem).toHaveBeenCalledTimes(7);
    });

    it('Should get data from localstorage', () => {
        const wrapper = shallow(<Main />);
        expect(localStorage.getItem('2017-12-25T17:33:33.265Z')).toEqual('{"pain":"6","work":"5","sleep":"8","notes":"notes","pressure":1030}') //FAILS

    });
});