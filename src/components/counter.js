import React from 'react';
import { connect } from 'react-redux';

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

// функция connect - HOC создает компонент обертку над Counter
// и передает значения из store в компонент через mapStateToProps
export default connect(mapStateToProps)(Counter);