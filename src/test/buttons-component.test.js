import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Buttons from '../components/Buttons.js';

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<Buttons />);

describe('<Buttons />', () => {
    it('renders one Buttons component', () => {
        expect(wrapper).toHaveLength(1);
    })

});