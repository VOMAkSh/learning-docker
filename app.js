const express = require('express');
const app = express();

app.get("/", (req, res) => {
  const data = {
    "statusType": "templatesList",
    "allSnapshots": [
      {
          "created_at": "2019-08-05T11:34:43Z", 
          "distribution": "CentOS", 
          "id": 50518236, 
          "min_disk_size": 40, 
          "name": "magento2Template0.2", 
          "public": false, 
          "regions": [
              "blr1"
          ], 
          "size_gigabytes": 0.9, 
          "slug": null, 
          "type": "snapshot"
      }, 
      {
          "created_at": "2019-08-05T12:25:43Z", 
          "distribution": "CentOS", 
          "id": 50518951, 
          "min_disk_size": 40, 
          "name": "magento2Template0.1-1565007897694", 
          "public": false, 
          "regions": [
              "blr1"
          ], 
          "size_gigabytes": 0.9, 
          "slug": null, 
          "type": "snapshot"
      }, 
      {
          "created_at": "2019-08-06T08:26:24Z", 
          "distribution": "CentOS", 
          "id": 50558748, 
          "min_disk_size": 40, 
          "name": "magento2Template0.2", 
          "public": false, 
          "regions": [
              "blr1"
          ], 
          "size_gigabytes": 0.91, 
          "slug": null, 
          "type": "snapshot"
      }, 
      {
          "created_at": "2019-08-06T08:34:03Z", 
          "distribution": "CentOS", 
          "id": 50558831, 
          "min_disk_size": 40, 
          "name": "magento2Template0.2", 
          "public": false, 
          "regions": [
              "blr1"
          ], 
          "size_gigabytes": 0.91, 
          "slug": null, 
          "type": "snapshot"
      }
  ]};
  data.allSnapshots.forEach((snapshot, index) => {
    snapshot.name = "Sample " + index
  })
  res.json(data);
});

app.listen(3004, () => console.log("Server is running at port 3004"));

