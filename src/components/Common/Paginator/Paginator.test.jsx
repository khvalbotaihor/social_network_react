import Paginator from "./Paginator";
import React from "react";
import {create} from "react-test-renderer"

describe("Paginator component test", ()=>{
    test("pages count is 11 but should be showed only 10", ()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span.length).toBe(10);
    })




})