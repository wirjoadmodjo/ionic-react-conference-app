import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { bugSharp, cubeOutline, documentTextOutline, gridOutline, homeOutline, imageOutline } from 'ionicons/icons';

import BerandaPage from './BerandaPage';
import InstraPage from './InstraPage';
import BrsPage from './BrsPage';
import InfografisPage from './InfografisPage';
import TabelPage from './TabelPage';
import TestingPage from './TestingPage';

import IndikatorDetailPage from './IndikatorDetailPage';



import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';


interface MainTabsProps { }

const SkartajiTabs: React.FC<MainTabsProps> = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/instra" />
                <Route path="/tabs/beranda" render={() => <BerandaPage />} exact={true} />
                <Route path="/tabs/instra" render={() => <InstraPage />} exact={true} />
                <Route path="/tabs/brs" render={() => <BrsPage />} exact={true}/>
                <Route path="/tabs/infografis" render={() => <InfografisPage />} exact={true}/>
                <Route path="/tabs/tabel" render={() => <TabelPage />} exact={true}/>
                <Route path="/tabs/testing" render={() => <TestingPage />} exact={true}/>
                <Route path="/indikator/:id" component={IndikatorDetailPage} exact={true} />


                <Route path="/tabs/schedule" render={() => <SchedulePage />} exact={true} />
                <Route path="/tabs/speakers" render={() => <SpeakerList />} exact={true} />
                <Route path="/tabs/speakers/:id" component={SpeakerDetail} exact={true} />
                <Route path="/tabs/schedule/:id" component={SessionDetail} />
                <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} />
                <Route path="/tabs/map" render={() => <MapView />} exact={true} />
                <Route path="/tabs/about" render={() => <About />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot='bottom'>
                <IonTabButton tab="beranda" href="/tabs/beranda">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Beranda</IonLabel>
                </IonTabButton>
                <IonTabButton tab="instra" href="/tabs/instra">
                    <IonIcon icon={cubeOutline} />
                    <IonLabel>Indikator</IonLabel>
                </IonTabButton>
                <IonTabButton tab="brs" href="/tabs/brs">
                    <IonIcon icon={documentTextOutline} />
                    <IonLabel>BRS</IonLabel>
                </IonTabButton>
                <IonTabButton tab="infografis" href="/tabs/infografis">
                    <IonIcon icon={imageOutline} />
                    <IonLabel>Infografis</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tabel" href="/tabs/tabel">
                    <IonIcon icon={gridOutline} />
                    <IonLabel>Tabel</IonLabel>
                </IonTabButton>
                <IonTabButton tab="testing" href="/tabs/testing">
                    <IonIcon icon={bugSharp} />
                    <IonLabel>TESTING</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default SkartajiTabs;