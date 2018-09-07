import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import { Record_Input_1, Record_Input_2 } from '../actions/sum-action';
import { Maths_Is_Plus, Maths_Is_Minus } from '../actions/maths-action';
import { Calculate_Answer, Calculate_Minus } from '../actions/answer-action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



export class ButtonsContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMaths = this.handleMaths.bind(this);
        this.isEquals = this.isEquals.bind(this);
        console.log('start', this.props)
    }

    handleClick(num) {
        console.log()
      if (this.props.inputValue1 === '') {
        this.props.onRecordInput1(num)
      } else {
        this.props.onRecordInput2(num)
      }

    }

    

    handleMaths(maths) {
        console.log('in maths', this.props)
      if (maths === '+') {
        this.props.onMathsIsPlus(maths)
      } else {
          this.props.onMathsIsMinus(maths)
      }
      
    }

    isEquals() {
        console.log('in equals', this.props)
        if (this.props.currentMaths === '+') {
            return this.props.onCalculateAnswer(this.props.inputValue1, this.props.inputValue2)
        } else {
            return this.props.onCalculateMinus(this.props.inputValue1, this.props.inputValue2)
        }
    }

    render() {
        return(
            <div>
            <Buttons
              handleClick={this.handleClick}
              inputValue1={this.props.inputValue1}
              inputValue2={this.props.inputValue2}
              handleMaths={this.handleMaths}
              isEquals={this.isEquals}/>
              
              </div>
     )
    }
}

    const mapStateToProps = (state) => {
        console.log("state", state)
        return {
            inputValue1: state.sumReducer.inputValue1,
            inputValue2: state.sumReducer.inputValue2,
            currentMaths: state.mathsReducer.currentMaths,
            answer: state.sumReducer.answer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
            onRecordInput1: Record_Input_1,
            onRecordInput2: Record_Input_2,
            onMathsIsPlus: Maths_Is_Plus,
            onMathsIsMinus: Maths_Is_Minus,
            onCalculateAnswer: Calculate_Answer,
            onCalculateMinus: Calculate_Minus
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
