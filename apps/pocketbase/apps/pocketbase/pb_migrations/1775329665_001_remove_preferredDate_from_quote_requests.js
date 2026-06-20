/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");
  collection.fields.removeByName("preferredDate");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("quote_requests");
  collection.fields.add(new DateField({
    name: "preferredDate",
    required: true
  }));
  return app.save(collection);
})