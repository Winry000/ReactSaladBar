import React, { Component } from 'react';

class AdminCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: 'xxx@gmail.com',
            name: 'xxx'
        }
    }
    render() {
        return (
            <div>   
                <div className='contact-avatar' style={{
                    backgroundImage: `url("../icons/avatar1.png")`
                }}/>
                <div className='contact-detail'>
                    <p>Name</p><input placeholder={this.state.name}/>
                    <p>Email: {this.state.email}</p>
                </div>
                <button>
                    Save
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      member: state
    }
}

export default AdminCard;