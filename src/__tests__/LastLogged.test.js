import React from 'react'
import LastLogged from '../components/LastLogged'

describe('LastLogged Component', () => {
    loadExampleData();
    const wrapper = shallow(<LastLogged data={exampleData}/>);
    it('Should load example data', () => {
       expect(wrapper.find('.last-logged').length).toBe(1);
    });
    it('Should compare the component with a snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

});