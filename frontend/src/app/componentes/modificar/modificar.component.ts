import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencia } from 'src/app/servicos/transferencia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  transferencia:Transferencia = {
    id_transferencias: "",
    nomeCliente: "",
    valor: "",
    contaCliente: ""
  }

  constructor(private transferenciaservice:TransferenciaService, private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id_inicio = <any>this.activatedroute.snapshot.params['id']
    this.transferenciaservice.getUmaTransferencia(id_inicio).subscribe({
      next: (resultado) => this.transferencia = (resultado),
      error: (erro) => console.error(erro),
      complete: () => console.info ("Dados apresentados")

    })
  }

  modificarTransferencia(){
    this.transferenciaservice.editarTransferencia(this.transferencia.id_transferencias, this.transferencia ).subscribe({
      next: (resultado) => console.log(resultado),
      error: (erro) => console.error(erro),
      complete: ()=> console.info ("Editado com sucesso")
    })
    this.router.navigate(['/inicio'])
  }



}
