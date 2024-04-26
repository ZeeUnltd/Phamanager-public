import { String } from "lodash";

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
  
 export  interface  decodedToken {
    accessToken :string;
    expeireDate:number
  }

  export interface patientRegistration {
    fistName:string,
    lastName:string,
    email:string,
    password:string,
    type:'PATEINT'|'CORPERATE_ORGANIZATION'
  }
  export interface pharmacyRegistration{
    bussinessName:string,
    email:string,
    password:string,
    type:'COMMUNITY_PHARMACY'|'HOSPITAL/CLINIC_PHARMACY'
  }
  export interface loginProps {
    email:string,
    password:String
  }
  export interface Auth{
    // userData:{
    //   id: string;
    //   businessName: string;
    //   type: string;
    //   email: string;
    //   isVerified: boolean;
    //   createdAt: string;
    //   updatedAt: string;
    // }|null,
    accessToken:string|null,
    // refreshToken:string|null
  }