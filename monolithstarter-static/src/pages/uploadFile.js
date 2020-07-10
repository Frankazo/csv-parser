import React, {Component} from 'react';
import {csvObj, LevenshteinDistance} from './parser';

// component to handle file uploading and csv parsing
export default class UploadFile  extends Component {
    constructor(props) {
      super(props);
      this.uploadFile = this.uploadFile.bind(this);
      this.state = {
          original: null,
          json: null,
          uniques: null,
          duplicates: null
      };
    }

    uploadFile(event) {
        const file = event.target.files[0];
        if (file) {
          const data = new FormData();
          data.append('file', file);
          const reader = new FileReader();
          reader.onload = (event) => {
            const result = csvObj(event.target.result);
            this.setState({ original: result, json: JSON.stringify(result) });
            const uniqueArray = result.filter((item, index) => {
              const fName = JSON.stringify(item.first_name);
              const lName = JSON.stringify(item.last_name);
              const val = result.findIndex(obj => {
                if (LevenshteinDistance(JSON.stringify(obj.first_name), fName) > 2 || LevenshteinDistance(JSON.stringify(obj.last_name), lName) > 2) {
                    return false;
                }
                return true;
              });
              if ( index === val ) {
                  return true;
              } else {
                  console.log(item);
                  console.log(result[val]);
                  return false;
              }
            });
            this.setState({ uniques: uniqueArray });
          };
          reader.readAsText(file);
        }
    }

    render() {
        const { original, json, uniques, duplicates } = this.state;
      return(
        <div className="Upload">
          {!json ? (<span>
          <input type="file"
          name="myFile"
          onChange={this.uploadFile} />
          </span>) :
         <div>
            <div>{json}</div>
         </div> }
        </div>
    );
    }
}
