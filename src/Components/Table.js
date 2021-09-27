import React from 'react'
import Data from '../daolist.json'
import '../App.css'
import Buttons from './Buttons'



class Table extends React.Component {
  constructor(props) {
    super(props);
    this.inputChg = this.inputChg.bind(this);
    this.filter = this.filter.bind(this);
    this.button = this.allCategories.bind(this)
  };
  
  inputChg(event){
    this.props.filterText(event.target.value);
  }
  filter(button){
    const filterData = Data.filter(Data.category === button);
    
  }
  allCategories(butons){
    const allCategories = ['All', 'All', ...Data.map(Data => Data.category ===butons)];
  }

    render () {
      
    return (
      <div>
      
        <div className="app-container">
            <div className="tableDets">
                <button id="numDAO">Number of DAOs<br /><p>111</p></button>
                <button id="totAUM">Total AUM(USD)<br /><p id="addedFIG">$7,747,011,573</p></button>
                
            </div>
            <div id="tableHeader">
              
              <Buttons />
            </div>

      <table id="table">
          <hr />
        <thead>
          <tr>
            <th>
              <button id="thName">NAME</button>
            </th>
            <th>
              <button id="thBtn" className="cate">CATEGORY</button>
            </th>
            <th>
              <button  id="thBtn" className="aum">AUM (USD)</button>
            </th>
            <th>
              <button id="thBtn"  className="twit">TWITTER<br />FOLLOWERS</button>
            </th>
            <th>
              <button id="thBtn"  className="date">FOUNDED DATE</button>
            </th>
          </tr>
        </thead>
        <hr />
        <tbody>
          {Data.map((val, key) => {
            const filterValue = this.props.filterValue;
            const listName = val.name;
            const listCate = val.category;
            if((!filterValue) || (listName.toLowerCase().indexOf(filterValue)!==-1)){
            return (
            <tr>
              <td id="tableName" key={key}> <div> <img src={val.img} alt="" id="img" /> </div><div id="nameTxt">{val.name}</div></td>
              <td> {val.category} </td>
              <td> {val.aum} </td>
              <td> {val.twl} </td>
              <td> {val.foundDate } </td>
            </tr>
                  )
                }})}
        </tbody>
      </table>
      
    </div>
    </div>
    )
  }
}

export default Table
