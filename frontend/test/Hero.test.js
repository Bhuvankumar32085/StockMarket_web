import React from "react";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from "../src/landig_page/home/Hero";


// Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getAllByAltText('Hero Image');
        expect(heroImage).toBeInThaDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png')
    })
})