import React, { useState } from 'react';
import { connect } from 'react-redux';
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
// import { useHistory } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
// import axios from 'axios';

interface ContainerProps {
  setAlert: any;
  signup: any;
  isAuthenticated: boolean;
}

const Signup: React.FC<ContainerProps> = ({
  setAlert,
  signup,
  isAuthenticated
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const handleSignup = async (e: any) => {
    e.preventDefault();
    //validate inputs code not shown

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      signup({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Signup</IonTitle>
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
                <IonLabel position='floating'> Name</IonLabel>
                <IonInput
                  name='name'
                  type='text'
                  value={name}
                  onIonChange={e => setName(e.detail.value!)}
                ></IonInput>
              </IonItem>
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

          <IonRow class='ion-margin-bottom'>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'> Confirm Password</IonLabel>
                <IonInput
                  name='password2'
                  type='password'
                  value={password2}
                  onIonChange={e => setPassword2(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p style={{ fontSize: 'small' }}>
                By clicking Signup you agree to our <a href='/'>Policy</a>
              </p>
              <IonButton expand='block' onClick={handleSignup}>
                Signup
              </IonButton>
              <p style={{ fontSize: 'medium' }}>
                Already have an account? <Link to='/login'>Login!</Link>
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

export default connect(mapStateToProps, { setAlert, signup })(Signup);
