const React = require('react')

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>New Buchla Creation Page</h1>
            <form action='/buchla' method='POST'>
                <h3>Model</h3><input type='text' name='model'/>
                <h3>Name</h3><input type='text' name='name'/>
                <h3>Function</h3><input type='text' name='function'/>

                <h3>Description</h3><input type='text' name='description'/>
                <h3>Image Source</h3><input type='text' name='img'/>
                <h3>Max Voltage</h3><input type='text' name='voltageMax'/>

                <h3>Min Voltage</h3><input type='text' name='voltageMin'/>
                <h3>Accepts Negative Voltage?</h3><input type='checkbox' name='acceptsNegative'/>
                <h3>Is Module?</h3><input type='checkbox' name='isModule' checked/><br/>
                
                <input type='submit' name='' value='Create New Buchla'/>
                
            </form>
        </div>
        )
    }
}

module.exports = New