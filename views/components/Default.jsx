const React = require('react')

class Default extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
  <script src="../js/app.js" defer></script>

                </head>
                <body className='is-family-sans-serif has-fixed-bottom'>  
                    <nav className='navbar is-warning'>
                        <div className='navbar-start'>
                        <div className='navbar-brand'>
                            <a className='navbar-item has-text-weight-bold' href='/'>Monkey Mania</a>
                            <a className='navbar-item is-tab' href='/buchla'>Buchla</a>
                            <a className='navbar-item is-tab' href='/serge'>Serge</a>
                            <a className='navbar-item is-tab' href='/ciat'>Ciat-Lonbarde</a>
                            </div>
                            </div>
                        <div className='navbar-end'>
                            <div className='navbar-brand'>
                        <a className='navbar-item is-tab' href='/about'>About</a>
                        <a className='navbar-item is-tab' href='/explore'>Explore</a>
                        </div>
                        </div>  
                            </nav>
                            {this.props.children}     
                </body>
            </html>
        )
    }
}

module.exports = Default