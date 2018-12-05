import { Component, OnInit } from '@angular/core';
import { Cep } from 'app/cep';
import { CepService } from 'app/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = new Cep();

  constructor(private cepService : CepService) { }

  ngOnInit() {
  }

  buscar(){
    this.cepService.buscar(this.cep.cep)
    .then((cep:Cep) => this.cep = cep);
  }

}
