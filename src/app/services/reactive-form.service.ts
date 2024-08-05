import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {
  constructor(private fb:FormBuilder) { }

  createJob():FormGroup{
    return this.fb.group({
      jobName:['',[Validators.required,Validators.minLength(2)]],
      jobDescription:['',[Validators.required,Validators.minLength(2)]],
      positions:this.fb.array([])
    })
  }

  addJob(jobForm:FormGroup){
    this.GetJobs(jobForm).push(this.createJob());
  }

  deleteJob(jobForm:FormGroup,jobIndex:number){
    this.GetJobs(jobForm).removeAt(jobIndex)
  }

  createPosition():FormGroup{
    return this.fb.group({
      positionName:['',[Validators.required,Validators.minLength(2)]],
      positionDescription:['',[Validators.required,Validators.minLength(2)]],
    })
  }


  addPosition(jobForm:FormGroup,jobIndex:number){
    this.Getpositions(jobForm,jobIndex).push(this.createPosition());
  }

  deletePosition(jobForm:FormGroup,jobIndex:number,positionIndex:number){
    this.Getpositions(jobForm,jobIndex).removeAt(positionIndex)
  }

   Getpositions(jobForm:FormGroup,jobIndex:number):FormArray{
     let jobs = jobForm.get('jobs') as FormArray;
     let positions = jobs.at(jobIndex).get('positions') as FormArray
     return positions;
  }
   GetJobs(jobForm:FormGroup):FormArray{
     let jobs = jobForm.get('jobs') as FormArray;
     return jobs as FormArray;
  }


}
