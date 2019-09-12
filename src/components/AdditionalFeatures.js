import React from 'react';
import { connect } from 'react-redux'

import AdditionalFeature from './AdditionalFeature';
import { addNewFeature } from '../actions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addNewFeature={props.addNewFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { addNewFeature }
)(AdditionalFeatures);