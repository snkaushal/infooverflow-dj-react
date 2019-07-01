import React from 'react';
import classnames from 'classnames';
import IOLogo from '../../../../lib/components/IOLogo';
import IOLink from '../../../../lib/components/IOLink';
import IOModal from '../../../../lib/components/IOModal';
import Login from '../../../../lib/components/Login';
import SignUp from '../../../../lib/components/SignUp';

class Header extends React.Component {
  render() {
    return (
      <div className={classnames('io-header')}>
        <IOLogo />
        <div className={classnames('io-header__navlinks')}>
          {this.props.isAuthenticated ?
            (
              <div>
                Welcome {this.props.username} &nbsp;
                <IOLink to={'/'} value={'Logout'} onClick={() => this.props.logout()} />
              </div>
            ) :
            (
              <React.Fragment>
                <IOModal
                  renderContext={(openModal, closeModal) => (<div onClick={openModal}>Login</div>)}
                  renderBody={(openModal, closeModal) => <Login closeModal={closeModal} />}
                />
                <IOModal
                  renderContext={(openModal, closeModal) => (<div onClick={openModal}>Sign Up</div>)}
                  renderBody={(openModal, closeModal) => <SignUp closeModal={closeModal} />}
                />
              </React.Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

export default Header;