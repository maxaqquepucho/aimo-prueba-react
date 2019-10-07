import React from 'react'
import { Link } from 'react-router-dom'

import UserData from '../data/data.json'
//style 
import '../assets/scss/FindUser.scss'
import ImgSeart from '../assets/images/binoculars.svg'


class FindUser extends React.Component<IFindUserProps, IFindUserState> {


    constructor(props: IFindUserProps) {
        super(props)

        this.state = {
            buscar: '',
            data: UserData.results,
            filtered: []
        }
    }

    handleBuscarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (value === '') {
            return this.setState({
                filtered: []
            })
        }

        this.setState({
            buscar: value,
            filtered: this.filteredList(value)
        })


    }

    filteredList(buscar: string) {
        return this.state.data.filter(user => {
            // console.log(article)
            let title: string = user.name.first + ' ' + user.name.last

            return title.toLowerCase().includes(buscar.toLowerCase())
        })
    }



    render() {
        return (
            <div className="container find-user-height">
                <div className="find-user">
                    <section className="buscador">
                        {/* <Link to={ '/user' } >go to user</Link>   */}
                        <div className="text-center">
                            <img src={ImgSeart} width="20%" alt="binoculares"/>
                        </div>
                        <h3 className="text-center ">Buscar Usuarios</h3>
                        <div className="input-group p-relative">
                            <input
                                className="input-search"
                                type="text"
                                name="buscar"
                                onChange={this.handleBuscarChange}
                            />

                            <div className="list-search">
                                <ul>
                                    {
                                        this.state.filtered.map((user, i) => {
                                            return (
                                                <li key={i} >
                                                    <Link to={`/${user.login.username}`} >
                                                        <img src={user.picture.thumbnail} width="7%" alt="user_image" />
                                                        <div className="user-name" >{user.name.first} {user.name.last}</div>

                                                    </Link>

                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        )

    }

}

interface IFindUserProps {

}


interface IFindUserState {
    buscar: string,
    data: any[],
    filtered: any[]
}

export default FindUser