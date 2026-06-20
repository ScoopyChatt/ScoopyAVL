/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");
  collection.fields.removeByName("preferredTime");
  return app.save(collection);
}, (app) => {

  const collection = app.findCollectionByNameOrId("quote_requests");
  collection.fields.add(new TextField({
    name: "preferredTime",
    required: false
  }));
  return app.save(collection);
})