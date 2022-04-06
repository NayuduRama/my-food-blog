import React, { useState } from 'react'; 
import applogo from '../logo.svg';
import search from '../search.svg';
import axios from 'axios';  
import styled from 'styled-components';
import Header from './header';
import Body from './body';
const Container = styled.div`
                    display: flex;
                    flex-direction: column;
                    `;  
function Main() {
    const [myTimeoutId, setMyTimeoutId] = useState();
    const [recipeList, setRecipeList] = useState([]);
    const APP_ID = "b43160b6"; 
    const APP_KEY ="94c5357cb5486d2ac2b013bc0dc2c6fa";
    const getRecipe = async (searchItem) => {
            const res = await axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=${APP_ID}&app_key=${APP_KEY}`
            )
            .then(function (res){
                 setRecipeList(res.data.hits);  
            } ) 
    }
    const onChangeEvent = (e) => {
        e.persist();
        clearTimeout(myTimeoutId);
        const myTimeout = setTimeout(() => getRecipe(e.target.value), 500); 
        setMyTimeoutId(myTimeout); 
    }

    
    return ( 
        <>
        <Container > 
            <Header applogo={applogo} search={search} onChange={onChangeEvent} />
            <Body recipeList={recipeList} /> 
       </Container>
        </>
     );
}

export default Main;