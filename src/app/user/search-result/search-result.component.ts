import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../../Services/main-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  SearchResult: any;
  query!: string;
  constructor(private route: ActivatedRoute, private service: MainServiceService) { }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries: any) => {
      this.query = queries.get('q');
      this.service.SearchProduct(this.query).subscribe((res) => {
        this.SearchResult = res;
        console.log(res);
      });
    });
  }
}
