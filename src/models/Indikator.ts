export interface Indikator {
    nama_indikator: string;
    data_th: string;
    data: string;
    unit: string;
    appData: App[];
    kediri: Kediri[];
    antarWilayah: AntarWilayah[];
}

export interface App {
    icon: string;
    router: string;
}

export interface Kediri {
    domain: string;
    var: string;
    vervar: string;
}

export interface AntarWilayah {
    domain: string;
    var: string;
    filter: string;
}