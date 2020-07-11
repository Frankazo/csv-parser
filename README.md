# Csv parser:

Front End app Csv parser, uploading a Csv file to the browser gives you back a Json object containing the Original file, another json contain duplicates and another ones containing unique files.


## Setup Steps

1. Download this [repository](https://github.com/Frankazo/csv-parser/archive/master.zip).
2. Unzip file
3. In terminal
```bash
# Move to the right directory
cd monolithstarter-static

# Install dependencies
npm install

# Start the application in dev mode
npm run start
```
You will now have your frontend running at [localhost:9000](http://localhost:9000/)

4. Upload Normal.csv File to the browser
5. See results

## The Exercise

1. Parse the attached normal.csv
2. Identify possible duplicate records in normal.csv
3. Leverage existing algorithms ‘Metaphone or Levenshtein distance’
4. Find exact duplicates and also records that are likely to be a duplicate entry with different spelling, missing data, small differences, etc.
5. Ignore the ID column
6. Example of a duplicate record: bill,smith,bsmith@gmail.com,190 main st boston mass and bill,smith,bsmith@gmail.com,400 west street boston ma
7. Build a lightweight web application to display the processed data.
8. Print each set of duplicates separately as well as a set of non-duplicate entries.
9. Create a JSON object output
10. Display duplicates separately as well as a set of non-duplicate entries.
11. Some duplicates are harder to identify than others and some false negatives harder to eliminate

Rules:
You can use any library you’re comfortable
Use any resource you have available to you - but remember that we’re going to ask you questions about your code, so be prepared to defend any structure/algorithm, design/technical choices you make.
Ignore the odd dataset, it’s nonsensical and auto-generated. For example, email addresses do not match the Company Name.


## Planning and development

Hit the ground running making pseudo code steps to solve the problem
1. Read a csv files:
    - First tested some libraries to turn Csv into Json files right, but encouter a problem because 'csv2Json' it's mainly used in server side because of 'fs'
    - Since I'm building the app in the fron end I decided to create an upload button to handle getting the file (following [these](https://stackoverflow.com/questions/55730030/how-to-render-uploaded-csv-file-content-as-json-output-on-react-component) steps)
2. Turn csv file into Javascript object
    - Created a function that receives the csv file and turns it into a Javascript Object (following [these](http://techslides.com/convert-csv-to-json-in-javascript) and [these](https://gist.github.com/jonmaim/7b896cf5c8cfe932a3dd) steps)
3. Find duplicates and likely duplicates using exising alogorithms (Levenshtein distance)
    - Develop a function to search for duplicate first and last names using the [Levenshtein distance](https://medium.com/@sumn2u/string-similarity-comparision-in-js-with-examples-4bae35f13968#:~:text=The%20Levenshtein%20distance%20is%20the,integer%2C%20sensitive%20to%20string%20length) algorithms
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

### Other Resources

- [Starter app](https://candidate-take-home.s3.amazonaws.com/simple-app-starter.zip)
- https://levelup.gitconnected.com/convert-csv-to-json-in-a-javascript-app-4673575a86aa
- http://techslides.com/convert-csv-to-json-in-javascript
- https://stackoverflow.com/questions/55730030/how-to-render-uploaded-csv-file-content-as-json-output-on-react-component
- https://gist.github.com/jonmaim/7b896cf5c8cfe932a3dd
- https://medium.com/@sumn2u/string-similarity-comparision-in-js-with-examples-4bae35f13968#:~:text=The%20Levenshtein%20distance%20is%20the,integer%2C%20sensitive%20to%20string%20length
- https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
- https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
