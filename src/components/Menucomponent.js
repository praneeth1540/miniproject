import React ,{ Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent ';
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                   <div className="col-12 col-md-5 m-1">
                   <CardImg  width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                    <CardText >{dish.description}</CardText>
                    
                    </CardBody>
                    </div>
                    
                </Card>
        
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


  

    render(){
        const menu = this.props.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        
                        <CardImgOverlay>
                            <CardTitle><h2>{dish.name}</h2></CardTitle>
                    
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className="row">
                    
                        {menu}
                        
                    
                </div>
                <div className="row">
                    
                    {<Dishdetail dish={this.state.selectedDish}/>}
                    
                </div>

            </div>
        );
    }
}

export default Menu;