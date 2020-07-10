import React, {Component} from 'react';
import csv2json from './parser';

// component to handle file uploading and csv parsing
export default class UploadFile  extends Component {
    constructor(props) {
      super(props);
      this.uploadFile = this.uploadFile.bind(this);
      this.state = {
          json: null
      };
    }

    uploadFile(event) {
        const file = event.target.files[0];
        if (file) {
          const data = new FormData();
          data.append('file', file);
          const reader = new FileReader();
          reader.onload = (event) => {
            const json = csv2json(event.target.result);
            this.setState({ json });
          };

          reader.readAsText(file);
        }
    }
    // Make a function that recieves the JSON object and checks for duplicates
    // Creating two different arrays, one with non duplicates and another one with duplicates
    // print the two arrays list

    render() {
        const { json } = this.state;
      return(
        <div className="Upload">
          {!json ? (<span>
          <input type="file"
          name="myFile"
          onChange={this.uploadFile} />
          </span>) :
          <div>{json}</div> }
        </div>
    );
    }
}
