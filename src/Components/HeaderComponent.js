import React, { useState } from 'react'; 
import applogo from '../logo.svg';
import search from '../search.svg';
import { Header, Container, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './HeaderStyles'     
function HeaderComponent() {
    const [myTimeoutId, setMyTimeoutId] = useState();
    const onChangeEvent = (e) => {
        clearTimeout(myTimeoutId);
        const myTimeout = setTimeout(() => console.log(e.target.value), 500); 
        setMyTimeoutId(myTimeout); 
    }
    return ( 
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
        </Container>
     );
}

export default HeaderComponent;