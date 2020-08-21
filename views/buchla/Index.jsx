const React = require('react')
const Layout = require('../components/Layout.jsx')

class Index extends React.Component {
    render(){
        const buchlas = this.props.buchlas
        return (
            <Layout>
               
                <nav className='navbar is-success'>
                    <div className='navbar-start'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab has-text-weight-bold' href='/buchla'>Buchla</a>
                        </div>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab' href='/buchla/new'>Create New Module</a>
                        </div>
                    </div>
                </nav>





                {/* {buchlas.map((buchla, i) => {
                    return (
                        <a className='cardLink' href={`/buchla/${buchla._id}`}>
                            <div className='productCard'>
                                <img src={buchla.img} height='200px' />
                                <h3>{buchla.model}e {buchla.name}</h3>
                            </div>
                        </a>
                    )
                })}  */}
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


                 {/* <div className='footer'>
                <section className="hero is-small is-primary is-bold" >
                    <div className="hero-body">
                        <div className="container">
                            <h1 className='title is-size-4'>
                                Buchla USA<span style={{ float: 'right' }}><a href='/buchla/new' className='button is-dark' style={{ alignSelf: 'center' }}>Add New Module</a></span>
                            </h1>
                            <h2 className="subtitle is-size-6 has-text-weight-light">
                                Berkeley, CA
                                </h2>
                        </div>
                    </div>
                </section>
                </div> */}



            </Layout>
        )
    }
}

module.exports = Index