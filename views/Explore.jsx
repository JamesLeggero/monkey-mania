const React = require('react')
const Default = require('./components/Default.jsx')


const styleCheck=()=>{
    // if(module.brand==='Buchla'){
    //     return 'rgba(0, 209, 178,.2)'
    // } else if (module.brand==='Serge'){
    //     return 'rgba(32, 156, 238,.2)'
    // }
    
    // return {backgroundColor: 'rgba(32, 156, 238,.2)'}
    switch(module.brand){
        case 'Buchla':
            return 'rgba(0, 209, 178,.2)';
        case 'Serge':
            return 'rgba(32, 156, 238,.2)';
        default:
            return 'none'
    }


    
    }

    


class Explore extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {value: ''}

    // }
    // handleChange = (event) =>
    //     this.setState({ value: event.target.value });

    // handleSubmit = (event) => {
    //     this.props.modules.map((module)=>{
    //         if (module.modFunction === param.value){
    //             return (
    //                 <img src={module.img} />
    //             )
    //         }
    //     })
        
    //     event.preventDefault();
    // }

   
    
    render(){
    
        // const displaySelected = (param)=>{
        //     // const value = modFunction.value
        //     this.props.modules.map((module)=>{
        //         if (module.modFunction === param.value){
        //             return (
        //                 <img src={module.img} />
        //             )
        //         }
        //     })
        // }
        
        // const { _id, brand, model, name, modFunction, description, img, audioOutput, voltageMax, voltageMin, acceptsNegative, isModule } = this.props.modules
        return (
            <Default>
                <div style={{height: '100vh', backgroundColor: 'rgba(255, 221, 87, .2)'}}>
                <div className='columns' style={{padding: '50px'}}>

                <div className='column is-half comparison-table'>
                    <h1 className='title has-text-left'>Comparison Table</h1>
                    {/* {
                        this.props.modules.map((module) => {
                            return <h2>{module.brand}</h2>
                        })
                    } */}

                    
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Audio</th>
                                <th>V+/-</th>
                                <th>Neg?</th>
                                <th>Module?</th>
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Audio</th>
                                <th>V+/-</th>
                                <th>Neg?</th>
                                <th>Module?</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {this.props.modules.map((module)=>{
                                
                                return (
                                    <tr style={{backgroundColor: styleCheck}}>
                                    <th>{module.brand}</th>
                                    <td>{module.model? `${module.model}e ${module.name}` : `${module.name}`}</td>
                                    <td>{module.audioOutput}</td>
                                    <td>{module.voltageMax}/{module.voltageMin}</td>
                                    <td style={{backgroundColor: module.acceptsNegative? 'rgba(0,255,0, .2)' : 'rgba(255,0,0,.2'}}>{module.acceptsNegative? 'Yes' : 'No'}</td>
                                    <td style={{backgroundColor: module.isModule? 'rgba(0,255,0, .2)' : 'rgba(255,0,0,.2'}}>{module.isModule? 'Yes' : 'No'}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='column is-half dropdown-comparison'>
                    <h1 className='title has-text-right'>Compare By Function</h1>
                    <form onSubmit={this.handleSubmit}>

                    <div className="field">
                            <label htmlFor='modFunction' className="label">Primary Function
                            <div className="control">
                                <div className="select">

                                    <select name='modFunction' onChange={this.handleChange}>
                                        <option value='Oscillator'>Oscillator</option>
                                        <option value='Filter'>Filter</option>
                                        <option value='Envelope'>Envelope</option>
                                        <option value='VCA'>VCA</option>
                                        <option value='LFO'>LFO</option>
                                        <option value='OTHER'>Other</option>
                                    </select>
                                </div>
                            </div>
                            </label>
                            <input className='is-primary' type="submit" value="Submit" />

                        </div>
                        </form>
                        


                </div>


                </div>




                </div>
            </Default>
            
           
        )
    }
}

module.exports = Explore