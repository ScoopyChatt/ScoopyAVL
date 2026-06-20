/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("blog_posts");

  const record0 = new Record(collection);
    record0.set("title", "Why Chattanooga Homeowners Are Hiring Pet Waste Removal Services");
    record0.set("slug", "why-chattanooga-homeowners-hiring-pet-waste-removal");
    record0.set("author", "Scoopy");
    record0.set("published_date", "2026-05-27");
    record0.set("meta_description", "Discover why Chattanooga homeowners are choosing professional pet waste removal services and the benefits they provide.");
    record0.set("keywords", "pet waste removal, Chattanooga homeowners, yard cleanup");
    record0.set("category", "Pet Care");
    record0.set("content", "<h2>Why Chattanooga Homeowners Are Choosing Professional Pet Waste Removal</h2><p>Pet waste removal has become an essential service for Chattanooga homeowners who value their time and the health of their families. Learn about the top reasons homeowners are making the switch to professional services...</p>");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("title", "Pet Waste Removal for HOAs, Apartments & Commercial Properties in Chattanooga");
    record1.set("slug", "pet-waste-removal-hoas-apartments-commercial-chattanooga");
    record1.set("author", "Scoopy");
    record1.set("published_date", "2026-05-27");
    record1.set("meta_description", "Professional pet waste removal services for HOAs, apartment complexes, and commercial properties in Chattanooga.");
    record1.set("keywords", "commercial pet waste removal, HOA services, apartment cleaning, Chattanooga");
    record1.set("category", "Commercial Services");
    record1.set("content", "<h2>Commercial Pet Waste Solutions for Chattanooga Properties</h2><p>Managing pet waste at commercial properties and HOAs requires professional expertise. Discover how our services help maintain clean, healthy environments for residents and their pets...</p>");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})
