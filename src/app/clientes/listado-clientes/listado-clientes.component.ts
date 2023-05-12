import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  //Estas dos se conocen como propiedades
  clientes!: Cliente[];
  grupos: Grupo[] = [];
  
  constructor(private clientesService: ClientesService) { }//A esto se lo llama inyección de dependencias

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

  borrarCliente(cliente: any){
    this.clientes.splice(cliente, 1);
  }
  ordenarA(){
    this.clientes.sort((a,b)=>{
      const nombreA=a.nombre.toLowerCase
      const nombreb=b.nombre.toLowerCase
      if(a.nombre < b.nombre){
        return -1
      }
      if(a.nombre > b.nombre){
        return 1;
      }
      return 0
    }
  
     )}
     ordenD(){
      this.clientes.sort((a, b)=>{
        if(a.nombre < b.nombre){
          return 1
        }
        if(a.nombre > b.nombre){
          return -1;
        }
      return 0
    
      })
     }
  

}
