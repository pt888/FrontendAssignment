import { render, screen } from '@testing-library/react';
import App from './App';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";


describe("renders App js file", () => {
  it("Should render App js",()=>{
    const linkElement = render(<App/>);
    expect(linkElement.getByTestId("Form")).toBeCalled();
  });
});