const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')

class Index extends React.Component {
    render() {
        const buchlas = this.props.buchlas
        return (
            <Default>
                <BuchlaLayout>
                    
                    <div className='columns is-multiline is-centered' style={{padding: '30px'}}>

                        {buchlas.map((buchla, i) => {
                            if (buchla.brand==='Buchla'){
                            return (
                                <div className='column is-one-quarter'>
                                    
                                        <div key={buchla._id} className='card is-small' style={{maxWidth: '300px'}} >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{buchla.model}e {buchla.name}</p>
                                            </header>
                                            <div style={{padding: '20px'}}className='card-image'>
                                                <figure className='image'>
                                                <a href={`/buchla/${buchla._id}`}>
                                                    <img src={buchla.img} />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    
                                </div>
                            )}
                        })}
                    </div>
                    
                    
                </BuchlaLayout>
            </Default>
        )
    }
}

module.exports = Index