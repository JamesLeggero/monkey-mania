const React = require('react')

class SergeLayout extends React.Component{
    render(){
        return (
            <body style={{backgroundColor: 'rgba(32, 156, 238,.2)', height: '100%'}}>
            <nav className='navbar is-info'>
                    <div className='navbar-start'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab has-text-weight-bold' href='/serge'>Serge</a>
                        </div>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab' href='/serge/new'>Create New Module</a>
                        </div>
                    </div>
                </nav>

                {this.props.children}

                </body>
        )
    }
}

module.exports = SergeLayout