import React, { Component } from 'react';



class Buttons extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }


    render() {
        const buttonMaker = (buttons, row) => {
            for (let value of buttons) {
                row.push(<button onClick={() => this.props.handleClick(value)} key={value} className={`button-${value}`}>
                    {value}
                </button>)
            }
        }

        let row1 = [];
        let buttons1 = [1, 2, 3]
        buttonMaker(buttons1, row1)


        let row2 = [];
        let buttons2 = [4, 5, 6]
        buttonMaker(buttons2, row2)


        let row3 = [];
        let buttons3 = [7, 8, 9]
        buttonMaker(buttons3, row3)

        return (
            <div>
               <div className="numbers">
                <div>{row1}</div>
                <br />
                <div>{row2}</div>
                <br />
                <div>{row3}</div>
              </div>  
                <button onClick={() => this.props.handleMaths('+')} className={"handleMathsPlus"}>
                    +
          </button>
                <button onClick={() => this.props.equals()}>
                    =
          </button>
            </div>
        )
    }
}



export default Buttons;
