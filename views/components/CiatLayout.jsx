const React = require('react')


class CiatLayout extends React.Component{
    render(){
        const ciatStyle = {
            backgroundColor: 'rgba(255, 56, 96,.2)',
            minHeight: '100vh',
            maxHeight: '150vh',
            height: '5000px'
        }
        return (
            <body style={ciatStyle}>
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