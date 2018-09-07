import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Buttons from '../components/Buttons.js';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<Buttons />);

describe('<Buttons />', () => {
    it('renders one Buttons component', () => {
        expect(wrapper).toHaveLength(1);
    })
  
    it('renders a number 1 button', () => {
        expect(wrapper.find('.button-1')).toHaveLength(1);
    })

    it('renders a plus button', () => {
        expect(wrapper.find('.handleMathsPlus')).toHaveLength(1)
    })

    it('renders an equals button', () => {
        expect(wrapper.find('.isEquals')).toHaveLength(1)
    })
});

