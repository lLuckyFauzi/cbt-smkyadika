export  interface Material {
    _id: string;
    namaMapel:string
}

export interface Teacher {
    _id: string;
    nama: string
}

export interface Level {
    _id:string;
    tingkatan:string
}

export interface Jurusan {
    _id:string;
    jurusan:string
}

export interface EmbedLinkGet {
    _id: string;
    mapel:Material
    embedLink: string;
    guruMapel: Teacher
    tingkatan: Level
    jurusan: Jurusan
    createdAt:string;
    updatedAt:string
}

export interface EmbedLinkPost {
        _id?: string;
        mapel: string;
        embedLink: string;
        guruMapel: unknown;
        tingkatan: string;
        jurusan: string;
        createdAt?:string;
        updatedAt?:string
}