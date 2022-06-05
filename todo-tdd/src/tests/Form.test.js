import React from 'react';
import {shallow,mount,configure,render} from 'enzyme';
import { screen } from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Form from '../components/FilterButton';
import userEvent from "@testing-library/user-event";

describe("Basic rendering of filterbutton",()=>{
    it("should render any values",()=>{
        const formBody=shallow(<Form/>);
        const formValue=formBody.find(Form);
        expect(formValue).toBeDefined();
    });
    it("should render input field",()=>{
        const formBody=shallow(<Form/>);
        expect(formBody.find('.input__lg')).toBeDefined();
    });
    it("should render add button",()=>{
        const formBody=shallow(<Form/>);
        expect(formBody.find('Add')).toBeDefined();
    })
//   it("should add todo when clicked on add button",()=>{
//       const formBody=shallow(<Form/>);
//       const todo=screen.queryByPlaceholderText(/enter task/i);
//       userEvent.type(todo,"Hello");
//       const addTodo=document.getElementById('#add_task');
//       //('button',{name:Add});
//       console.log(addTodo);
//       //userEvent.click(addTodo);
//        //expect(todo).toHaveValue("");
//    })

})