import React from 'react';   
import { Button } from 'react-bootstrap';
import {RecipesList, Recipe, RecipeImage, RecipeName, Ingredients,
     Findoutmore, IngredientImage} from './bodyStyles';     
import Home from './home';
import { Modal } from 'react-bootstrap';    

 
function Sample(props) { 
    const RecipeComponent = (props) => {
        const { resObj } = props;
        const [display, setDisplay] = React.useState(false);  

        return (
            <> 
            <Modal show={display} onHide={() => setDisplay(false)}>
                <Modal.Header closeButton>
                     <Modal.Title>Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-light table-hover">
                        <thead>
                            <tr> 
                            <th scope="col">Image</th>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Weight</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {resObj.recipe.ingredients.map((ingredientsObj, index) => (
                                <tr key={index}> 
                                    <td><IngredientImage src={ingredientsObj.image}/></td> 
                                    <td>{ingredientsObj.text}</td>
                                    <td>{ingredientsObj.weight}</td> 
                                </tr>
                            ))} 
                        </tbody>
                     </table>
                    </Modal.Body>
                <Modal.Footer>
                    <Button  className="btn btn-info" onClick={() => window.open(resObj.recipe.url)}>Find out more</Button> 
                    <Button className="btn btn-danger" onClick={() => setDisplay(false)}>Close</Button> 
                </Modal.Footer>
            </Modal>
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
                (props.recipeList.map((resObj, index) => <RecipeComponent key={index}
                    resObj={resObj}/>)) }
            </RecipesList>
                : 
                <Home/>}  
        </>
     );
}
 

export default Sample;