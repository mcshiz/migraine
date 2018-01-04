import React from 'react'
import TextDump from '../components/TextDump'

it('Renders TextDump', function () {
    const wrapper = shallow(<TextDump/>);
    expect(wrapper.find('textarea').length).toBe(1)
});


