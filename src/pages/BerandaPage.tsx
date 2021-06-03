import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import './Tab1.css';

const BerandaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>S'kartaji</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">S'kartaji</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Statistik Kota Kediri Data Tersaji" />
      </IonContent>
    </IonPage>
  );
};

export default BerandaPage;
