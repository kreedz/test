import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

test('Header component renders the header correctly', () => {
    const rendered = renderer.create(
        <Header />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});
