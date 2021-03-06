const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')
class Show extends React.Component {
    render(){
        const { _id, brand, model, name, modFunction, description, audioOutput, img, voltageMax, voltageMin, acceptsNegative, isModule} = this.props.buchla
        return(
            <Default>
                <BuchlaLayout>
                    <div className='columns' style={{height: '100vh'}}>

                    <div className='column is-one-third' >
                        <div className='section'>
                            <div className='container'>
                            <h1 className='title '>Model {model}e {name}</h1>
                            <h2 className='subtitle'>{isModule? 'Module' : 'Standalone'}</h2>
                            <div className='buttons'>

                            <form className='column is-half' action={`${_id}/edit`} method='GET'>
                        <input style={{width: '100%'}}className='button is-warning' type='submit' value={`Edit`}/>
                    </form>
                                
                                <form className='column is-half' action={`${_id}?_method=DELETE`} method='POST'>
                        <input style={{width: '100%'}}className='button is-danger' type='submit' value={`Remove`} />
                    </form>


                                

                            </div>
                            <img className ='image' style={{maxHeight: '500px', marginBottom: '10px'}} src={img}/>

                            </div>
                            
                        </div>
                        </div>
                        <div className='column is-one-third'>
                            <div className='section'>
                                <div className='container'>
                                    <h2 className='title has-text-centered'>Function: {modFunction}</h2>
                                    <h3 className='subtitle has-text-centered is-size-6'>Voltage: {voltageMin}v to {voltageMax}v<br />
                                    {acceptsNegative? 'Accepts Negative Voltage' : 'Does Not Accept Negative Voltage'}<br />
                                    Audio Jacks: {audioOutput}</h3>
                                    
                                    <p className='has-text-justified'>{description}</p>
                                </div>
                            
                        </div>
                    </div>
                    </div>







                </BuchlaLayout>
            </Default>
        )
    }
}

module.exports = Show