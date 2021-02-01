
import { Component } from "react";
class Image extends Component
{
  render()
  {
    return(
        <div>
            <img src={this.props.value[0]} alt="text" width="330"/>
            <p>{this.props.value[1]}</p>

        </div>


    );
  }
}

class Card extends Component{
  renderButton(value)
  {
    return (
    <Image value={value} />
    )
  }

  render()
  {
    return(
      <div>
        {this.renderButton(['https://static.toiimg.com/photo/72975551.cms : ',"    IMAGE 1" ])}
        {this.renderButton(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUh2LwpwRDPuswzTk8Pn40jCIx6QHDW6biA&usqp=CAU : ','    IMAGE 2'])}
        {this.renderButton(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6D-Z8amW3gpBDIhOpo-yD-dU1FRZc-PW4A&usqp=CAU : ','    IMAGE 3'])}
        </div>
    );
  }
  
  
  
}


export default Card ;

