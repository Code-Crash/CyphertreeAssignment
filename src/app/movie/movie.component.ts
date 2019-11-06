import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../data/movies';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() public movie: Object;
  public opened = false;
  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  public movies: any[] = Movies;
  public allowUnsort = true;
  public selected: any = null;
  public sort: SortDescriptor[] = [
    { field: 'ID', dir: 'asc' },
    // { field: 'Title', dir: 'asc' }, // We can add multiple sort, but it's useless for a single sort
    // { field: 'Genre', dir: 'asc' }, // We can add multiple sort, but it's useless for a single sort
    // { field: 'imdbRating', dir: 'asc' }, // We can add multiple sort, but it's useless for a single sort
  ];
  public state: State = {
    skip: 0,
    take: 5,
    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'Title', operator: 'contains', value: 'Ava' }]
    }
  };

  constructor() { }

  /**
   * @description - On Init Life Cycle, we will check if we are getting the movie from
   *                parent component as a input, if movie is there, it means we need to show the child grid.
   */
  ngOnInit() {
    if (this.movie) {
      let genres = (this.movie['Genre'] || '').split(',').map((item) => { return (item && item.trim()); });
      this.movies = this.movies.filter((movie) => {
        if (genres && genres.length && this.movie['ID'] != movie.ID) {
          let mGenres = (movie['Genre'] || '').split(',').map((item) => { return (item && item.trim()); });
          if (genres.filter(value => -1 !== mGenres.indexOf(value)).length) {
            return movie;
          }
        }
      });
      this.loadMovies(); // Load only genres matching data for a child grid
    } else {
      this.loadMovies(); // Load Parent Grid first time.
    }
  }

  /**
   * @description - This function will provide the data after click on a row in any grid
   * @param event
   */
  public cellClick(event) {
    this.selected = Object.assign({}, event.dataItem || {}); // create a copy of data to avoid reference issues
    if (this.selected['Images'] && this.selected['Images'].length) {
      this.selected['Images'] = this.selected.Images.map((item) => { return { title: this.selected.Title, url: item }; });
      console.log(this.selected);
    }
    this.open();
  }

  /**
   * @description - This function will load the movies data from stored constants
   */
  public loadMovies() {
    this.gridView = {
      data: orderBy(this.movies.slice(this.skip, this.skip + this.pageSize), this.sort),
      total: this.movies.length
    };
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridView = process(this.movies, this.state);
    console.log(this.gridView);
  }

  /**
   * @description This function will help you to sort the columns based on event
   * @param sort
   */
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadMovies();
  }

  /**
   * @description This function will handle the page change event.
   * @param event
   */
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadMovies();
  }

  /**
   * @description This function will close the modal/dialog box
   * @param {string} status - Status for your personal usage
   */
  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  /**
   * @description - This function will open a modal/dialog box to show the movie details
   */
  public open() {
    this.opened = true;
  }

  /**
   * @description - This function will return the keys from the object
   * @param obj
   */
  public serializedObject(obj) {
    const serialized = [];
    if (obj) {
      serialized.push({ key: 'ID', value: (obj.ID || '') });
      serialized.push({ key: 'Title', value: (obj.Title || '') });
      serialized.push({ key: 'Year', value: (obj.Year || '') });
      serialized.push({ key: 'Rated', value: (obj.Rated || '') });
      serialized.push({ key: 'Released', value: (obj.Released || '') });
      serialized.push({ key: 'Runtime', value: (obj.Runtime || '') });
      serialized.push({ key: 'Genre', value: (obj.Genre || '') });
      serialized.push({ key: 'Director', value: (obj.Director || '') });
      serialized.push({ key: 'Writer', value: (obj.Writer || '') });
      serialized.push({ key: 'Language', value: (obj.Language || '') });
      serialized.push({ key: 'Rating', value: (obj.imdbRating || '') });
      serialized.push({ key: 'Votes', value: (obj.imdbVotes || '') });
    }
    return serialized;
  }

}
