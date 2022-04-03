import React from 'react';
import styled from 'styled-components';
import applogo from '../logo.svg';

const RecipesList = styled.div`
display: flex;
flex-direction: row;
padding: 30px;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 20px
`;
const Recipe = styled.div`
display: flex;
flex-direction: column;
paddig: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
`;
const RecipeImage = styled.img`
height: 200px;
`;
const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: #2376cf;
text-align: center;
margin: 10px 10px;
`;
const Ingredients = styled.span`
font-size: 18px;
border: solid 1px #eb8909;
margin: 10px 15px;
cursor: pointer;
padding: 10px 15px;
border-radius: 9px;
color: #eb8909;
text-align: center;
margin-bottom: 12px;
`;
const Findoutmore = styled(Ingredients)`
color: #27d64d;
border: solid #27d64d;
`;

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