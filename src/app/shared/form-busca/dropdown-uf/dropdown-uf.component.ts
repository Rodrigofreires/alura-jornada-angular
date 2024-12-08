import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';

  filteredOptions: any

// constructor(private unidadeFederativaService : UnidadeFederativaService){

// }

ngOnInit(): void {
  
}

}
