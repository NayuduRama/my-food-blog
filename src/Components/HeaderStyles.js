import styled from 'styled-components';

export const Container = styled.div`
                    display: flex;
                    flex-direction: column;
                    `;
export const Header = styled.div`
display:flex;
flex-direction: row;
color: white;
background-color: black;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
align-items: center;
justify-content: space-between;
`;   
export const AppNameComponent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
export const AppIconComponent = styled.img`
width: 56px;
height:56px;
margin:15px
`;
export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radious: 6px;
width: 50%; 
`;  
export const SearchIcon = styled.img`
width: 46px;
height:46px;
`;
export const SearchInputComponent = styled.input`
border: none;
font-weight: bold;
outline: none;
margin-left: 10px;
font-size: 16px; 
width: 80%
`;  