import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import { Record_Input_1, Record_Input_2,  Calculate_Answer } from '../actions/sum-action';
import { Maths_Is_Plus } from '../actions/maths-actions';
import { Calculate_Answer } from '../actions/answer-action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ButtonsContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMaths = this.handleMaths.bind(this);
        this.equals = this.equals.bind(this);
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
      }
      
    }

    equals() {
        console.log('in equals', this.props)
        // if (this.props.currentMaths === '+') {
            return this.props.onCalculateAnswer(this.props.inputValue1, this.props.inputValue2)
        // }
    }

    render() {
        return(
            <Buttons
              handleClick={this.handleClick}
              inputValue1={this.props.inputValue1}
              inputValue2={this.props.inputValue2}
              handleMaths={this.handleMaths}
              equals={this.equals}/>
     )
    }
}

    const mapStateToProps = (state) => {
        console.log("state", state)
        return {
            inputValue1: state.sumReducer.inputValue1,
            inputValue2: state.sumReducer.inputValue2,
            currentMaths: state.sumReducer.currentMaths,
            answer: state.sumReducer.answer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
            onRecordInput1: Record_Input_1,
            onRecordInput2: Record_Input_2,
            onMathsIsPlus: Maths_Is_Plus,
            onCalculateAnswer: Calculate_Answer
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
