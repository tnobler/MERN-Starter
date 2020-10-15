import React from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Signup from '../components/Signup';
import './Landing.css';

const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ProfitPad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>ProfitPad</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          <IonRow class='ion-align-items-center'>
            <IonCol>
              <IonRow>
                <IonCol class='ion-align-items-center ion-padding-horizontal ion-padding-vertical ion-margin-vertical'>
                  <div>
                    <strong>House Flipper App</strong>
                    <p>
                      Analyze, track, and create budgets for your House Flips.{' '}
                    </p>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand='block' href='/signup'>
                    Signup
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand='block' href='/login'>
                    Login
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </div>
        {/* Login */}
      </IonContent>
    </IonPage>
  );
};

export default Landing;
