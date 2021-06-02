import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonItem, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import axios from 'axios';
//import {Instra} from '../models/InstraModel';

//import './Tab1.css';

const fetchInstra = () => {
  return axios({
    url: 'http://localhost:8765/skartaji/indikator/strategis',
    method: 'get'
  }).then(response => {
    console.log(response);
    return response.data;
  })
};

const BerandaPage: React.FunctionComponent = () => {
  const [instra, setInstra] = React.useState([]);
  const items: any[] = [];

  React.useEffect(() => {
    fetchInstra().then(data => setInstra(data.strategis));
  }, []);

  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Indikator Strategis</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {
          instra.map(a => {
            return (
              <IonItem>
              {a['nama_indikator']}
              </IonItem>
            );            
          })
        }
      </IonList>
    </IonContent>
    </>
  );
};

  {/* const BerandaPage: React.FunctionComponent = (props) => {
  const [data, setData] = useState<Instra[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const instraUrl = "https://webapps.bps.go.id/kedirikota/skartaji/indikator/strategis";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(instraUrl);
      setData(result.strategis);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const showDetail = (data: any) => {
    let prop: any = props;
    prop.history.push({
      pathname: 'tab1/detail/' + JSON.stringify(data)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{nama_indikator}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLoading 
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading'}
        />
        <IonList>
          {data.map(nama_indikator, idx) => (
            <IonItem key={idx} onClick={() => { showDetail(nama_indikator) }}>

            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}; 

export return BerandaPage;

const BerandaPage: React.FC = () => {
  const [nama_indikator, setNama_indikator] = React.useState(String);

  React.useEffect(() => {
    const skartaji = new SkartajiService();
    skartaji.getInstra().then(result=>{
      setNama_indikator(result.data.strategis.jumlah_penduduk.nama_indikator)
    }, fail => {
      console.log(fail)
    })
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{nama_indikator}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{nama_indikator}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Indikator Strategis" />
      </IonContent>
    </IonPage>
  );
}; */}

export default BerandaPage;
