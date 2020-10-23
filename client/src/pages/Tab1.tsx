import React, { useMemo } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import AppContext from '../context';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  console.log('Tab1 render');

  const { sharedValue, setSharedValue } = React.useContext(AppContext);

  const renderContents = useMemo(() => {
    console.log('Tab1 renderContents ' + new Date());
    return (
      <>
        <div>{JSON.stringify(sharedValue)}</div>
        <IonButton
          onClick={() =>
            setSharedValue({ value: new Date().getTime(), changedBy: 'Tab1' })
          }
        >
          Update Value
        </IonButton>
        <IonButton
          onClick={() => setSharedValue({ value: null, changedBy: 'Tab1' })}
        >
          Reset Value
        </IonButton>
      </>
    );
  }, [sharedValue, setSharedValue]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB ONE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>TAB ONe</h2>

        {renderContents}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
