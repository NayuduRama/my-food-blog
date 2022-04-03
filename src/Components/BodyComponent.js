import React from 'react';
import applogo from '../logo.svg';
import {RecipesList, Recipe, RecipeImage, RecipeName, Ingredients, Findoutmore} from './BodyStyles';

function BodyComponent(props) {
    return (
        <RecipesList>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
            <Recipe>
                <RecipeImage src={applogo}/>
                <RecipeName>RecipeName</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore> 
            </Recipe>
        </RecipesList>
    );
}

export default BodyComponent;