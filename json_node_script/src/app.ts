import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "test.csv";
const source = fs.createReadStream(csvFilePath);

// contains the final result
const result: Object[] = [];

source.pipe(
  csv(
    {
      delimiter: ",",
      checkType: true,
    },
    {
      objectMode: true,
    }
  )
    .on("data", (data) => {
      // fix types
      // change date from string
      const dateAsString = data.date.toString();
      data.date = new Date(
        dateAsString.slice(0, 4) +
          "/" +
          dateAsString.slice(4, 6) +
          "/" +
          dateAsString.slice(6, 8)
      );

      // change page views from string to number

      
      
      data.totals.visits =
        !data.totals.visits ? 0 : Number(data.totals.visits) ;
      data.totals.hits =
        !data.totals.hits ? 0 : Number(data.totals.hits) ;
      data.totals.pageviews =
        !data.totals.pageviews ? 0 : Number(data.totals.pageviews);
      data.totals.newVisits =
        !data.totals.newVisits ? 0 : Number(data.totals.newVisits);
      data.totals.bounces =
        !data.totals.bounces ? 0 : Number(data.totals.bounces);
      

      // push the formatted row into the array
      result.push(data);
    })
    .on("error", (err) => {
      console.log(err);
    })
    .on("done", () => {
      console.log("Converted csv to json");
			// write to the file 'result.json'
      fs.writeFileSync("result.json", JSON.stringify(result));
    })
);
