import React from 'react'

function Buttons(filter) {
    return (
        <div>
            <button value="All" >All</button>
              <button value="Protocol">Protocol</button>
              <button value="Service">Service</button>
              <button value="Grant">Grant</button>
              <button value="Media">Media</button>
              <button value="Social">Social</button>
              <button value="Investment">Investment</button>
              <button value="Platform">Platform</button>
              <button value="Collector">Collector</button>
        </div>
    )
}

export default Buttons
