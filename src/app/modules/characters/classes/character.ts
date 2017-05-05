import { Address } from '../classes/address';
import { Company } from '../classes/company';

export interface Character {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;         
}