import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  console.log('Tab1 render');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB ONE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>TAB ONe</h2>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
