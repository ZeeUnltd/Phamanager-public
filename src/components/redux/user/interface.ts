
interface UserData {
    id: string;
    firstName: string;
    businessName:string;
    lastName: string;
    type: 'PATIENT'|'DISTRIBUTOR';
    email: string;
    createdAt: string;
    updatedAt: string;
  }
  interface Pharmacy {
    id: string;
    businessName: string;
    type: string;
    email: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

  
  export interface user {
    status: string;
    data: {
      accessToken: string;
      refreshToken: string;
      pharmacy: Pharmacy;
    }
  }