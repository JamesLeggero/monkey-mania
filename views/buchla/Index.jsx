const React = require('react')
const Default = require('../components/Default.jsx')
const BuchlaLayout = require('../components/BuchlaLayout.jsx')

class Index extends React.Component {
    render() {
        const buchlas = this.props.buchlas
        return (
            <Default>
                <BuchlaLayout>
                    <div className='columns is-multiline is-centered'>

                        {buchlas.map((buchla, i) => {
                            return (
                                <div className='column is-one-third'>
                                    <a href={`/buchla/${buchla._id}`}>
                                        <div className='cardis-small' height='100%' >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{buchla.model}e {buchla.name}</p>
                                            </header>
                                            <div className='card-image'>
                                                <figure class='image'>
                                                    <img src={buchla.img} />
                                                </figure>
                                            </div>
                                        </div>
                                    </a>
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