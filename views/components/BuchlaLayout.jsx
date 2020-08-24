const React = require('react')


class BuchlaLayout extends React.Component{
    render(){
        const buchlaStyle = {
            backgroundColor: 'rgba(0, 209, 178,.2)',
            minHeight: '100vh',
            maxHeight: '150vh',
            height: '5000px'
        }
        return (
            <body style={buchlaStyle}>
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

                {this.props.children}

                </body>
        )
    }
}

module.exports = BuchlaLayout