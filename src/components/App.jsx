import React from 'react';
import Youtube from '../Api/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetails';
import VideoList from './VideoList';

import '../components/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            youtubeVideos: [],
            videoSelect: null
        }
    }

    componentDidMount() {
        this.handleSearchTermSubmit('youtube');
    }
    
    handleSearchTermSubmit = async (searchTerm) => {
        const response = await Youtube.get('/search', {
            params: {q: searchTerm}            
        });
        
        console.log(response)
        this.setState({
            youtubeVideos: response.data.items,
            videoSelect: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            videoSelect: video
        })
        
    
    }
        
    
    render () {
        return (
            <div className="container mx-auto">
                <div>
                    <div>
                        <SearchBar onFormSubmit={this.handleSearchTermSubmit} />
                    </div>
                    <div className="flex-row flex">
                        <VideoDetail video={this.state.videoSelect} />
                        <VideoList videos={this.state.youtubeVideos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
