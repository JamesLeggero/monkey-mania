const React = require('react')

class CiatLayout extends React.Component{
    render(){
        return (
            <body style={{backgroundColor: 'rgba(255, 56, 96,.2)', height: '100%'}}>
            <nav className='navbar is-danger'>
                    <div className='navbar-start'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab has-text-weight-bold' href='/ciat'>Ciat-Lonbarde</a>
                        </div>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-brand'>
                            <a className='navbar-item is-tab' href='/ciat/new'>Create New Instrument</a>
                        </div>
                    </div>
                </nav>

                {this.props.children}

                </body>
        )
    }
}

module.exports = CiatLayout