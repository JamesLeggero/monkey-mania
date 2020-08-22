const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')

class Index extends React.Component {
    render() {
        const buchlas = this.props.buchlas
        return (
            <Default>
                <BuchlaLayout>
                    
                    <div className='columns is-multiline is-centered' style={{padding: '50px'}}>

                        {buchlas.map((buchla, i) => {
                            return (
                                <div className='column is-one-third'>
                                    
                                        <div key={buchla._id}className='card is-small' height='100%' >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{buchla.model}e {buchla.name}</p>
                                            </header>
                                            <div className='card-image'>
                                                <figure className='image'>
                                                <a href={`/buchla/${buchla._id}`}>
                                                    <img src={buchla.img} />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    
                                </div>
                            )
                        })}
                    </div>
                    
                    
                </BuchlaLayout>
            </Default>
        )
    }
}

module.exports = Index