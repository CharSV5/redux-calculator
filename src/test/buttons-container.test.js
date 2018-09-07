import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { ButtonsContainer } from '../containers/ButtonsContainer.js';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<ButtonsContainer />);

describe('<ButtonsContainer />', () => {
    it('renders one Buttons Container', () => {
        expect(wrapper).toHaveLength(1);
    })

    describe('handelClick', () => {
        it('records inupt 1', () => {
            const component = mount(<ButtonsContainer />);
            console.log(component.instance().props.handleClick)
        })
    })
})