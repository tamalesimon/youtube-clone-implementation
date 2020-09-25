import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
        }
    }

    componentDidMount () {

    }
    
    render () {
        return (
        <div className="container mx-auto pt-5 items-center">            
            <SearchBar />
        </div>

        );
    }
}

export default App;
