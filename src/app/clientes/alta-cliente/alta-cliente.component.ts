import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../clientes.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  //Estas dos se conocen como propiedades
  cliente!: Cliente;
  grupos: Grupo[] = [];


  constructor(private clientesService: ClientesService){

  } //A esto se lo llama inyección de dependencias

  ngOnInit(): void {
      this.cliente = this.clientesService.resetDataCliente();
      this.grupos = this.clientesService.getGrupos();
  }


  nuevoCliente(){
    this.clientesService.addCliente(this.cliente);
    this.cliente = this.clientesService.resetDataCliente();
  }

  capturarArchivo(event: any): void {/* este método lo que hace es captar el archivo,
  en realidad controla al evento (change) del input de tipo"file" que está en el alta-cliente.html */
    const file: File = event.target.files[0];/* Se asigna el primer archivo que seleccione el usuario
    a la variable file de tipo File */
    
    if (file) {
      // Obtener la URL de la imagen seleccionada
      const reader = new FileReader();
      /*Se crea una nueva instancia de FileReader llamada reader.
        FileReader es una API integrada en los navegadores web que permite leer el contenido de un archivo.
        A continuación, se define una función de devolución de llamada (onload) que se ejecutará cuando
        se complete la lectura del archivo. */
      reader.onload = (e: any) => {
        this.cliente.fotoPerfil = e.target.result;// aca asigna el archivo a la viariable fotoPerfil del Cliente
      };
      reader.readAsDataURL(file);//permite que el FileReader lea el contenido del archivo y genere una URL de datos que puede ser utilizada para mostrar o manipular el archivo en la aplicación.
    }
  }
}
