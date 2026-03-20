import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements AfterViewInit{

  //este script es cogido del ejemplo del forulario hecho en clase pero modificado para que funcione en bootstrap
  ngAfterViewInit(): void {
    (() => {
      'use strict'
      const forms = document.querySelectorAll('.needs-validation')
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          // Tipar form como HTMLFormElement para acceder a checkValidity()
          const formElement = form as HTMLFormElement;//añadido para que funcione en angular
          if (!formElement.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          formElement.classList.add('was-validated')
        }, false)
      })
    })()
  }
}