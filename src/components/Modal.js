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
    <Rodal className="modal__main" visible={!!props.modalContent} onClose={() => {
        if(typeof(window.MODAL_CALLBACK) === 'function') {
            window.MODAL_CALLBACK();
            window.MODAL_CALLBACK = null;
        }
        props.emptyModalContent();
    }}>
        <div>{props.modalContent}</div>
        {props.modalErrors.length > 0 && props.modalErrors.map(err => <p key={err}>{err}</p>)}
    </Rodal>
);


const mapStateToProps = state => ({
    modalContent : state.menuElements.modalContent,
    modalErrors  : state.menuElements.modalErrors
});

const mapDispatchToProps = dispatch => ({
    emptyModalContent : () => dispatch(emptyModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);