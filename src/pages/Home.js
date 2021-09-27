import Sidebar from '../Components/Sidebar';
import HeadSearch from '../Components/HeadSearch';
import Table from '../Components/Table'
import React from 'react'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pass : false,
            filterText :''
        }
        this.srchText = this.srchText.bind(this);
    }
    inputPass(){
        this.setState({pass : !this.state.pass});
    }
    srchText(srchValue){
        this.setState({filterText : srchValue})
    }
    render(){
    return (
        <>
        <div>
            <Sidebar />
            <HeadSearch filterValue={this.state.filterText} filterText={this.srchText}/>
            <Table filterValue={this.state.filterText} filterPass={this.state.pass}/>
        </div>
        </>
        )
    }
}

export default Home
