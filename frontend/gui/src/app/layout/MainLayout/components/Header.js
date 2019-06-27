import React from 'react';
import classnames from 'classnames';
import IOLogo from '../../../../lib/components/IOLogo';
import IOLink from '../../../../lib/components/IOLink';

class Header extends React.Component {
  render() {
    return (
      <div className={classnames('io-header')}>
        <IOLogo />
        <div className={classnames('io-header__navlinks')}>
          {this.props.isAuthenticated ?
            (<IOLink to={'/'} value={'Logout'} onClick={this.props.logout} />) :
            (
              <React.Fragment>
                <IOLink to={'/login'} value={'Login'} />
                <IOLink to={'/signup'} value={'Sign Up'} />
              </React.Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

export default Header;