import React, { Component } from 'react';
import Buttons from '../components/Buttons'
import { Record_Input_1, Record_Input_2, Maths_Is_Plus, Calculate_Answer } from '../actions/sum-action';
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
            return this.props.onCalculateAnswer
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
            inputValue1: state.sumReducer[0],
            inputValue2: state.sumReducer.inputValue2,
            answer: state.sumReducer.answer,
            currentMaths: state.sumReducer.currentMaths
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
