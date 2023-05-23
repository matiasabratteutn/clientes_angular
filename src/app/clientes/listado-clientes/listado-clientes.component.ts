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
  public buscarCliente: any;
  public encontrado: any;
  public clienteBuscado: string='';
  public grupoBuscado: any;
  public grupoIndex: any;
  public ascendente: boolean=true;
  public edit: boolean=false;

  constructor(private clientesService: ClientesService) { }//A esto se lo llama inyección de dependencias

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

  botonBuscar(){
    this.buscarCliente = this.clienteBuscado;
    const x = this.clientes.find((elemento) => {
      
        if(elemento.nombre === this.buscarCliente){
          this.encontrado = this.clientes.indexOf(elemento);
          this.buscarCliente = this.clientes[this.encontrado]; 
        }
      })
  }
  clienteEncontrado(){
    return this.clientes[this.encontrado];
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
      return 0;
    }
  
     )}
  ordenD(){
    this.clientes.sort((a, b)=>{
      if(a.nombre < b.nombre){
        return 1;
      };
      if(a.nombre > b.nombre){
        return -1;
      };
        return 0;
      });
  }

  ordenarSegun(){
    if(this.ascendente == true){
      this.ascendente = false;
      this.clientes.sort((a,b)=>{
        const nombreA=a.nombre.toLowerCase
        const nombreb=b.nombre.toLowerCase
        if(a.nombre < b.nombre){
          return -1
        }
        if(a.nombre > b.nombre){
          return 1;
        }
        return 0;
    }
    )} else if(this.ascendente == false){
      this.ascendente = true;
      this.clientes.sort((a, b)=>{
        if(a.nombre < b.nombre){
          return 1;
        };
        if(a.nombre > b.nombre){
          return -1;
        };
          return 0;
        });
    }
  }
  guardarCliente(){
    let editar = document.querySelector(".EditarCliente");
    editar?.setAttribute("contenteditable","false");
  }
  editarCliente(){
    let editar = document.querySelector(".EditarCliente");
    
    if(editar?.getAttribute("contenteditable")){
      editar?.setAttribute("contenteditable","true");
    }

  }


  };

