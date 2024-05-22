import { Component } from '@angular/core';
import { ActivePostComponent} from './active-post/active-post.component';  // Importa il servizio
import { iPost } from './model/i-post';  // Importa l'interfaccia


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: iPost[] = [];  // Usa l'interfaccia per definire il tipo di dati

  constructor(private ActivePostComponent: ActivePostComponent) { }  // Inietta il servizio

  ngOnInit(): void {
    this.ActivePostComponent.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
