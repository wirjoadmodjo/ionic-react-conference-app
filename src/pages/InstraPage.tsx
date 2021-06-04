import React from 'react';
import { IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import IndikatorItem from '../components/IndikatorItem';

import axios from 'axios';
//import './Tab1.css';

//const apiUrl = 'http://localhost:8765/skartaji/indikator/strategis'; 
const apiUrl = 'https://webapps.bps.go.id/kedirikota/skartaji/indikator/strategis'; 

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
        <IonTitle className="mont-ExtraBoldItalic">Indikator Strategis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            instra.map(data => {
              return (
                <IndikatorItem nama={data['nama_indikator']} nilai={data['data']} satuan={data['unit']} linknav="/indikator/penduduk" ikon={data['app_icon']} />                
              );
            })
          }          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InstraPage;
