import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hasPremium } from 'interface/selectors/user';
import Ad from 'interface/common/Ad';

import './SectionDivider.css';

const SectionDivider = ({ premium }) => (
  premium === false ? (
    <div className="text-center" style={{ margin: '40px 0' }}>
      <Ad format="leaderboard" />
    </div>
  ) : (
    <div className="section-divider" />
  )
);
SectionDivider.propTypes = {
  premium: PropTypes.bool,
};
SectionDivider.defaultProps = {
  premium: null,
};

const mapStateToProps = state => ({
  premium: hasPremium(state),
});
export default connect(
  mapStateToProps
)(SectionDivider);
