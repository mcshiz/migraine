import React from 'react'
import Admin from '../components/Admin'

// Not Testing Clear LocalStorage or Load Example Data
// that should be covered by localStorage itself (duplicate testing)
describe('Admin Component', () => {
    const wrapper = shallow(
        <Admin/>
    );
    it('Should compare the component with a snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('Should clear localStorage', () => {
       wrapper.find('.button.warning.clear').simulate('click');
        expect(localStorage.clear).toHaveBeenCalledTimes(1);
        expect(localStorage.length).toBe(0);
    });
});
