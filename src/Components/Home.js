import React from 'react';
import { CardTitle, CardImg, CardBody, CardSubtitle ,CardText,Card} from 'reactstrap';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    RenderMethod(item){
        return(
            <div className="container">
                <Card>
                    <CardImg src={item.image} alt={item} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }



    render(){
        return(
            <div>
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-md-4">
                          {this.RenderMethod(this.props.dish)}
                      </div>

                      <div className="col-12 col-md-4">
                          {this.RenderMethod(this.props.promotion)}
                      </div>

                      <div className="col-12 col-md-4">
                          {/* {this.props.leader.map((item) =>{
                              return(
                                  <div>
                                {this.RenderMethod(item)}
                                </div>
                              )
                          }
                          )} */}
                          {this.RenderMethod(this.props.leader)}
                      </div>
                  </div>
                  
                  
                  </div>  
            </div>
        )
    }
}
export default Home;