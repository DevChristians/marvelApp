import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  title = 'Forms';

  i_hero: number = 0;
  form!: FormGroup;
  heroes: Array<any> = [];

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.heroes = JSON.parse(localStorage.getItem('heroes')!);

    this.form = this.formBuilder.group({
      typeForm: ['create'],
      id: [''],
      name: ['', 
        [
          Validators.required, 
          Validators.maxLength(20),
          Validators.minLength(5),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
      super_power: ['', 
        [
          Validators.required, 
          Validators.maxLength(20),
          Validators.minLength(5),
          Validators.pattern('^[a-zA-Z ]*$')
        ]
      ],
    })

  }

  send(): any {
    if(this.form.value.typeForm == 'update') return this.update(this.form.value.id);
    if (this.form.valid){
      this.heroes.push({
        name: this.form.value.name.trim(),
        super_power: this.form.value.super_power.trim(),
      });
      localStorage.setItem('heroes', JSON.stringify(this.heroes));
      alert('Creado con exito!');
      this.form.reset();
    }
  }

  edit(i: any): any {
    this.form.controls['typeForm'].setValue('update');
    this.form.controls['id'].setValue(i);
    this.form.controls['name'].setValue(this.heroes[i].name);
    this.form.controls['super_power'].setValue(this.heroes[i].super_power);
  }

  update(i: any): any {
    if (this.form.valid){
      let ls_heroes = JSON.parse(localStorage.getItem("heroes")!);
      this.heroes[i].name = this.form.value.name.trim();
      this.heroes[i].super_power = this.form.value.super_power.trim();
      ls_heroes[i].name = this.heroes[i].name; 
      ls_heroes[i].super_power = this.heroes[i].super_power;
      localStorage.setItem("heroes",JSON.stringify(ls_heroes));
      
      alert('Actualización exitosa!');
    }
  }

  destroy(i:any): any{
    if (confirm("Seguro")){
      this.heroes.splice(i, 1);
      this.clearForm();
      localStorage.removeItem('heroes');
      localStorage.setItem('heroes', JSON.stringify(this.heroes));
    }
  }

  clearForm(): any {  
    this.form.reset();
  }

  blank(event: any): any{
    let key;
    key = event.keyCode;
    key = String.fromCharCode(key);

    let regex = new RegExp("^[a-zA-Z ]*$");

    if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
    }
  }

}
