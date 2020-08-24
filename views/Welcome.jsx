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
                    <div className='column is-half'>
                        <div className='card' style={{marginBottom: '50px'}}>
                            <div className='card-content'>
                                <div className='content'>
                                    <p className='is-size-7'>Banana synths are a subset of patchable monophonic synthesizers and sound devices that use "banana jacks" for their audio and control voltage patch connections. They make duplicating and mixing signals simple and straightforward, and they're typically built to a higher specification than modular synths that use 1/8" jacks for CV.</p><br /><p className='is-size-7'> Though banana synths can be patched together and combined, it's often difficult to find information on votalge requirements between different manufacturers, leading to frustration and possible electronic damage. Here you'll find three prominent makers of banana jack products to easily compare voltage specs, jack configuration, and more!</p>
                                </div>
                            </div>

                        </div>

                        {/* <div className='card'  > */}
                            {/* <div className='card-content'>
                                <div className='content'> */}
                                    
                                    {/* </div>
                                </div> */}
                            {/* </div> */}

                        </div>

                        <div className='column'>
                            <a href='/buchla'>
                        <section className='hero is-primary is-bold' style={{padding: '20px', marginBottom: '20px'}}>
                                        <div className='hero-head'>
                                            <h1 className='title'>Buchla</h1>
                                            </div>
                                            <div className='hero-foot has-text-right'>
                                                <h2 className='subtitle'>Berkeley, CA</h2>
                                                </div>

                                        </section>
                                        </a>

                                        <a href='/serge'>
                                        <section className='hero is-info is-bold' style={{padding: '20px', marginBottom: '20px'}}>
                                        <div className='hero-head'>
                                            <h1 className='title'>Serge</h1>
                                            </div>
                                            <div className='hero-foot has-text-right'>
                                                <h2 className='subtitle'>Frankfurt, Germany</h2>
                                                </div>

                                        </section>
                                        </a>

                                            <a href='/ciat'>
                                        <section className='hero is-bold is-danger' style={{padding: '20px', marginBottom: '20px'}}>
                                        <div className='hero-head'>
                                            <h1 className='title'>Ciat-Lonbarde</h1>
                                            </div>
                                            <div className='hero-foot has-text-right'>
                                                <h2 className='subtitle'>Portland, OR</h2>
                                                </div>

                                        </section>
                                                </a>

                        </div>
                    </div>
                    </div>
                    




            </Default>
        )
    }

}

module.exports = Welcome