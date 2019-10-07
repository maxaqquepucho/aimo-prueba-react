import React from 'react'

class Card extends React.Component<ICardProps, ICardState> {

    constructor(props: ICardProps) {
        super(props)
        
    }

    render() {
        return (
            <div className="card-user">
                <div className="card-header">
                    <img src={this.props.user.picture.large} width="150" alt="" />
                </div>
                <div className="card-body text-center">
                    <h2 className="user-name">
                        {this.props.user.name.title} {this.props.user.name.first || ''} {this.props.user.name.last || ''}
                    </h2>
                    <span className="card-email"> {this.props.user.email}</span> <br />
                    <span className="card-email"> Celular: {this.props.user.phone}</span>
                    {/* <div className="separador"></div> */}

                    <p className="street">La dirección de este usuario es <strong>{this.props.user.location.street.name} </strong>
                        e identficado con el número <strong>{this.props.user.location.street.number}</strong>. 
                        Tener en cuenta que los datos son solo ejemplos.
                    </p>
                    <div className="separador"></div>

                    <div className="come-from">
                        <span> <strong>País: </strong> {this.props.user.location.country}</span>
                        <span><strong>Estado: </strong>{this.props.user.location.state}</span>
                        <span><strong>Cuidad: </strong>{this.props.user.location.city}</span>
                    </div>

                </div>
                <div className="card-footer">

                </div>

                <div >

                </div>

            </div>
        )
    }

}

interface ICardProps {
    user: any
}

interface ICardState {
    
}

export default Card;