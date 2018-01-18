/**
 * Created by HP on 18-Jan-18.
 */
import React from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import { emptyModal } from '../actions/menuElements';

const Modal = props => (
    <Rodal visible={!!props.modalContent} onClose={props.emptyModalContent}>
        <div>{props.modalContent}</div>
    </Rodal>
);

const mapStateToProps = state => ({
    modalContent : state.menuElements.modalContent
});

const mapDispatchToProps = dispatch => ({
    emptyModalContent : () => dispatch(emptyModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);