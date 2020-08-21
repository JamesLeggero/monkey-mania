const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')

class New extends React.Component {
   render(){
        return(
            <Default>
                <BuchlaLayout>

                <form action='/buchla' method='POST'>
                    <div className='field'>
                        <label className='label'>Model Number</label>
                        <div className='control'>
                        <input type='text' name='model'/>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                        <input type='text' name='name'/>
                        </div>
                    </div>

                        <div className="field">
                            <label for='modFunction' className="label">Primary Function</label>
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
                                <input type='text' className='textarea' name='description' />
                            </div>
                        </div>

                        <div className='field'>
                        <label className='label'>Image Source</label>
                        <div className='control'>
                        <input type='text' name='img'/>
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
                                <input type='checkbox' name='acceptsNegative' />Accepts Negative Voltage?
                            </label>
                        </div>
                    </div>

                    <div className='field'>
                        <div className='control'>
                            <label className='checkbox'>
                                <input type='checkbox' name='isModule' checked />Is a Module?
                            </label>
                        </div>
                    </div>




                    <input type='submit' name='' value='Create New Buchla'/>
                
            </form>


                    

           
        {/* <div>
            <h1>New Buchla Creation Page</h1>
            <form action='/buchla' method='POST'>
                <h3>Model</h3><input type='text' name='model'/>
                <h3>Name</h3><input type='text' name='name'/>
                <h3>Function</h3><input type='text' name='modFunction'/>

                <h3>Description</h3><input type='text' name='description'/>
                <h3>Image Source</h3><input type='text' name='img'/>
                <h3>Max Voltage</h3><input type='text' name='voltageMax'/>

                <h3>Min Voltage</h3><input type='text' name='voltageMin'/>
                <h3>Accepts Negative Voltage?</h3><input type='checkbox' name='acceptsNegative'/>
                <h3>Is Module?</h3><input type='checkbox' name='isModule' checked/><br/>
                
                <input type='submit' name='' value='Create New Buchla'/>
                
            </form>
        </div> */}


        </BuchlaLayout>
            </Default>
        )
    }
}

module.exports = New