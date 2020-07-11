# Csv parser:

Front End app Csv parser, uploading a Csv file to the browser gives you back a Json object containing the Original file, another json contain duplicates and another ones containing unique files.


## Setup Steps

1. Fork and clone this repository.
2.
```bash
# Move to the right directory
cd monolithstarter-static

# Install dependencies
npm install

# Start the application in dev mode
npm run start
```
You will now have your frontend running at [localhost:9000](http://localhost:9000/)

To build frontend for production with minification:

```bash
yarn run build
```

The build artifacts will be stored in the `build/` directory

## Important Links

- [API Repo](https://github.com/Frankazo/csv-parser)
- [Deployed Client](https://frankazo.github.io/csv-parser/)
- [Starter app](https://candidate-take-home.s3.amazonaws.com/simple-app-starter.zip)

## The Exercise

1.Parse the attached normal.csv
2.Identify possible duplicate records in normal.csv
3.Leverage existing algorithms ‘Metaphone or Levenshtein distance’
4.Find exact duplicates and also records that are likely to be a duplicate entry with different spelling, missing data, small differences, etc.
5.Ignore the ID column
6.Example of a duplicate record: bill,smith,bsmith@gmail.com,190 main st boston mass and bill,smith,bsmith@gmail.com,400 west street boston ma
7.Build a lightweight web application to display the processed data.
8.Print each set of duplicates separately as well as a set of non-duplicate entries.
9.Create a JSON object output
10.Display duplicates separately as well as a set of non-duplicate entries.
11.Some duplicates are harder to identify than others and some false negatives harder to eliminate

Rules:
You can use any library you’re comfortable
Use any resource you have available to you - but remember that we’re going to ask you questions about your code, so be prepared to defend any structure/algorithm, design/technical choices you make.
Ignore the odd dataset, it’s nonsensical and auto-generated. For example, email addresses do not match the Company Name.


## Planning and development

Hit the ground running making pseudo code
steps to solve the problem
1. read a csv files
2. turn csv file into Javascript object
3. find duplicates and likely duplicate using exising alogorithms (when with Levenshtein distance)
4. Print Javascript objects that contain Uniques and duplicate records
5. Display Json object that contains original, Uniques and duplicate records


### Technologies Used

- React.js
- Node.js
- Javascript
- HTML/CSS
- Git

### Next Steps

- create style components to display data
