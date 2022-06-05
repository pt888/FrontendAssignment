import React from 'react';
import {shallow,mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import FilterButton from '../components/FilterButton';

describe("Basic rendering of filterbutton",()=>{
    it("should render any values",()=>{
        const filterButton=shallow(<FilterButton/>);
        const filterValue=filterButton.find(Text);
        expect(filterValue).toBeDefined();
    });

    it("should render buttons",()=>{
    const filterButton=shallow(<FilterButton/>);
    expect(filterButton.find('.toggle-btn').length).toEqual(1);
    })
})