import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDisptachToProps = (dispatch) => {

  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    inc,
    dec,
    rnd: () => {
      const randomValue = Math.floor(Math.random()*10);
      rnd(randomValue);
    }
  };
};

// функция connect - HOC создает компонент-обертку над Counter
// и передает значения из store в компонент через mapStateToProps
export default connect(mapStateToProps, mapDisptachToProps)(Counter);