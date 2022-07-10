import React from 'react';
import { useTheme } from 'styled-components';
import { Fontisto } from '@expo/vector-icons'
import { ActivityIndicator, Alert, Modal, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import LoginBannerImg from '../../assets/images/login.svg';
import LogoImg from '../../assets/images/logo.svg';

import * as S from './styles';

export function SignIn() {
  const { signIn, isLoggingIn } = useAuth();
  const theme = useTheme();

  // creates a function to handle sign in
    // try to call and wait signIn
    // if fails, display an Alert with the title "Erro SignIn" and message "Ocorreu um erro ao tentar logar no app"



    const signInButtonProps = {
      onPress: () => signIn()
    }

  return (
    <S.Container>
      <S.Content>
        <S.LoginBanner>
          <LoginBannerImg width="100%" />
        </S.LoginBanner>

        <S.LoginInfo>
          <S.Header>
            <LogoImg />
            <S.Partner>by twitch</S.Partner>
          </S.Header>

          <S.Description>
            Veja dados{'\n'}
            interessantes sobre{'\n'}
            o mundo da Twitch
          </S.Description>

          <S.SignInButton {...signInButtonProps}>
            <S.SignInButtonIcon>
              <Fontisto name='twitch' size={20} color='white' />
            </S.SignInButtonIcon>

            <S.SignInButtonText>
              Entrar com Twitch
            </S.SignInButtonText>
          </S.SignInButton>
        </S.LoginInfo>
      </S.Content>

      <Modal 
        animationType="fade"
        visible={isLoggingIn}
        statusBarTranslucent
        transparent
      >
        <View
          style={{ flex: 1, backgroundColor: 'rgba(14, 14, 16, 0.5)' }}
        />
      </Modal>
    </S.Container>
  );
}