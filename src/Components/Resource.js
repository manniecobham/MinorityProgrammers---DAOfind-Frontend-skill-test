import resourceData from './resourseData'

function resource() {
    
    return (
        <div className="app-container">
            <div>
                <h1>Resources</h1>
                <div className="parentLearn">
                    {resourceData.map((words) => {
                    return (
                        <div className="learnCard">
                            <div className="learnImg">
                            <img src={words.img} alt=""/>
                            </div>
                            <div className="learnHead">
                            <h2>{words.header}</h2>
                            </div>
                            <div className="learnDesc">
                            <p>{words.body}</p>
                            <a href={words.button} target="blank" >Learn more </a>
                            </div>
                        </div>
        
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

export default resource
