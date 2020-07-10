import React, {Component} from 'react';
import csv2json from './parser';

export default class UploadFile  extends Component {
    constructor(props) {
      super(props);
      this.uploadFile = this.uploadFile.bind(this);
      this.state = {
          json: null
      };
    }
    uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);
        if (file) {
          let data = new FormData();
          data.append('file', file);
          const reader = new FileReader();
          reader.onload = (event) => {
            const text = event.target.result;
            const json = csv2json(text);
            this.setState({ json });
          };

          reader.readAsText(file);
        }
    }

    render() {
        const { json } = this.state;
        let jsonJsx = null;
        if (!json) {
            jsonJsx = 'Upload file...';
        } else {
            jsonJsx = (
                <div>{json}</div>
            );
        }
      return(
        <div className="Upload">
          <span>
          <input type="file"
          name="myFile"
          onChange={this.uploadFile} />
          </span>
          {jsonJsx}
        </div>
    );
    }
}
