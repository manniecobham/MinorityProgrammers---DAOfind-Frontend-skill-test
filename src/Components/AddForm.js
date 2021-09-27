import React, { useState } from 'react'
import '../App.css'
import Data from '../daolist.json'

function AddForm() {
    const [contacts, setContacts] = useState(Data);
    const [addFormData, setAddFormData] = useState({
        id:'',
        name : '',
        category: '',
        aum: '',
        twl: '',
        foundDate: ''
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            name: addFormData.name,
            category: addFormData.name,
            aum: addFormData.aum,
            twl: addFormData.twl,
            foundDate: addFormData.foundDate
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };
    return (

        <div className="formParent">
            <form onSubmit={handleAddFormSubmit}>
                <div>
                    <h1>Add DAO Form</h1>
                </div>
                <div className="parentDiv">
                    <div className="formName form-div">
                        <label>Full Name</label><br/>
                        <input value="name" className="fname" onChange={handleAddFormChange}/>
                    </div>
                    <div className="form-div">
                    <label>Category</label><br/>
                        <input value="category" className="fname"/>
                    </div>
                </div>
                <div  className="parentDiv">
                    <div className="form-div">
                        <label>Token Symbol </label><br/>
                        <input value="aum" className="dfound"/>
                    </div>
                    <div className="form-div">
                        <label>Date Found</label><br/>
                        <input value="foundDate" className="dfound"/>
                    </div>
                    <div className="form-div">
                        <label>Governance Token Name</label><br/>
                        <input className="dfound" />
                    </div>
                </div>
                <div  className="parentDiv">
                <div className="form-div">
                        <label>Twitter Symbol</label><br/>
                        <input  className="dfound" />
                    </div>
                    <div className="form-div">
                        <label>Discord</label><br/>
                        <input className="dfound" />
                    </div>
                    <div className="form-div">
                        <label>Website</label><br/>
                        <input className="dfound" />
                    </div>
                </div>
                <div className="parentDiv">
                    <div className="form-div">
                        <label>TVL</label><br/>
                        <input value="twl" className="dfound"/>
                    </div>
                    <div className="form-div">
                        <label>Blockchain</label><br/>
                        <input className="dfound" />
                    </div>
                    <div className="form-div">
                        <label>Headquarters</label><br/>
                        <input className="dfound" />
                    </div>
                </div>
                <div className="parentDiv descSub">
                    <div className="form-div">
                    <label>Description</label><br/>
                    <input className="formDesc" placeholder="Brief Description"></input>
                    </div>
                    <div className="form-div">
                        <button type="submit" className="formbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddForm
