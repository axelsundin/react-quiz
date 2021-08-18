import React, { Component, CSSProperties } from 'react';


const buttonColors = {
    
    button:{
        width: "80px",
        height: "40px",
        margin: "15px"
    },

    blackButton: {
        
        color: "#white",
      backgroundColor: "black"
    },
    whiteButton: {
      color: "black",
      backgroundColor: "#white"
    }


}


interface Props {}
interface State {
    black: boolean;
}


export default class Test extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>){
         super(props);

         this.state = {
              black: true
         }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? buttonColors.blackButton : buttonColors.whiteButton;

        return (
             <div>
                 <button className={btn_class}
                         onClick={this.changeColor.bind(this)}>
                           Button
                  </button>
             </div>
        )
    }
}

