/**
 * Created by HP on 18-Jan-18.
 */
import React from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import { emptyModal } from '../actions/menuElements';


/**
 * Modal window which can be launched from anywhere in application
 * By setting content to Redux store
 * It also calls an callback (if provided) on closing
 * @param props
 * @constructor
 */
const Modal = props => (
    <Rodal visible={!!props.modalContent} onClose={() => {
        if(typeof(window.MODAL_CALLBACK) === 'function') {
            window.MODAL_CALLBACK();
            window.MODAL_CALLBACK = null;
        }
        props.emptyModalContent();
    }}>
        <div>{props.modalContent}</div>
    </Rodal>
);

const mapStateToProps = state => ({
    modalContent : state.menuElements.modalContent,
    modalCallback : state.modalCallBack
});

const mapDispatchToProps = dispatch => ({
    emptyModalContent : () => dispatch(emptyModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);