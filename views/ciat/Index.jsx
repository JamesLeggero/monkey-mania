const React = require('react')
const Default = require('../components/Default.jsx')
const CiatLayout = require('../components/CiatLayout.jsx')

class Index extends React.Component {
    render() {
        const ciats = this.props.ciats
        return (
            <Default>
                <CiatLayout>
                    
                    <div className='columns is-multiline is-centered' style={{padding: '30px'}}>

                        {ciats.map((ciat, i) => {
                            if (ciat.brand==='Ciat-Lonbarde'){
                            return (
                                <div className='column is-one-quarter'>
                                    
                                        <div key={ciat._id} className='card is-small' style={{maxWidth: '300px'}} >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{ciat.name}</p>
                                            </header>
                                            <div style={{padding: '20px'}}className='card-image'>
                                                <figure className='image'>
                                                <a href={`/ciat/${ciat._id}`}>
                                                    <img src={ciat.img} />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    
                                </div>
                            )}
                        })}
                    </div>
                    
                    
                </CiatLayout>
            </Default>
        )
    }
}

module.exports = Index