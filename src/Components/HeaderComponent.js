import React, { useState } from 'react'; 
import applogo from '../logo.svg';
import search from '../search.svg';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {RecipesList, Recipe, RecipeImage, RecipeName, Ingredients,
     Findoutmore} from './BodyStyles';
import { Header, Container, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './HeaderStyles'     
import Home from './home';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import styled from 'styled-components';

const IngredientImage = styled.img`
height: 50px;
object-fit: cover;
border-radius: 10px;  
`;
 
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
        const [display, setDisplay] = React.useState(false); 
        return (
            <>
            <Dialog open={display}>
                <DialogTitle>Ingredients</DialogTitle>
                <DialogContent> 
                     <table className="table table-light table-hover">
                        <thead>
                            <tr> 
                            <th scope="col">Image</th>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Weight</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {resObj.recipe.ingredients.map((ingredientsObj) => (
                                <tr> 
                                    <td><IngredientImage src={ingredientsObj.image}/></td> 
                                    <td>{ingredientsObj.text}</td>
                                    <td>{ingredientsObj.weight}</td> 
                                </tr>
                            ))}
                            {/* {resObj.recipe.ingredients.text} */}
                        </tbody>
                     </table>
                </DialogContent> 
                <DialogActions>
                    <Button  className="btn btn-info" onClick={() => window.open(resObj.recipe.url)}>See more</Button> 
                    <Button className="btn btn-danger" onClick={() => setDisplay(false)}>Close</Button> 
                </DialogActions>
            </Dialog>
             <Recipe> 
                <RecipeImage src={resObj.recipe.image}/>
                <RecipeName>{resObj.recipe.label}</RecipeName>
                <Ingredients onClick={() => setDisplay(true)}>Ingredients</Ingredients>
                <Findoutmore  onClick={() => window.open(resObj.recipe.url)}>Findoutmore</Findoutmore>   
             </Recipe>    
            </>
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