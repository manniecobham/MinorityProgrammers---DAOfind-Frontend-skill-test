import React from 'react'
import '../App.css'

class HeadSearch extends React.Component {
    constructor(props) {
        super(props);
        this.inputChg = this.inputChg.bind(this);
    }
    inputChg(event){
        this.props.filterText(event.target.value);
    }
    render() {
    return (
            <div>
                <div className="search">
                <input type="text" id="mySearch" onChange={this.inputChg} value={this.props.filterValue} name="fullName" placeholder="Search Dao"></input>
                </div>
            </div>
        )
    }
}

export default HeadSearch;
