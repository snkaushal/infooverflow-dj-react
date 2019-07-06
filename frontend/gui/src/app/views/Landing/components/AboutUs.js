import React from 'react';
import classnames from 'classnames';
import QAImage from '../../../../lib/assets/images/qa.png';

const AboutUs = () => (
  <React.Fragment>
    <div className={classnames('io-row-2-of-3', 'io-xxl-pad')}>
      <h3> Ask Questions, Get Answers! </h3>
      <p className={classnames('io-muted-text')}>
        This site is all about getting answers, It's not a dicussion forum.
              <b> There is not chit-chat</b>
      </p>
      <div>
        <div className={classnames('io-row')}>
          <i className={classnames('fa', 'fa-caret-up', 'io-xl-font', 'io-text-primary', 'io-md-marg')} />
          <div>
            Good answers are voted up and rise to the top.
                  <div className={classnames('io-text-muted', 'io-md-text')}>
              The best answers always show first so they are easy to find.
                  </div>
          </div>
        </div>
        <div className={classnames('io-row')}>
          <i className={classnames('fa', 'fa-check', 'io-lg-font', 'io-text-secondary', 'io-md-marg')} />
          <div>
            The person who asks can mark one answer as 'accepted'.
                  <div className={classnames('io-text-muted', 'io-md-text')}>
              Accepting the best answer means it worked for the person who asked.
                  </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classnames('io-row-1-of-3', 'io-xxl-pad')}>
      <img src={QAImage} alt='QA Section' />
    </div>
  </React.Fragment>
)

export default AboutUs;