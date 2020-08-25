const React = require('react')
const Default = require('./components/Default.jsx')

class About extends React.Component {
    render() {
        const twoItems = () =>{
            for (let i = 0; i < 2; i++){
                // console.log(this.props.modules[rand]['name'])
                const rand = Math.floor(Math.random() * this.props.modules.length)
            return (
                <div className='column is-half is-centered'>
                                    
                                        <div key={this.props.modules[rand]['_id']} className='card is-small' style={{maxWidth: '300px'}} >
                                            <header className='card-header'>
                                                <p className='card-header-title is-centered'>{this.props.modules[rand]['brand']} {this.props.modules[rand]['name']}</p>
                                            </header>
                                            <div style={{padding: '20px'}}className='card-image'>
                                                <figure className='image'>
                                                <a href={`/${this.props.modules[rand]['lowerCaseBrand']}/${this.props.modules[rand]['_id']}`}>
                                                    <img src={this.props.modules[rand]['img']} />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    
                                </div>
            )
            }

        }
        return (
            <Default>
                <body style={{backgroundColor: 'rgba(255, 221, 87, .2)', height: '100vh'}}>
                <div className='columns' style={{padding: '50px'}}>
                    <div className='column is-half'>
                <div className='container has-text-centered'>
                <h1 className='title'>Welcome to Monkey Mania!</h1>
                <p className='has-text-justified'>I made Monkey Mania to showcase some of my favorite kinds of monophonic synthsizers - those with banana jacks! Many of these synths are fully- or semi-modular and open up a large world of fascinating soundscapes. You can get started by checking out the format by brand, or just click on a module to learn more!</p>
                </div>
                <div style={{marginBottom: '30px'}}></div>

                {twoItems()}
                
                
                </div>
                
                <div className='column is-half'>
                    <h1 className='title has-text-centered'>Get in Touch</h1>
                    
                    <form action='/about' method='POST'>
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div class="control">
                                        <input className="input" name='name' type="text" placeholder="Text input" />
                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label">Email</label>
                                    <div class="control">
                                        <input className="input" name='email' type="text" placeholder="Text input" />
                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label">Message</label>
                                    <div class="control">
                                        <textarea className="textarea" name='message' type="text" placeholder="Text input" />
                                    </div>

                                </div>

                                <input className='button is-success' type='submit' name='' value='Send Message'/>

                                



                    </form>
                </div>
                    
                </div>
               
                
                </body>
            </Default>
        )

    }
}




module.exports = About