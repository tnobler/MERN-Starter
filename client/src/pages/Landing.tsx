import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
import './Landing.css';

interface ContainerProps {
  isAuthenticated: boolean;
}

const Landing: React.FC<ContainerProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

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
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
