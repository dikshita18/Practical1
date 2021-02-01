import { Component } from "react";
class Square extends Component
{
  render()
  {
    return(
      <button classname = "SquareButton">
        {this.props.value}
        </button>
    );
  }
}

class Board extends Component{
  renderSquareButton(value)
  {
    return <Square value={value} />;
  }
  
  render()
  {
    return(
      <div>
        {this.renderSquareButton(2)}
        {this.renderSquareButton(3)}
        </div>
    );
  }
  
  
  
}

/*class Passprops extends React.Component
{
  
}

React.render(
<Board/>
, document.getElementById('app'));
*/

export default Board ;
