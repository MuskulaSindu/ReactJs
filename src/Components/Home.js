import React from 'react';
import { CardTitle, CardImg, CardBody, CardSubtitle ,CardText,Card} from 'reactstrap';
import { Loading } from './LoadingComponent';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    RenderMethod(item,isLoading,errMess){
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
        else
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
                          {this.RenderMethod(this.props.dish,this.props.dishesLoading,this.props.dishesErrMess)}
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