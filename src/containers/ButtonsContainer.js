import React, { Component } from 'react';
import Buttons from '../components/Buttons'
import { Record_Input_1, Record_Input_2 } from '../actions/sum-action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ButtonsContainer extends Component {
    constructor(props) {
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
        console.log(JSON.stringify(this.props))
    }

    handleClick(num) {
        console.log("handleClick", this.props)
       this.props.onRecordInput1(num) 
    }

    render() {
        // console.log("EEEEEEEEEE", this.props)
        return(
            <Buttons handleClick={this.handleClick} inputValue1={this.props.inputValue1}/>
     )
    }
}    

    const mapStateToProps = (state) => {
        // console.log("kkkkkkkkk", state)
        return {
            inputValue1: state.sumReducer.inputValue1,
            inputValue2: state.inputValue2,
            answer: state.answer
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({
            onRecordInput1: Record_Input_1,
            onRecordInput2: Record_Input_2
        }, dispatch);
    }
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);