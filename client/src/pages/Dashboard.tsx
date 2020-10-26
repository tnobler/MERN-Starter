import React, { Fragment, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRow,
  IonCol,
  IonButton,
  IonMenuButton
} from '@ionic/react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import Spinner from '../components/Spinner';
import { personCircleOutline } from 'ionicons/icons';

interface IDashboardProps {
  getCurrentProfile: any;
  auth: any;
  profile: any;
}

const Dashboard: React.FunctionComponent<IDashboardProps> = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Dashboard</IonTitle>
            <IonButton slot='end'>
              <IonMenuButton />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <div className='container'>
            <IonRow>
              <IonCol>
                <IonText>
                  <h1>
                    <IonIcon size='large' icon={personCircleOutline} />
                    Welcome {user && user.name}
                  </h1>
                </IonText>
                <hr />

                {profile !== null ? (
                  <Fragment>has</Fragment>
                ) : (
                  <Fragment>
                    <IonRow>
                      <IonCol>
                        <IonText>
                          You have not yet setup a profile, please add some
                          info.
                        </IonText>
                      </IonCol>
                    </IonRow>
                    <hr />
                    <IonRow>
                      <IonCol>
                        <IonButton expand='block' href='/create-profile'>
                          Create Profile
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </Fragment>
                )}
              </IonCol>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
