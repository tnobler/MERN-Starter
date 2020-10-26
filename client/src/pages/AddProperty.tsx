import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton
} from '@ionic/react';

const AddProperty: React.FC = () => {
  console.log('AddProperty render');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Property</IonTitle>
          <IonButton slot='end'>
            <IonMenuButton />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>Add Property</h2>
      </IonContent>
    </IonPage>
  );
};

export default AddProperty;
