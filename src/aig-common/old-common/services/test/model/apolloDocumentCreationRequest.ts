/**
 * entityManager
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { ApolloDocumentCreationRequestDocumentDetails } from './apolloDocumentCreationRequestDocumentDetails';


export interface ApolloDocumentCreationRequest { 
    iddocumento: number;
    idazienda: number;
    TIPO: string;
    ndoc: string;
    ndocSuff: number;
    data: string;
    protocollo: number;
    protSuff: number;
    dataregistrazione: string;
    idanagrafica: number;
    idsottoconto: number;
    intestazione: string;
    indirizzo: string;
    cap: string;
    citt: string;
    prov: string;
    piva: string;
    codfisc: string;
    percentIva?: number;
    contrintegperc: number;
    contrintegval: number;
    ivasino: boolean;
    iva: number;
    totimponibile: number;
    note: string;
    totale: number;
    mdopag: number;
    conto: number;
    opeins: string;
    datains: string;
    cliente: boolean;
    fornitore: boolean;
    percritenuta: number;
    ritenuta: number;
    documentDetails: Array<ApolloDocumentCreationRequestDocumentDetails>;
}