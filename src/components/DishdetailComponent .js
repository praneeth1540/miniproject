import React ,{ Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';


class Dishdetail extends Component {
renderDish(dish){
    if(dish != null){
        return(
            <Card>
           
               <CardImg  width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                <CardTitle><h2>{this.props.dish.name}</h2></CardTitle>
                <CardText >{this.props.dish.description}</CardText>
                
                </CardBody>
                
            </Card>
    
        );
    }
        

    }



renercomments(comments){
    if(comments != null)
    {
        const commentListItems = comments.map((comment)=>{
           return (
               <li key={comment.id}>
                   <p>{comment.comment}</p>
                   <p>--{comment.author},{comment.date} </p>
               </li>
           );
        });
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list=unstyles">
                    {commentListItems}
                </ul>
            </div>
        );
    
    
     
    }
    else{
        return(
           <div></div>
        );
    }
}

render(){
    if(this.props.dish != null){
        return(
            <div>
                
                {this.renderDish(this.props.dish)}
                {this.renercomments(this.props.dish.comments)}

            </div>
        );
}
else{
    return(<div></div>);
}
}

}

export  default Dishdetail;