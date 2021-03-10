import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Card, TextField } from '@material-ui/core';
import { GoogleLoginButton } from 'react-social-login-buttons';

const StyledSignUpCard = styled(Card)`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 433px;
  height: auto;
  transform: translate(-50%, -50%);
`;

const StyledNanomemoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.dark};
  color: #fff;
  font-size: 61px;
  height: 94px;
  text-align: center;
  font-weight: bold;
`;

const StyledFormsGridDiv = styled.div`
  height: auto;
  padding: 37px 80px;
  grid-auto-rows: 54px;
`;

const StyledPrtition = styled.div`
  position: relative;
`;

const StyledPartition1 = styled.div`
  height: 32px;
  border-bottom: 0.9px solid #b5b5b5;
`;

const StyledPartition2 = styled.div`
  height: 32px;
`;

const StyledPartitionText = styled.div`
  width: 23%;
  background-color: #fff;
  color: #707070;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  font-size: 20px;
  transform: translate(-50%, -50%);
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  height: 54px;
  margin-bottom: 33px;
`;

const StyledSignUpButton = styled(Button)`
  width: 100%;
  height: 52px;
`;

const StyledSignInRouteButton = styled(Button)`
  display: block;
  margin: auto 20px 10px auto;
  font-size: 15px;
  text-transform: none;
`;

export default function SignUpPage(props: {
  googleSignInFunc: () => Promise<void>;
}): JSX.Element {
  return (
    <StyledSignUpCard>
      <StyledNanomemoDiv>nanomemo</StyledNanomemoDiv>

      <StyledFormsGridDiv>
        <GoogleLoginButton onClick={props.googleSignInFunc} />

        <StyledPrtition>
          <StyledPartition1 />
          <StyledPartition2 />
          <StyledPartitionText>or</StyledPartitionText>
        </StyledPrtition>

        <StyledTextField
          variant="outlined"
          label="email"
          type="email"
          required
        />

        <StyledTextField
          variant="outlined"
          label="Password"
          type="password"
          required
        />

        <StyledTextField
          variant="outlined"
          label="Password 確認"
          type="password"
          required
        />

        <StyledSignUpButton
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => console.log('ここでメアドサインアップ')}
        >
          確認メールを送信
        </StyledSignUpButton>
      </StyledFormsGridDiv>

      <Link to="/sign-in">
        <StyledSignInRouteButton variant="text" size="small">
          Sign in
        </StyledSignInRouteButton>
      </Link>
    </StyledSignUpCard>
  );
}
