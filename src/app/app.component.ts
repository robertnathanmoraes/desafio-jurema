import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'desafio-jurema';
  // @ts-ignore
  state: Array[any]

  // @ts-ignore
  form: FormGroup;
  city: any;
  colorScheme = {
    domain: ['#003c88']
  };
  // @ts-ignore
  data;
  // @ts-ignore
  points;
  // @ts-ignore
  priority;
  xAxisLabel = 'Valor'
  yAxisLabel = 'Quantidade'
  x = Math.floor((Math.random() * 10000) + 1);
  // @ts-ignore
  saleData;
  loading = false;
  bolsaFamiliaData: any;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: ApiService,
  ) {
  }

  ngOnInit() {
   this.listarEstados()
   this.bolsaFamilia()
  }

  initForm() {
    this.form = this.formBuilder.group({
      state: new FormControl(1),
      city: new FormControl(1),
    });
  }

  listarEstados() {
    this.stateService.listarEstados().subscribe((data) => {
      this.state = data;
    })
  }

  listarCidades(url: any) {
    this.stateService.url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + url + '/municipios';
    this.stateService.listarCidades(url).subscribe((data) => {
      this.city = data;
      console.log('city', data)
    })
  }

  bolsaFamilia() {
    this.stateService.bolsaFamilia().subscribe((data) => {
      this.bolsaFamiliaData = data;
      console.log('bolsa', data)
    })
  }

  onSubmitForm() {


  }
}
