import { Component } from '@angular/core';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App';
  constructor(private service:SharedService){}
  MovieList:any=[];
  
ngOnInit():void{
this.refreshMovieList();
}
rentThis(MovieID:BigInteger){

}
  refreshMovieList(){
    this.service.getMovList().subscribe(data=>{
      this.MovieList=data;
    });
  }

}
