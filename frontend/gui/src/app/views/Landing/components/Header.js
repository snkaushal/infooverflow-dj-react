import React from 'react';
import classnames from 'classnames';
import IOButton from '../../../../lib/components/IOButton';
import SignUp from '../../../../lib/forms/SignUp';
import Login from '../../../../lib/forms/Login';
import IOModal from '../../../../lib/components/IOModal';
import IOLogo from '../../../../lib/components/IOLogo';
import IOLink from '../../../../lib/components/IOLink';
import PlaceHolder from '../../../../lib/assets/images/ph.png';
import IOHolder from '../../../../lib/components/IOHolder';

class Header extends React.Component {
  render() {
    const { isAuthenticated, username } = this.props;

    return (
      <React.Fragment>
        <div className={classnames('io-row-2-of-3', 'io-xxl-pad')}>
          <IOLogo className={classnames('io-xxl-marg--bottom')} />
          <h1>Q&A Without Distractions</h1>
          <p className={classnames('io-muted-text')}>
            With your help we are working together to build a library of detailed <br />
            answers to every question about programming. <b>It's built and run by you</b>.
                </p>
          <IOButton to={'/articles'} className={'io-xxl-marg--top'}>
            Explore Our Articles
          </IOButton>
        </div>
        <div className={classnames('io-row-1-of-3', 'io-primary-background', 'io-xxl-pad')}>
          {
            isAuthenticated ?
              (
                <div className={classnames('io-text-white')}>
                  <div className={classnames('io-text-rt', 'io-xxl-marg--bottom')}>
                    <IOLink to={'/'} value={'Logout'} onClick={() => this.props.logout()} />
                  </div>
                  <div className={classnames('io-text-cen')}>
                    Welcome to InfoOverflow, <b>{username}</b>
                    <IOHolder imgSrc={PlaceHolder} shape={'circle'} width={'60'} className={'io-lg-marg--vert'}/>
                    <IOLink to='/account-details' value={'Edit Profile'}/><br/>
                    <IOLink to='/my-articles' value={'My Articles'}/><br/>
                    <IOLink to='/create-article' value={'Create Article'}/><br/>
                  </div>
                </div>
              ) :
              (
                <React.Fragment>
                  <IOModal
                    renderContext={(openModal, closeModal) => (
                      <div
                        onClick={openModal}
                        className={classnames(
                          'io-clickable',
                          'io-lg-font',
                          'io-text-rt',
                          'io-text-white',
                          'io-xxl-marg--bottom'
                        )}
                      >
                        <i className={classnames('fa', 'fa-sign-in')} /> Login
                    </div>
                    )}
                    renderBody={(openModal, closeModal) => <Login closeModal={closeModal} />}
                  />
                  <SignUp />
                </React.Fragment>
              )
          }
        </div>
      </React.Fragment>

    )
  }
}

export default Header;