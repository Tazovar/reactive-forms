import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormService } from '../../services/reactive-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
jobForm!:FormGroup
constructor(private fb:FormBuilder,public rfs:ReactiveFormService){}
ngOnInit(): void {
  this.jobForm = this.fb.group({
    jobs: this.fb.array([this.rfs.createJob()])
  })
}

addJob(){
  this.rfs.addJob(this.jobForm)
}
deleteJob(jobIndex:number){
  this.rfs.deleteJob(this.jobForm,jobIndex)
}

addPosition(jobIndex:number){
this.rfs.addPosition(this.jobForm,jobIndex)
}

deletePosition(jobIndex:number,positionIndex:number){
  this.rfs.deletePosition(this.jobForm,jobIndex,positionIndex)
}


onFormSubmti(){
  console.log(this.jobForm.value);
  
}


}
