import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompositeShape } from './core/models/composite-shape.model';
import { AreaCalculationServiceService } from './core/services/area-calculation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Coding Challenge';

  areaCalculationForm: FormGroup;
  compositeShape: CompositeShape
  selectedShape = "";  //use enum
  area: number;
  constructor(
    private areaService: AreaCalculationServiceService, private fb: FormBuilder

  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.areaCalculationForm = this.fb.group({
      shapeName: new FormControl(''),
      circle: new FormGroup({
        radius: new FormControl(0),
      }),
      square: new FormGroup({
        side: new FormControl(0),
      }),
      rectangle: new FormGroup({
        lengthOfSide: new FormControl(0),
        width: new FormControl(0),
      }),      
      triangle: new FormGroup({
        base: new FormControl(0),
        height: new FormControl(0),
      }),      
      
    });

  }

  setShape(shape){
    this.selectedShape = shape;;
    this.area = null; 
  }

  calculateArea(){
    this.areaCalculationForm.get("shapeName").setValue(this.selectedShape)
    this.compositeShape = {
      ...this.areaCalculationForm.value
    };

    this.areaService.calculateArea(this.compositeShape).subscribe(r=>{
      console.log(r);
      this.area = r;
    });

  }


}
