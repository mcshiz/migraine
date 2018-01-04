import React from 'react'
import Home from '../components/Home'

describe('Home Component', () => {
    const wrapper = shallow(<Home/>);
    it('Home Renders Notes Buttons', function () {
        expect(wrapper.find('.add.notes').length).toBe(1);
        expect(wrapper.find('.add.work').length).toBe(1);
        expect(wrapper.find('.add.sleep').length).toBe(1);
    });
    it('Should Expand the Notes Sections', function () {
        wrapper.find('.add.notes').simulate('click');
        expect(wrapper.state().notesDisplay).toBe(true)
    });
    it('Should Expand the Sleep Sections', function () {
        wrapper.find('.add.sleep').simulate('click');
        expect(wrapper.state().sleepDisplay).toBe(true)
    });
    it('Should Expand the Work Sections', function () {
        wrapper.find('.add.work').simulate('click');
        expect(wrapper.state().sleepDisplay).toBe(true)
    });
    it('Should Handle Pain Input', () => {
        const painInput = wrapper.find('#pain-input');
        expect(painInput.length).toBe(1);
        painInput.simulate('change', {target: {value: 6}});
        expect(wrapper.state().painValue).toBe(6);
        wrapper.state().painValue = "";
    });
    it('Should Prevent input higher than 10', () => {
        const painInput = wrapper.find('#pain-input');
        painInput.simulate('change', {target: {value: 13}});
        expect(wrapper.state().painValue).toBe("");
        wrapper.state().painValue = "";
    });
    it('Should Prevent letters', () => {
        const painInput = wrapper.find('#pain-input');
        painInput.simulate('change', {target: {value: "abc"}});
        expect(wrapper.state().painValue).toBe("");
        wrapper.state().painValue = "";
    });
});



