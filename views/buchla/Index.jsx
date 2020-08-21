const React = require('react')
const { model } = require('../../models/tests')

class Index extends React.Component {
    render(){
        const buchlas = this.props.buchlas
        return (
            <div className='container'>
                {buchlas.map((buchla, i)=>{
                    return (
                        <a className='cardLink' href={`/buchla/${buchla._id}`}>
                            <div className='productCard'>
                                <img src={buchla.img} height='200px' />
                                <h3>{buchla.model}e {buchla.name}</h3>
                            </div>
                        </a>
                    )
                })}



            </div>
        )
    }
}

module.exports = Index