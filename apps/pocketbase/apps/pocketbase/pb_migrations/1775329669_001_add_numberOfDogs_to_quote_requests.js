/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");

  const existing = collection.fields.getByName("numberOfDogs");
  if (existing) {
    if (existing.type === "number") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("numberOfDogs"); // exists with wrong type, remove first
  }

  collection.fields.add(new NumberField({
    name: "numberOfDogs",
    required: true,
    min: 1,
    max: 8
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("quote_requests");
  collection.fields.removeByName("numberOfDogs");
  return app.save(collection);
})