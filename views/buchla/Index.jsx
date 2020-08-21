const React = require('react')
const Layout = require('../components/Layout.jsx')

class Index extends React.Component {
    render(){
        const buchlas = this.props.buchlas
        return (
            <Layout>
            <section className="hero is-small is-primary is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title is-size-4-mobile ">
        Buchla USA<span style={{float: 'right'}}><a href='/buchla/new' className='button is-dark'>Add New Module</a></span>
      </h1>
      <h2 className="subtitle is-size-6-mobile has-text-weight-light">
        Berkeley, CA
      </h2>
    </div>
  </div>
</section>






                {/* {buchlas.map((buchla, i) => {
                    return (


                        <a className='cardLink' href={`/buchla/${buchla._id}`}>
                            <div className='productCard'>
                                <img src={buchla.img} height='200px' />
                                <h3>{buchla.model}e s{buchla.name}</h3>
                            </div>
                        </a>
                    )
                })} */}

                {/* <form action='buchla/new' method='GET'>
                    <input type='submit' value='Create New Module' />
                </form> */}

            </Layout>
        )
    }
}

module.exports = Index