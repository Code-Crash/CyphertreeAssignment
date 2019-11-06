# CyphertreeAssignment

## Future(s) Covered:

1. Integration of Kendo Grid and Other Components
2. User will able to sort the column (Added single column support, we can do multiple with 'multiple' string in template file)
3. User will able to Expand/Collapse the View.
4. After Expand, User can see the related movies (I did find the related movies based on Genre, if any on Genre is matching with any other movies, it will shown in the Child Grid)
5. On Single Click, User can see the more details of the selected Movie.
6. User can filter the data based on Title and other parameters expect Thumbnails

## Prerequisites

1. Node.js should be installed (v8.x or above)
2. Angular Cli should be installed (v7.x or above)

## Development server:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Used Library and Sources:

1. [angular-cli](https://cli.angular.io)
2. [kendo-angular-ui](https://www.telerik.com/kendo-angular-ui)
3. [Movies from Github](https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4)


## Build:

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Note:

1. We are using locally stored json data in folder data (file: movies.ts)

## Running unit tests:

* No Test Available

## Running end-to-end tests:

* No Test Available

## TODO (OR What we can do better)

1. We can add more style while showing the details for a single movie.
2. We can utilize the Scroll Component to show the Images from Movie Array.
3. We can implement a API based data loading and filtering instead of getting data from local file.
4. We can implement Excel/CSV Export/Import using Kendo UI.
