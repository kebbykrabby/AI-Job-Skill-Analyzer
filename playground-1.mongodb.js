/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'feeds';
const collection = 'logs';

// Create a new database.
use(database);

db.logs.insertMany([
  {
    "_id": "68685831402cf56cd33b6091",
    "country_code": "CA",
    "currency_code": "CAD",
    "progress": {
      "SWITCH_INDEX": true,
      "TOTAL_RECORDS_IN_FEED": 29802,
      "TOTAL_JOBS_FAIL_INDEXED": 0,
      "TOTAL_JOBS_IN_FEED": 22157,
      "TOTAL_JOBS_SENT_TO_ENRICH": 0,
      "TOTAL_JOBS_DONT_HAVE_METADATA": 0,
      "TOTAL_JOBS_DONT_HAVE_METADATA_V2": 0,
      "TOTAL_JOBS_SENT_TO_INDEX": 22158
    },
    "status": "completed",
    "timestamp": new Date("2025-07-04T22:42:35.765Z"),
    "transactionSourceName": "Deal21",
    "noCoordinatesCount": 503,
    "recordCount": 22158,
    "uniqueRefNumberCount": 19358
  },
  {
    "_id": "6868584f402cf56cd33b6092",
    "country_code": "GB",
    "currency_code": "GBP",
    "progress": {
      "SWITCH_INDEX": true,
      "TOTAL_RECORDS_IN_FEED": 2151,
      "TOTAL_JOBS_FAIL_INDEXED": 0,
      "TOTAL_JOBS_IN_FEED": 432,
      "TOTAL_JOBS_SENT_TO_ENRICH": 0,
      "TOTAL_JOBS_DONT_HAVE_METADATA": 0,
      "TOTAL_JOBS_DONT_HAVE_METADATA_V2": 0,
      "TOTAL_JOBS_SENT_TO_INDEX": 432
    },
    "status": "completed",
    "timestamp": new Date("2025-07-04T22:40:21.155Z"),
    "transactionSourceName": "Deal28",
    "noCoordinatesCount": 35,
    "recordCount": 432,
    "uniqueRefNumberCount": 257
  },
  {
    "_id": "686854f8402cf56cd33b5315",
    "country_code": "US",
    "currency_code": "USD",
    "progress": {
      "SWITCH_INDEX": true,
      "TOTAL_RECORDS_IN_FEED": 430000,
      "TOTAL_JOBS_FAIL_INDEXED": 11999,
      "TOTAL_JOBS_IN_FEED": 213860,
      "TOTAL_JOBS_SENT_TO_ENRICH": 0,
      "TOTAL_JOBS_DONT_HAVE_METADATA": 205399,
      "TOTAL_JOBS_DONT_HAVE_METADATA_V2": 205413,
      "TOTAL_JOBS_SENT_TO_INDEX": 213854
    },
    "status": "completed",
    "timestamp": new Date("2025-07-04T22:40:15.184Z"),
    "transactionSourceName": "Deal88",
    "noCoordinatesCount": 204,
    "recordCount": 8441,
    "uniqueRefNumberCount": 6898
  },
  {
    "_id": "6868561f402cf56cd33b5c68",
    "country_code": "ZA",
    "currency_code": "ZAR",
    "progress": {
      "SWITCH_INDEX": true,
      "TOTAL_RECORDS_IN_FEED": 68519,
      "TOTAL_JOBS_FAIL_INDEXED": 105,
      "TOTAL_JOBS_IN_FEED": 68440,
      "TOTAL_JOBS_SENT_TO_ENRICH": 251,
      "TOTAL_JOBS_DONT_HAVE_METADATA": 3,
      "TOTAL_JOBS_DONT_HAVE_METADATA_V2": 1,
      "TOTAL_JOBS_SENT_TO_INDEX": 68080
    },
    "status": "completed",
    "timestamp": new Date("2025-07-04T22:39:45.323Z"),
    "transactionSourceName": "Deal76",
    "noCoordinatesCount": 10000,
    "recordCount": 68074,
    "uniqueRefNumberCount": 54528
  },
  {
    "_id": "686854f8402cf56cd33b5314",
    "country_code": "CA",
    "currency_code": "USD",
    "progress": {
      "SWITCH_INDEX": true,
      "TOTAL_RECORDS_IN_FEED": 125632,
      "TOTAL_JOBS_FAIL_INDEXED": 9883,
      "TOTAL_JOBS_IN_FEED": 87285,
      "TOTAL_JOBS_SENT_TO_ENRICH": 479,
      "TOTAL_JOBS_DONT_HAVE_METADATA": 3,
      "TOTAL_JOBS_DONT_HAVE_METADATA_V2": 3,
      "TOTAL_JOBS_SENT_TO_INDEX": 86578
    },
    "status": "completed",
    "timestamp": new Date("2025-07-04T22:39:10.064Z"),
    "transactionSourceName": "Deal77",
    "noCoordinatesCount": 3685,
    "recordCount": 86575,
    "uniqueRefNumberCount": 60440
  }
]);
