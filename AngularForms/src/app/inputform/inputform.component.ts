import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormDetail } from './form-detail';

@Component({
  selector: 'inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {
  detail:FormDetail = new FormDetail('','','',21,'')
  displaySquare:boolean = false
  numberInfo:string = ''

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
  }

 
  onSubmit(isValid:boolean | null) {
    if(isValid) {
      console.log('form valid')
      this.displaySquare = true
      this.getNumberInfo(this.detail.age)
    }
    else {
      console.log('not valid')
    }
  }

  onClear() {
    this.displaySquare = false
  }

  getNumberInfo(number:number) {
    this.httpClient.get<any>(`http://numbersapi.com/${number}?json`).subscribe(
      response => {
        this.numberInfo = response.text
      }
    )
  }
}
