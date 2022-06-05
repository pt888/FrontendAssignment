import React from 'react';
import {shallow,mount,configure,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Todo from '../components/FilterButton';

describe("Basic rendering of Todo",()=>{
    it("should render any values",()=>{
        const formBody=shallow(<Todo/>);
        const formValue=formBody.find(Text);
        expect(formValue).toBeDefined();
    });
    it("should render buttons",()=>{
            const formBody=shallow(<Todo/>);
            expect(formBody.find('.todo-cancel')).toBeDefined();
            expect(formBody.find('.todo-edit')).toBeDefined();
            expect(formBody.find('.btn')).toBeDefined();
            expect(formBody.find('.btn__danger')).toBeDefined();
    });

});