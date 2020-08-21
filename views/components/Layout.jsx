const React = require('react')

class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css"/>
                    {/* <link rel="stylesheet" href="style.css"/> */}
                </head>
                <body className='is-family-sans-serif'>

                  
                    
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
                        <a className='navbar-item is-tab' href='/compare'>Compare</a>
                        <a className='navbar-item is-tab' href='/function'>Explore</a>
                        </div>
                        </div>
                            
                            
                            </nav>



                  



                            {this.props.children}
                    
                   
                        
                </body>
            </html>
        )
    }
}

module.exports = Layout