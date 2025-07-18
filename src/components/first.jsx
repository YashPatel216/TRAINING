import React from 'react';
class First extends React.Component {
    constructor() {
        super();
        this.state = {color:'blue'};
        // In this case, we are initializing the 
        this.state = {brand:'suzuki'};
    }
     render()
        {
            return (
                <div>
                    <h2>this is a state example</h2>
                    <h2>brand is {this.state.brand}</h2>
                    <h2>color is {this.state.color}</h2>
                    </div>
            );
        }
}
export default First;
