const React = require('react')

class Edit extends React.Component {
    render(){
        const { _id, model, name, modFunction, description, img, voltageMax, voltageMin, acceptsNegative, isModule } = this.props.buchla
        return(
        
        <div>
            <h1>Buchla Edit Page</h1>
            <form action={`/buchla/${_id}?_method=PUT`} method='POST'>
                <h3>Model</h3><input type='text' name='model' value={model}/>
                <h3>Name</h3><input type='text' name='name' value={name}/>
                <h3>Function</h3><input type='text' name='modFunction' value={modFunction}/>

                <h3>Description</h3><input type='text' name='description' value ={description}/>
                <h3>Image Source</h3><input type='text' name='img' value={img}/>
                <h3>Max Voltage</h3><input type='text' name='voltageMax' value={voltageMax}/>

                <h3>Min Voltage</h3><input type='text' name='voltageMin' value={voltageMin}/>
                <h3>Accepts Negative Voltage?</h3><input type='checkbox' name='acceptsNegative' checked={acceptsNegative ? 'checked' : ''}/>
                <h3>Is Module?</h3><input type='checkbox' name='isModule' checked={isModule ? 'checked' : ''}/><br/>
                
                <input type='submit' name='' value='Update Buchla Module'/>
                
            </form>
        </div>
        )
    }
}

module.exports = Edit