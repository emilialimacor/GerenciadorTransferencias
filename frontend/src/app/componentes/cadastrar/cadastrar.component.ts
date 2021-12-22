import { Transferencia, TransferenciaService } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  transferencia:Transferencia = {
    id_transferencias: "",
    nomeCliente: "",
    valor: "",
    contaCliente: ""
  }

  constructor(private transferenciaService:TransferenciaService, private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarTransferencias(){
    delete this.transferencia.id_transferencias
    this.transferenciaService.addTransferencia(this.transferencia).subscribe({
      next: (resultado)=> console.log(resultado),
      error: (erro) => console.error(erro),
      complete: ()=> console.info("Adicionado com sucesso.")
    })
    this.router.navigate(["/inicio"
  ])


  }

}
