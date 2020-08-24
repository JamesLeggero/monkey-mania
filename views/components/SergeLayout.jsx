const React = require('react')

class SergeLayout extends React.Component{
    render(){
        const sergeStyle = {
            backgroundColor: 'rgba(32, 156, 238,.2)',
            minHeight: '100vh',
            maxHeight: '150vh',
            height: '5000px'
        }
        return (
            <body style={sergeStyle}>
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