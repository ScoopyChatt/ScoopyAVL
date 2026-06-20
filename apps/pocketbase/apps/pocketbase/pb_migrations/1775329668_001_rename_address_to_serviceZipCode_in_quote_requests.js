/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");
  const field = collection.fields.getByName("address");
  field.name = "serviceZipCode";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");
  const field = collection.fields.getByName("serviceZipCode");
  field.name = "address";
  return app.save(collection);
})