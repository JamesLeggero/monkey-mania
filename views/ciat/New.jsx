const React = require('react')
const Default = require('../components/Default.jsx')
const CiatLayout = require('../components/CiatLayout.jsx')

class New extends React.Component {
   render(){
        return(
            <Default>
                <CiatLayout>
                    <div style={{height: '100vh', margin: '50px', marginBottom: '-50px'}}>

                <form style={{maxWidth: '33%'}} action='/ciat' method='POST'>
                    <input type='text' style={{display: 'none'}} name='lowerCaseBrand' value='ciat'/>
                    <input type='text' style={{display: 'none'}} name='brand' value='Ciat-Lonbarde'/>

                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                        <input type='text' name='name'/>
                        </div>
                    </div>

                        <div className="field">
                            <label htmlFor='modFunction' className="label">Primary Function</label>
                            <div className="control">
                                <div className="select">

                                    <select name='modFunction'>
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
                            <textarea className='textarea' name='description'>
                                
                                </textarea>
                            </div>
                        </div>

                        <div className='field'>
                        <label className='label'>Image Source</label>
                        <div className='control'>
                        <input type='text' name='img'/>
                        </div>
                    </div>

                    <div className="field">
                            <label htmlFor='audioOutput' className="label">Audio I/O</label>
                            <div className="control">
                                <div className="select">

                                    <select name='audioOutput'>
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
                        <input type='text' name='voltageMax'/>
                        </div>
                    </div>
                    
                    <div className='field'>
                        <label className='label'>Min Voltage</label>
                        <div className='control'>
                        <input type='text' name='voltageMin'/>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <label className='checkbox'>
                                <input type='checkbox' name='acceptsNegative' /> Accepts Negative Voltage?
                            </label>
                        </div>
                    </div>

                    
                                <input style={{display: 'none'}}type='checkbox' name='isModule' />
                  




                    <input className='button is-success' type='submit' name='' value='Create New Ciat'/>
                
            </form>


                
        </div>


        </CiatLayout>
            </Default>
        )
    }
}

module.exports = New