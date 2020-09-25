import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            searchTearm: ''
        }
    }

    handleSearch = (e) => {            
     this.setState({searchTearm: e.target.value})    
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="pt-2 relative mx-auto text-gray-600">
                <div className="">
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            value={this.state.searchTearm}
                            onChange={this.handleSearch}
                            type="text"
                            placeholder="Search"
                            className=" border-gray-300 lg:w-full md:w-2/3 border-2 h-12 px-5 pr-16 text-lg focus:outline-none" />
                        <button type="submit" class=" border-gray-300 border-2 px-3 py-3 bg-gray-100 absolute bottom-0 h-12 w-12 items-center align-middle mt-5 mr-4 focus:outline-none">
                            <svg class="text-gray-500 h-5 w-5 fill-current" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div >
        );
    }
}

export default SearchBar;
