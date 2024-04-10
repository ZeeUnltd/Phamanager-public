import { String } from "lodash";

interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    type: 'PATIENT'|'DISTRIBUTOR';
    email: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface user {
    status: string;
    data: {
      accessToken: string;
      refreshToken: string;
      user: UserData;
    };
  }
  
 export  interface userAccessToken {
    accessToken :string
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
