import React from 'react'; 
import applogo from '../logo.svg';
import search from '../search.svg';
import { Header, Container, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './HeaderStyles'     
function HeaderComponent() {
    return ( 
        <Container >
            <Header> 
                <AppNameComponent>
                    <AppIconComponent src={applogo}/>
                     Recipe Finder
                </AppNameComponent>
                <SearchComponent>
                    <SearchIcon src={search}/>
                    <SearchInputComponent placeholder='Seach for recipies with items' />
                </SearchComponent>  
            </Header> 
        </Container>
     );
}

export default HeaderComponent;