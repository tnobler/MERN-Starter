import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  IonButton,
  IonIcon,
  IonMenu,
  IonHeader,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet
} from '@ionic/react';
import { logout } from '../actions/auth';

import { logOutOutline, speedometerOutline } from 'ionicons/icons';

interface ContainerProps {
  logout: any;
  auth: any;
}

const NavMenu: React.FC<ContainerProps> = ({
  auth: { isAuthenticated, loading },
  logout
}) => {
  const authLinks = (
    <>
      {/* <IonItem>
        <IonButton expand='block' href='/logout'>
          Logout
        </IonButton>
      </IonItem> */}

      <IonItem href='/dashboard'>
        <IonLabel>Dashboard</IonLabel>
        <IonIcon icon={speedometerOutline} />
      </IonItem>
      <IonItem href='/properties'>
        <IonLabel>Properties</IonLabel>
      </IonItem>
      <IonItem button onClick={logout} href='/login'>
        <IonLabel>Logout</IonLabel>
        <IonIcon icon={logOutOutline} />
      </IonItem>
    </>
  );

  const guestLinks = (
    <>
      <IonItem>
        <IonButton expand='block' href='/login'>
          Login
        </IonButton>
      </IonItem>
      <IonItem>
        <IonButton expand='block' href='/signup'>
          Signup
        </IonButton>
      </IonItem>
    </>
  );

  return (
    <>
      <IonMenu side='end' menuId='first' contentId='main' type='overlay'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>Navigation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </IonList>
        </IonContent>
      </IonMenu>

      {/* <IonMenu side='start' menuId='custom' className='my-custom-menu'>
      <IonHeader>
        <IonToolbar color='tertiary'>
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side='end' type='push'>
      <IonHeader>
        <IonToolbar color='danger'>
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu> */}
      <IonRouterOutlet></IonRouterOutlet>
    </>
  );
};

const mapStateToProps = (state: { auth: any }) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavMenu);
