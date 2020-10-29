import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';

import { Link, Redirect } from 'react-router-dom';

interface ContainerProps {
  login: any;
  isAuthenticated: boolean;
}

const Login: React.FC<ContainerProps> = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    login({ email, password });
  };

  // Redirect if Logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='container'>
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: '70px', color: '#0040ff' }}
                icon={personCircle}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'> Email</IonLabel>
                <IonInput
                  name='email'
                  type='email'
                  value={email}
                  onIonChange={e => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow class='ion-margin-bottom'>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'> Password</IonLabel>
                <IonInput
                  name='password'
                  type='password'
                  value={password}
                  onIonChange={e => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p style={{ fontSize: 'small' }}>
                By clicking Login you agree to our <a href='/'>Policy</a>
              </p>
              <IonButton expand='block' onClick={handleLogin}>
                Login
              </IonButton>
              <p style={{ fontSize: 'medium' }}>
                Don't have an account? <Link to='/signup'>Signup!</Link>
              </p>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
