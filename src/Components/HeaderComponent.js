import React, { useState } from 'react'; 
import applogo from '../logo.svg';
import search from '../search.svg';
import axios from 'axios';
import {RecipesList, Recipe, RecipeImage, 
    RecipeName, Ingredients, Findoutmore} from './BodyStyles';
import { Header, Container, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './HeaderStyles'     
import Home from './home';
function HeaderComponent() {
    const [myTimeoutId, setMyTimeoutId] = useState();
    const [recipeList, setRecipeList] = useState([]);
    const APP_ID = "b43160b6"; 
    const APP_KEY ="94c5357cb5486d2ac2b013bc0dc2c6fa";
    const onChangeEvent = (e) => {
        clearTimeout(myTimeoutId);
        const myTimeout = setTimeout(() => getRecipe(e.target.value), 500); 
        setMyTimeoutId(myTimeout); 
    }

    const getRecipe = async (searchItem) => {
            const res = await axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=${APP_ID}&app_key=${APP_KEY}`
            )
            .then(function (res){
                 setRecipeList(res.data.hits);  
            } ) 
    }
    const RecipeComponent = (props) => {
        const { resObj } = props;
        console.log("props:",props);
        return (
             <Recipe> 
                <RecipeImage src={resObj.recipe.image}/>
                <RecipeName>{resObj.recipe.label}</RecipeName>
                <Ingredients>Ingredients</Ingredients>
                <Findoutmore>Findoutmore</Findoutmore>   
             </Recipe>    
        )
    }
    return ( 
        <>
        <Container >
            <Header> 
                <AppNameComponent>
                    <AppIconComponent src={applogo}/>
                     Recipe Finder
                </AppNameComponent>
                <SearchComponent>
                    <SearchIcon src={search}/>
                    <SearchInputComponent placeholder='Seach for recipies with items' onChange={onChangeEvent}/>
                </SearchComponent>  
            </Header> 
        
            {(recipeList.length ) ? 
            <RecipesList>
                {
                (recipeList.map((resObj) => <RecipeComponent
                    resObj={resObj}/>)) }
            </RecipesList>
                : 
                <Home/>} 
       </Container>
        </>
     );
}

export default HeaderComponent;