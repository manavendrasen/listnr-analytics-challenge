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
        data.totals.visits !== null ? Number(data.totals.visits) : null;
      data.totals.hits =
        data.totals.hits !== null ? Number(data.totals.hits) : null;
      data.totals.pageviews =
        data.totals.pageviews !== null ? Number(data.totals.pageviews) : null;
      data.totals.newVisits =
        data.totals.newVisits !== null ? Number(data.totals.newVisits) : null;

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
