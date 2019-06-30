import React from 'react';
import classnames from 'classnames';

class IOModal extends React.Component {
  state = { modalOpen: false };

  openModal = () => (this.setState({ modalOpen: true }));

  closeModal = () => (this.setState({ modalOpen: false }));

  render() {
    const { modalOpen } = this.state;
    const { renderBody, renderContext } = this.props;

    return (
      <React.Fragment>
        {renderContext(this.openModal, this.closeModal)}
        {modalOpen &&
          <div
            className={classnames('io-modal__overlay')}
            onClick={this.closeModal}
          />}
        <div className={classnames(modalOpen ? 'io-modal--open' : 'io-modal--close')}>
          {renderBody(this.openModal, this.closeModal)}
        </div>
      </React.Fragment>
    )
  }
}

export default IOModal; 