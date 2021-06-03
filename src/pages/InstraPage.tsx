import React from 'react';
import { IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import axios from 'axios';
//import './Tab1.css';

const apiUrl = 'http://localhost:8765/skartaji/indikator/strategis'; 

const getDataInstra = () => {
  return axios({
    url: apiUrl,
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  }) 
}

const InstraPage: React.FC = () => {
  const [instra, setInstra] = React.useState([]);
  //const items: any[] = [];

  React.useEffect(() => {
    getDataInstra().then(data => setInstra(data.data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Indikator Strategis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            instra.map(data => {
              return (
                <IonItem>
                  {data['nama_indikator']}
                </IonItem>
              );
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InstraPage;
