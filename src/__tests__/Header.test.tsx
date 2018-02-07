import {mount, render, shallow} from 'enzyme';
import React from 'react';

import Header from '../components/Header';


describe('A suite', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Header />).contains(<p className="text-uppercase">Foo to the bar!!!</p>)).toBe(true);
    });

    it('should be selectable by class "text-uppercase"', () => {
        expect(shallow(<Header />).is('.text-uppercase')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<Header />).find('.text-uppercase').length).toBe(1);
    });

    it('should render to static HTML', () => {
        expect(render(<Header />).text()).toEqual('Foo to the bar!!!');
    });
});
