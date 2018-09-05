import React, { Component } from 'react';
import Buttons from '../components/Buttons'
import { Record_Input_1, Record_Input_2 } from '../actions/sum-action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ButtonsContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMaths = this.handleMaths.bind(this);
        console.log('start', this.props.inputValue1)
    }

    handleClick(num) {
      if (this.props.inputValue1 === '') {
        this.props.onRecordInput1(num)
      } else {
        this.props.onRecordInput2(num)
      }

    }

    

    handleMaths(maths) {
      console.log(maths)
      return currentmaths = maths
    }

    equals() {
      inputValue1 + currentmaths + inputValue2
    }

    render() {
        // console.log("EEEEEEEEEE", this.props)
        return(
            <Buttons
              handleClick={this.handleClick}
              inputValue1={this.props.inputValue1}
              handleMaths={this.handleMaths}/>
     )
    }
}

    const mapStateToProps = (state) => {
        // console.log("kkkkkkkkk", state)
        return {
            inputValue1: state.sumReducer.inputValue1,
            inputValue2: state.sumReducer.inputValue2,
            answer: state.sumReducer.answer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
            onRecordInput1: Record_Input_1,
            onRecordInput2: Record_Input_2
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
