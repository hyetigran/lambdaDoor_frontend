/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import SideNav from '../SideNav';
import SearchForm from '../Search/Search';
import {
  primaryGrey,
  textGrey,
  mobilePortrait,
  tabletPortrait,
} from '../../styles/theme.styles';

import { LogoutUser } from '../../state/actions/auth';

import logo from '../../assets/img/lambda-logo.png';

const DashboardLayout = ({ component: Component, LogoutUser, ...rest }) => {
  const [visible, setVisible] = useState(false);

  const hideDrawer = () => {
    setVisible(false);
  };

  const toggleDrawer = e => {
    e.stopPropagation();
    setVisible(!visible);
  };

  return (
    <Route
      {...rest}
      render={props => (
        <StyledContainer>
          <SideNav visible={visible} />
          <div
            className="main-container"
            onKeyDown={toggleDrawer}
            onClick={hideDrawer}
          >
            <div className="top-bar">
              <button
                type="button"
                className="mobile-logo-btn"
                onClick={e => toggleDrawer(e)}
              >
                <img src={logo} alt="Lambda logo" />
              </button>
              <SearchForm />

              <div className="sign-out-btn">
                <Button type="link" onClick={LogoutUser}>
                  Sign Out
                  <Icon type="right" />
                </Button>
              </div>
            </div>
            <div className="main-content">
              <Component {...props} />
            </div>
          </div>
        </StyledContainer>
      )}
    />
  );
};

export default connect(null, { LogoutUser })(DashboardLayout);

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  @media ${tabletPortrait} {
    height: 100%;
  }

  .mobile-logo-btn {
    display: none;
    border: none;
    outline: none;
    background: transparent;
    @media ${mobilePortrait} {
      display: inherit;
      width: 50px;
      margin-right: 0.75rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .main-container {
    width: calc(100% - 250px);
    height: 100vh;
    overflow: hidden;
    @media ${mobilePortrait} {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .top-bar {
    width: 100%;
    padding: 1.5rem 1.5rem 2.5rem 0;
    background: ${primaryGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${mobilePortrait} {
      height: 80px;
      padding: 1rem;
      background-color: #fafafa;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
    }

    .ant-input {
      background: transparent;
    }

    .ant-input-affix-wrapper {
      font-size: 18px;
    }

    .ant-btn-link {
      color: ${textGrey};
      font-weight: 500;
    }
  }

  .main-content {
    padding: 2rem 1.5rem;
    height: calc(100vh - 104px);
    overflow-y: auto;
    @media ${mobilePortrait} {
      padding-top: 100px;
    }
  }

  .sign-out-btn {
    @media ${mobilePortrait} {
      display: none;
    }
  }
`;
