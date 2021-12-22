
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  //link para o backend
  url = "/transferencias"



  constructor(private http:HttpClient) { }
  getTransferencias(){
    //Pega a rota de transferências da variável url declarada acima.
    return this.http.get(this.url)
  }
  getUmaTransferencia(id:any){
    return this.http.get(this.url + "/" + id)
  }
  addTransferencia(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)
  }

  deleteTransferencia(id:any){
    return this.http.delete(this.url + "/" + id)
  }

  editarTransferencia(id:any, transferencia:Transferencia){
    return this.http.put(this.url + "/" + id, transferencia)
  }
}

export interface Transferencia{
  id_transferencias?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}
