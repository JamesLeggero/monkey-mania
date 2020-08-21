const React = require('react')

class Show extends React.Component {
    render() {
        const { _id, model, name, description, img, voltageMax, voltageMin, acceptsNegative, isModule} = this.props.buchla
        return (
            <div>
                <div className='showLeftSide'>
                <h1>Model {model}e {name}</h1>
                <img src={img} />
                <div className='showButtons'>
                    <form action={`${_id}/edit`} method='GET'>
                        <input type='submit' value={`Edit ${model}e`}/>
                    </form>
                    <form action={`${_id}?_method=DELETE`} method='POST'>
                        <input type='submit' value={`Remove ${model}e`} />
                    </form>
                    </div>
                    </div>
                    <div className='showMiddle'>
                        <p>{description}</p>
                        <h3>The {name} operates between {voltageMax}v and {voltageMin}v and {
                        acceptsNegative? 'accepts' : 'does not accept'} negative voltage. {isModule ? 'It is unpowered and requires a powered case.' : 'It is a self-contained unit.'} </h3>


                    </div>
            </div>
        )
    }
}

module.exports = Show