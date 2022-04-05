import React from 'react';  
import { Headers, AppIconComponent, 
    AppNameComponent,SearchComponent, SearchIcon, 
    SearchInputComponent} from './headerStyles'   
 
 
function Header(props) {  
    return (  
            <Headers>   
                <AppNameComponent>
                    <AppIconComponent src={props.applogo}/>
                      Recipe Finder
                    </AppNameComponent>
                    <SearchComponent>
                        <SearchIcon src={props.search}/>
                        <SearchInputComponent placeholder='Seach for recipies with items' onChange={props.onChange}/>
                    </SearchComponent>  
            </Headers>  
     );
}

export default Header;