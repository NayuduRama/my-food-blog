import React from 'react';  
import { Header, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './headerStyles'   
 
 
function HeaderComponent(props) {  
    return (  
            <Header>   
                <AppNameComponent>
                    <AppIconComponent src={props.applogo}/>
                      Recipe Finder
                    </AppNameComponent>
                    <SearchComponent>
                        <SearchIcon src={props.search}/>
                        <SearchInputComponent placeholder='Seach for recipies with items' onChange={props.onChange}/>
                    </SearchComponent>  
            </Header>  
     );
}

export default HeaderComponent;