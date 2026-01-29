// File: data/certificates.ts

// 1. Kita bikin cetakan (Interface) dulu biar TypeScript paham
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
  credentialLink: string;
}

// 2. Kita export array kosong TAPI dengan label tipe data ": Certificate[]"
export const certificates: Certificate[] = [
  // Biarkan kosong, sekarang TypeScript gak bakal error lagi
];