const React = require('react')
const Default = require('../components/Default.jsx')
const SergeLayout = require('../components/SergeLayout.jsx')

class Index extends React.Component {
    render() {
        const serges = this.props.serges
        return (
            <Default>
                <SergeLayout>
                    
                    <div className='columns is-multiline is-centered' style={{padding: '30px'}}>

                        {serges.map((serge, i) => {
                            if (serge.brand==='Serge'){
                            return (
                                <div className='column is-one-quarter'>
                                    
                                        <div key={serge._id} className='card is-small' style={{maxWidth: '300px'}} >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{serge.name}</p>
                                            </header>
                                            <div style={{padding: '20px'}}className='card-image'>
                                                <figure className='image'>
                                                <a href={`/serge/${serge._id}`}>
                                                    <img src={serge.img} />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    
                                </div>
                            )}
                        })}
                    </div>
                    
                    
                </SergeLayout>
            </Default>
        )
    }
}

module.exports = Index