import React from 'react';
import PropTypes from 'prop-types';

const ConfirmPage = ({details, onBack}) => {
    return (
      <div>
        <h2 className="place-title">STEP 3</h2>
        <pre>
          {JSON.stringify(details, null, "\t")}
        </pre>
        <button className="btn btn-primary" onClick={onBack}>Back</button>
        <button style={{float: 'right'}} className="btn btn-success">Confirm</button>
      </div>
    );
};

ConfirmPage.propTypes = {
  details: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ConfirmPage;