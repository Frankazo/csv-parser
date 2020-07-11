import React, {Component} from 'react';
import {csvObj, LevenshteinDistance} from './parser';

// component to handle file uploading and csv parsing
export default class UploadFile  extends Component {
    constructor(props) {
      super(props);
      this.uploadFile = this.uploadFile.bind(this);
      this.state = {
          json: null,
          uniques: null,
          duplicates: []
      };
    }

    uploadFile(event) {
        // get the file from the event
        const file = event.target.files[0];

        // if file is uploaded
        if (file) {
          const data = new FormData();
          data.append('file', file);
          const reader = new FileReader();

          // when the file is loaded
          reader.onload = (event) => {
            // csvObj function gets the csv file and turns it into Js Object
            const result = csvObj(event.target.result);

            // Array that will contain the duplicate entries
            const duplArray = [];

            // Array that will contain the unique entries
            const uniqueArray = result.filter((item, index) => {
              const fName = JSON.stringify(item.first_name);
              const lName = JSON.stringify(item.last_name);

              // condition to compare entries using the Levenshtein algorithms
              const val = result.findIndex(obj => {
                if (LevenshteinDistance(JSON.stringify(obj.first_name), fName) > 2 || LevenshteinDistance(JSON.stringify(obj.last_name), lName) > 2) {
                    return false;
                }
                return true;
              });

              // if index number is different we found a duplicate
              if ( index === val ) {
                  return true;
              } else {
                  duplArray.push(item);
                  duplArray.push(result[val]);
                  return false;
              }
            });

            // setting state and turning it into Json to print
            this.setState({ json: JSON.stringify(result), uniques: JSON.stringify(uniqueArray), duplicates: JSON.stringify(duplArray) });
            console.log(duplArray);
            console.log(uniqueArray);
          };
          reader.readAsText(file);
        }
    }

    render() {
        const { json, uniques, duplicates } = this.state;
      return(
        <div className="Upload">
          {!json ? (<span>
          <input type="file"
          name="myFile"
          onChange={this.uploadFile} />
          </span>) :
         <div>
            <h2>Uniques</h2>
            <div>{uniques}</div>
            <h2>Duplicates</h2>
            <div>{duplicates}</div>
            <h2>Original File</h2>
            <div>{json}</div>
         </div> }
        </div>
    );
    }
}
