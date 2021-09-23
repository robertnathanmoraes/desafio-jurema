import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  state =  'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  url: any;
  urlBolsaFamilia = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio';
  headersBolsaFamilia = {"chave-api-dados" : "36a041f671f31413cb9d89dd6c7fa7b2"}
  mesAno = 202008
  codigoIbge = 3550308
  pagina = 1
  params = {mesAno:this.mesAno, codigoIbge:this.codigoIbge, pagina: this.pagina}

  constructor(private httpClient: HttpClient) { }

  listarEstados(): Observable<any> {
    return this.httpClient.get(this.state);
  }

  // Obtem todos os estados
  listarCidades(url: any): Observable<any> {
    return this.httpClient.get(this.url);
  }

  bolsaFamilia(): Observable<any> {
    return this.httpClient.get(this.urlBolsaFamilia);
  }

}


export interface state {
  nome: string;
}
