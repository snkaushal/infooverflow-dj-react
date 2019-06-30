import React from 'react';
import classnames from 'classnames';
import IOLink from '../../../lib/components/IOLink';
import { connect } from 'react-redux';

class Landing extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className={classnames('io-landing')}>
        {isAuthenticated ?
          <div>
            <h3>Hi, Welcome to InfoOverflow</h3>
            Go to your articles <IOLink
              to={'/articles'}
              value={'Articles'}
              isAuthenticated={isAuthenticated}
            />
          </div> :
          <div>
            Please login to continue
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  }
}

export default connect(mapStateToProps)(Landing);