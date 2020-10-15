import React, { useState } from 'react';
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
import { useHistory } from 'react-router';
import axios from 'axios';

interface ContainerProps {}

const Signup: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    //validate inputs code not shown
    const signupData = {
      name: name,
      email: email,
      password: password
    };

    const api = axios.create({
      baseURL: `http://localhost:5000/api/v1`
    });

    api
      .post('/users', signupData)
      .then(res => {
        history.push('/dashboard/' + email);
      })
      .catch(error => {
        // setMessage('Auth failure! Please create an account');
        // setIserror(true);
      });
  };

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
                By clicking Signup you agree to our <a href='#'>Policy</a>
              </p>
              <IonButton expand='block' onClick={handleLogin}>
                Signup
              </IonButton>
              <p style={{ fontSize: 'medium' }}>
                Already have an account? <a href='/login'>Login!</a>
              </p>
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
