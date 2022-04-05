import React from 'react';   
import { Button } from 'react-bootstrap';
import {RecipesList, Recipe, RecipeImage, RecipeName, Ingredients,
     Findoutmore} from './BodyStyles';     
import Home from './home';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'; 
import styled from 'styled-components'; 
const IngredientImage = styled.img`
height: 50px;
object-fit: cover;
border-radius: 10px;  
`;
 
function BodyComponent(props) { 
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
                        </tbody>
                     </table>
                </DialogContent> 
                <DialogActions>
                    <Button  className="btn btn-info" onClick={() => window.open(resObj.recipe.url)}>Find out more</Button> 
                    <Button className="btn btn-danger" onClick={() => setDisplay(false)}>Close</Button> 
                </DialogActions>
            </Dialog>
             <Recipe> 
                <RecipeImage src={resObj.recipe.image}/>
                <RecipeName>{resObj.recipe.label}</RecipeName>
                <Ingredients onClick={() => setDisplay(true)}>Ingredients</Ingredients>
                <Findoutmore  onClick={() => window.open(resObj.recipe.url)}>Find out more</Findoutmore>   
             </Recipe>    
            </>
        )
    }
    return ( 
        <> 
            {(props.recipeList.length ) ? 
            <RecipesList>
                {
                (props.recipeList.map((resObj) => <RecipeComponent
                    resObj={resObj}/>)) }
            </RecipesList>
                : 
                <Home/>}  
        </>
     );
}
 

export default BodyComponent;