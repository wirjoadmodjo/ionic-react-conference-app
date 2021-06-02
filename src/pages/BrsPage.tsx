import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
//import './Tab1.css';

const BrsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Berita Resmi Statistik</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Berita Resmi Statistik</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Berita Resmi Statistik" />
      </IonContent>
    </IonPage>
  );
};

export default BrsPage;
