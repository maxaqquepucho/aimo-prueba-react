import React from 'react'
import { RouteComponentProps } from 'react-router-dom'


import data from '../data/data'

import '../assets/scss/User.scss'

//components
import Card from '../components/Card'

class User extends React.Component<IUserProps, IUserState> {

    constructor(props: IUserProps) {
        super(props)

        this.state = {
            username: this.props.match.params.username,
            user: {
                name: {},
                picture: {},
                location: {
                    street: {}
                }
            }
        }
    }

    componentDidMount() {
        this.setState({
            user: this.findUser()[0]
        })
    }

    findUser() {
        return data.results.filter( (user: any) => {

            return user.login.username.toLowerCase().includes(this.state.username.toLowerCase())
        })
    }

    render() {
        return (
            <div className="container p-relative">               
                <div className="user-container">
                    <Card user={this.state.user}  />
                </div>
            </div>
        )
    }
}

interface IUserProps extends RouteComponentProps<{ username: string }> {

}

interface IUserState {
    user: any,
    username: string
}

export default User