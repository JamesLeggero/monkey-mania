const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')
// const Comment = require ()

class Edit extends React.Component {
    render(){
        const { _id, lowerCaseBrand, brand, model, name, abbreviation, modFunction, description, img, audioOutput, voltageMax, voltageMin, acceptsNegative, isModule } = this.props.buchla
        return(

<Default>
                <BuchlaLayout>
                    <div >
                        <div className='columns' style={{height: '100%', padding: '50px'}}>
                            <div className='column is-half'>
                        

                <form style={{maxWidth: '100%'}} action={`/buchla/${_id}?_method=PUT`} method='POST'>
                <input type='text' style={{display: 'none'}} name='lowerCaseBrand' value={lowerCaseBrand}/>    
                <input type='text' style={{display: 'none'}} name='brand' value={brand}/>
                    <div className='field'>
                        <label className='label'>Model Number</label>
                        <div className='control'>
                        <input type='text' name='model' value={model}/>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                        <input type='text' name='name' value={name}/>
                        </div>
                    </div>

                    <div className='field'>
                                <label className='label'>Abbreviation</label>
                                <div className='control'>
                                    <input type='text' name={abbreviation} />
                                </div>
                            </div>

                        <div className="field">
                            <label htmlFor='modFunction' className="label">Primary Function</label>
                            <div className="control">
                                <div className="select">

                                    <select name='modFunction' value={modFunction}>
                                        <option value='Oscillator'>Oscillator</option>
                                        <option value='Filter'>Filter</option>
                                        <option value='Envelope'>Envelope</option>
                                        <option value='VCA'>VCA</option>
                                        <option value='LFO'>LFO</option>
                                        <option value='OTHER'>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='field'>
                            <label className='label'>Description</label>
                            <div className='control'>
                                <textarea className='textarea' name='description' value={description}>
                                
                                </textarea>
                            </div>
                        </div>

                        <div className='field'>
                        <label className='label'>Image Source</label>
                        <div className='control'>
                        <input type='text' name='img' value={img}/>
                        </div>
                    </div>

                    <div className="field">
                            <label htmlFor='audioOutput' className="label">Audio I/O</label>
                            <div className="control">
                                <div className="select">

                                    <select name='audioOutput' value={audioOutput}>
                                        <option value='Banana'>Banana</option>
                                        <option value='1/8 Inch'>1/8 Inch</option> 
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    <div className='field'>
                        <label className='label'>Max Voltage</label>
                        <div className='control'>
                        <input type='text' name='voltageMax' value={voltageMax}/>
                        </div>
                    </div>
                    
                    <div className='field'>
                        <label className='label'>Min Voltage</label>
                        <div className='control'>
                        <input type='text' name='voltageMin' value={voltageMin}/>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <label className='checkbox'>
                                <input type='checkbox' name='acceptsNegative' checked={acceptsNegative ? 'checked' : ''}/> Accepts Negative Voltage?
                            </label>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <label className='checkbox'>
                                <input type='checkbox' name='isModule' checked={isModule ? 'checked' : ''} /> Is a Module?
                            </label>
                        </div>
                    </div>




                    <input className='button is-success' type='submit' name='' value='Update Buchla'/>
                
            </form>
            </div>
            <div className='column is-half'>
                <figure className='image'>
                <img style={{maxWidth: '250px'}} src={img} />
                </figure>

                </div>
            </div>
            </div>
            </BuchlaLayout>
            </Default>



            )
        }
    }
    
    module.exports = Edit