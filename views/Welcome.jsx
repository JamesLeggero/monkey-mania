const React = require('react')
const Default = require('./components/Default.jsx')

class Welcome extends React.Component {
    render(){
        return (
            <Default>
                <div style={{padding: '50px', height: '100vh', backgroundColor: 'rgba(255, 221, 87, .2)'}}>
                    <h1 className='title has-text-centered'>Monkey Mania</h1>
                    <h2 className='subtitle has-text-centered'>A place to compare banana synths</h2>
                <div className='columns' style={{padding: '50px'}}>
                    </div>
                    </div>




            </Default>
        )
    }

}

module.exports = Welcome