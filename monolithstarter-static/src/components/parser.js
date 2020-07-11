// Csv parsing function
// receives the Csv file and turns it into a JSON object

// Compute the edit distance between the two given strings
export  const LevenshteinDistance =  function(a, b){
            if(a.length === 0) return b.length;
            if(b.length === 0) return a.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for(i = 0; i <= b.length; i++){
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for(j = 0; j <= a.length; j++){
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for(i = 1; i <= b.length; i++){
                for(j = 1; j <= a.length; j++){
                if(b.charAt(i-1) === a.charAt(j-1)){
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                            Math.min(matrix[i][j-1] + 1, // insertion
                                                    matrix[i-1][j] + 1)); // deletion
                }
                }
            }

        return matrix[b.length][a.length];
};

// receives the Csv file and turns it into a Js object
export function csvObj(csv){
    const lines=csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for(let i=1; i<lines.length; i++) {
      const obj = {};

      let row = lines[i],
        queryIdx = 0,
        startValueIdx = 0,
        idx = 0;

      if (row.trim() === '') { continue; }

      while (idx < row.length) {
        /* if we meet a double quote we skip until the next one */
        let c = row[idx];

        if (c === '"') {
          do { c = row[++idx]; } while (c !== '"' && idx < row.length - 1);
        }

        if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
          /* we've got a value */
          let value = row.substr(startValueIdx, idx - startValueIdx).trim();

          /* skip first double quote */
          if (value[0] === '"') { value = value.substr(1); }
          /* skip last comma */
          if (value[value.length - 1] === ',') { value = value.substr(0, value.length - 1); }
          /* skip last double quote */
          if (value[value.length - 1] === '"') { value = value.substr(0, value.length - 1); }

          const key = headers[queryIdx++];
          obj[key] = value;
          startValueIdx = idx + 1;
        }

        ++idx;
      }

      result.push(obj);
    }
    return result;
};
