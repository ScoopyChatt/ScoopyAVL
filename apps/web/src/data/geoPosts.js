// Blog posts written for search and AI-assistant answers ("GEO"). Each post is plain data
// rendered by pages/blog/GeoBlogPost.jsx, and the build tools read the same data for the
// title tags, the crawlable fallback body, and the BlogPosting + FAQPage JSON-LD.
//
// Writing rules for these posts: every heading is a question someone would type or ask
// an assistant, and the first sentence under it answers that question on its own.
// Prices come from data/business.js. Use double-quoted strings (apostrophes break
// single-quoted ones).

export const geoPosts = [
  {
    slug: 'what-does-a-pooper-scooper-service-do-asheville',
    title: 'What Does a Pooper Scooper Service Actually Do? An Asheville Visit, Step by Step',
    metaTitle: 'What Does a Pooper Scooper Service Do? | Asheville NC | Scoopy Doo',
    description:
      'What happens on a dog poop removal visit in Asheville: the on-the-way text, the grid sweep, where the waste goes, the gate photo, what it costs, and how to compare services.',
    category: 'How It Works',
    date: '2026-10-17',
    dateLabel: 'Oct 2026',
    readTime: '6 min read',
    excerpt: 'The on-the-way text, the grid sweep, where the waste goes, and the gate photo. Here is exactly what you are paying for.',
    intro: [
      "A pooper scooper service sends a technician to your yard on a set schedule to find and remove every pile of dog waste, then takes it away so you never touch it. In Asheville most households book weekly visits, which cost $20 per visit for one dog with Scoopy Doo AVL. You do not need to be home, and there is no contract.",
      "If you have never used one, the details matter more than the idea. Below is what a visit looks like from start to finish, what you need to do (almost nothing), and the questions worth asking before you hire anyone in Buncombe or Henderson County.",
    ],
    sections: [
      {
        h2: 'What happens on a typical visit?',
        paras: [
          "Every visit follows the same four steps, whatever the size of the yard. The steps are what make the service dependable, because a missed corner or an open gate is the kind of thing that sends people back to doing it themselves.",
        ],
        list: [
          "On-the-way text. You get a text when the technician is heading to your house, so you can bring the dogs in or leave them out.",
          "Grid sweep. The technician walks the whole yard in rows rather than spot-checking the obvious places. Under shrubs, along fence lines, and behind the shed are where waste hides.",
          "Bag and haul. Every pile is bagged and taken off your property. It does not go in your trash can, so your bin does not smell all week.",
          "Gate photo. The technician closes and latches the gate and texts you a photo of it. For dog owners that photo is the part they care about most.",
        ],
      },
      {
        h2: 'Do I need to be home for dog poop removal?',
        paras: [
          "No, almost every customer is at work or out when the technician comes. You only need to make sure the gate can be opened, either because it is unlocked on service day or because you shared the gate code when you signed up.",
          "If your dogs stay outside during the day, tell us when you sign up. Friendly dogs are usually fine in the yard, and the gate photo confirms they are shut back in when the visit is done.",
        ],
      },
      {
        h2: 'How much does a pooper scooper service cost in Asheville?',
        paras: [
          "Scoopy Doo AVL charges $20 per visit for weekly service with one dog. Twice-weekly service is $18 per visit, every-other-week service is $33 per visit, and one-time cleanups start at $85. A second or third dog adds a small per-visit fee.",
          "Every-other-week costs more per visit because two weeks of waste takes longer to clear, so weekly service is usually the better value for homes with two or more dogs. You can see your exact price online at scoopyavl.com/quote without talking to anyone.",
        ],
      },
      {
        h2: 'Where does the dog waste go?',
        paras: [
          "Waste is bagged and removed from your property on every visit. Leaving bagged waste in a customer's bin is a common shortcut, and it is worth asking any service you are considering what they do with it.",
          "Getting waste off the ground matters beyond your own yard. The City of Asheville points out that dog waste does not simply wash away: rain carries it toward the rivers, lakes, and watersheds the region relies on, and it can take up to a year to break down while bacteria persist in the soil for years after that.",
        ],
      },
      {
        h2: 'Does a pooper scooper service clean the whole yard or just the grass?',
        paras: [
          "A good service covers every area your dog uses, including mulch beds, gravel runs, and the strip along the fence, not only the open lawn. Asheville yards are often sloped, wooded, or terraced, and the steep or overgrown edges are exactly where waste piles up when people clean up on their own.",
          "If part of your property is off limits for the dogs, say so at sign-up and the technician will skip it.",
        ],
      },
      {
        h2: 'How do I compare pooper scooper services in Asheville?',
        paras: [
          "Ask four questions before you sign up with anyone: what does it cost per visit, is there a contract, where does the waste go, and how will I know you came? A service that can answer all four in writing, before you pay, is one you can hold to its word.",
        ],
        list: [
          "Price: is it listed online or only given over the phone?",
          "Contract: can you pause or cancel without a fee?",
          "Waste: is it hauled away or left in your bin?",
          "Proof: do you get a text or photo after each visit?",
          "Hygiene: are tools cleaned between yards so nothing is tracked from one property to the next?",
        ],
      },
    ],
    faqs: [
      { q: 'What does a pooper scooper service do?', a: "A pooper scooper service sends a technician to your yard on a schedule to find, bag, and remove all dog waste, then haul it off your property. Scoopy Doo AVL also texts you before each visit and sends a photo of your latched gate when the visit is done." },
      { q: 'Why does a first cleanup cost more than a weekly visit?', a: "A yard that has gone weeks or months without cleanup holds far more waste than one week's worth, so the first visit takes much longer. That is why Scoopy Doo AVL prices one-time cleanups separately, from $85, and weekly visits at $20 for one dog." },
      { q: 'Is there a contract for pooper scooper service?', a: "Not with Scoopy Doo AVL. Service is month to month with no contract and no cancellation fee, and you can pause or cancel at any time." },
      { q: 'How much does dog poop removal cost per month in Asheville?', a: "Weekly service at $20 per visit works out to about $87 per month for one dog, since most months have four or five visits. Every-other-week service at $33 per visit is about $72 per month." },
    ],
  },
  {
    slug: 'fall-winter-dog-poop-cleanup-asheville',
    title: 'Do You Need Dog Poop Cleanup in Fall and Winter? An Asheville Answer',
    metaTitle: 'Fall & Winter Dog Poop Cleanup in Asheville, NC | Scoopy Doo',
    description:
      'Should you keep pet waste removal going through Asheville leaf season and winter? Why leaves and cold make dog poop worse, and the schedule that keeps spring cleanup cheap.',
    category: 'Seasonal Tips',
    date: '2026-10-17',
    dateLabel: 'Oct 2026',
    readTime: '5 min read',
    excerpt: 'Leaves hide it, cold preserves it, and spring reveals all of it at once. Here is why winter is the worst season to stop scooping.',
    intro: [
      "Yes, fall and winter are the seasons when skipping dog poop cleanup costs you the most in Asheville. Falling leaves hide waste, cold weather slows its breakdown to almost nothing, and whatever is left in November is still sitting there when the snow melts in March.",
      "Plenty of dog owners keep up with the yard all summer and then stop once the leaves come down and it gets dark at 5:30. This post covers what actually happens to dog waste in a Western North Carolina winter, and the simplest schedule for keeping the yard under control until spring.",
    ],
    sections: [
      {
        h2: 'Why is dog poop harder to clean up in the fall?',
        paras: [
          "Fallen leaves cover dog waste within a day, so piles you would normally spot from the back door disappear until someone steps in one or the mower finds it. Asheville yards tend to have a lot of mature hardwoods, and peak color in the mountains runs from early October into early November, which means weeks of fresh leaf cover.",
          "Raking or mulching leaves over hidden waste spreads it across the lawn instead of removing it. A grid sweep, where the technician walks the whole yard in rows and checks under the leaf layer, is the reliable way to find it.",
        ],
      },
      {
        h2: 'Does dog poop break down in winter?',
        paras: [
          "Barely. Decomposition depends on warmth and microbes, and both drop off sharply when overnight temperatures fall toward freezing, which Asheville sees regularly from late fall through early spring. Even in good conditions, the City of Asheville notes that dog waste can take up to a year to break down, and that bacteria can stay in the soil for years afterward.",
          "Cold also does not make waste safe. Roundworm and other parasite eggs are built to wait out bad weather in the soil, so a frozen yard is not a clean one.",
        ],
      },
      {
        h2: 'What happens to dog waste when the snow melts?',
        paras: [
          "Everything left on the ground over winter shows up at once, and the melt carries it downhill. Asheville sits where the French Broad and Swannanoa rivers meet, and on the sloped lots common across the area, spring runoff moves straight across the yard toward the street and the storm drain.",
          "That is the yard most people are looking at in March: months of waste, thawed and soggy, right when the kids and dogs want to be outside again. It is also the most expensive point to start cleanup, because a winter backlog takes much longer to clear than a normal weekly visit.",
        ],
      },
      {
        h2: 'Should I pause pet waste removal service in winter?',
        paras: [
          "Most Asheville dog owners are better off keeping service going, and dropping from weekly to every-other-week is a reasonable middle ground if you want to spend less. Dogs do not go less in winter, and you are the one in the cold if the service stops.",
          "With Scoopy Doo AVL there is no contract, so pausing is always an option. Just plan on a one-time cleanup before regular visits start again, since that first visit has to clear the whole backlog.",
        ],
      },
      {
        h2: 'What schedule works best from October to March?',
        paras: [
          "Weekly service through leaf season, then weekly or every-other-week through winter, is the schedule that keeps spring cleanup cheap. Here is what that costs with Scoopy Doo AVL for one dog:",
        ],
        list: [
          "Weekly: $20 per visit, the best choice during leaf season and for two or more dogs.",
          "Every other week: $33 per visit, for one dog and a smaller yard in the coldest months.",
          "One-time cleanup: from $85, for a yard that has gone weeks or months without one.",
          "Twice weekly: $18 per visit, for multi-dog homes and small yards that fill up fast.",
        ],
      },
      {
        h2: 'Do pooper scooper services work in rain and cold?',
        paras: [
          "Yes, pet waste removal is a year-round outdoor service, and cold, wet stretches are when waste builds up fastest, so regular visits matter most then. You still get the on-the-way text before each visit and the gate photo after it. For a question about a specific stormy day, text Scoopy Doo AVL at 828-844-8060.",
        ],
      },
    ],
    faqs: [
      { q: 'Do I need dog poop cleanup in the winter in Asheville?', a: "Yes. Cold weather slows decomposition to almost nothing, so waste left in December is still there in March, and the spring melt carries it across the yard and toward storm drains. Keeping weekly or every-other-week service through winter keeps the spring cleanup small." },
      { q: 'Why is it harder to find dog poop in the fall?', a: "Fallen leaves cover it within a day. In Asheville, peak leaf season runs from early October into early November, so waste can stay hidden for weeks unless the yard is swept in a grid pattern under the leaf layer." },
      { q: 'Can I pause pooper scooper service for the winter?', a: "With Scoopy Doo AVL, yes. There is no contract or cancellation fee. Most people book a one-time cleanup, from $85, before restarting in spring, because the first visit has to clear the whole winter backlog." },
    ],
  },
  {
    slug: 'vacation-rental-pet-waste-cleanup-asheville',
    title: 'Pet Waste Cleanup for Asheville Vacation Rentals and Pet-Friendly Airbnbs',
    metaTitle: 'Pet Waste Cleanup for Asheville Airbnbs & Vacation Rentals | Scoopy Doo',
    description:
      'How Asheville short-term rental hosts keep pet-friendly yards clean between guests: scheduled dog poop removal, one-time cleanups, gate photos for remote hosts, and pricing.',
    category: 'Local Guide',
    date: '2026-10-17',
    dateLabel: 'Oct 2026',
    readTime: '5 min read',
    excerpt: 'Guests bring their dogs, and the yard is in the photos. How hosts keep it clean without driving over between every stay.',
    intro: [
      "If you host a pet-friendly vacation rental in Asheville, a scheduled pooper scooper service keeps the yard clean between guests without you driving over to check. Scoopy Doo AVL visits on a weekly schedule from $20 per visit, texts a photo of the latched gate when each visit is done, and handles one-time cleanups after heavy stays.",
      "Asheville is widely known as a dog-friendly place to visit, and a lot of travelers bring their dogs to the mountains. That makes a pet-friendly listing easier to book, and it also means the yard sees far more dogs than a normal home yard does.",
    ],
    sections: [
      {
        h2: 'Why do pet-friendly rentals need regular dog poop removal?',
        paras: [
          "Guests rarely clean up the whole yard before checkout, and the next guest finds what they missed. Even careful guests miss piles in mulch, under decks, and along fence lines, and a few stays in a row can leave a yard that does not look like the listing photos.",
          "Cleaning crews usually focus on the inside of the house. Unless your turnover checklist says otherwise, nobody is walking the yard, so it helps to put it on a schedule of its own.",
        ],
      },
      {
        h2: 'How does pet waste removal work for a host who is not on site?',
        paras: [
          "It works the same way it does for a homeowner who is at work: you share gate access once, and every visit is confirmed by text. The on-the-way text and the gate photo are useful for remote hosts, because the photo is a time-stamped record that the yard was serviced and the gate was left latched.",
          "A regular weekly visit keeps a busy listing under control without anyone from your team having to be there.",
        ],
      },
      {
        h2: 'What does pet waste cleanup cost for a vacation rental?',
        paras: [
          "Rental properties are priced the same way as any home: by visit frequency, yard size, and the number of dogs on site. Weekly service with Scoopy Doo AVL is $20 per visit, every other week is $33 per visit, and a one-time cleanup starts at $85.",
          "Many hosts already charge a pet fee per stay. A weekly visit costs less than many of those pet fees, which makes the yard one of the cheaper things to keep guest-ready.",
        ],
      },
      {
        h2: 'Should a host book weekly service or one-time cleanups?',
        paras: [
          "Weekly service suits a listing that books most weeks, and a one-time cleanup suits a property that only sees occasional pet stays. Some hosts combine the two: weekly through the busy summer and fall leaf season, then a one-time cleanup after a holiday stay in the slower months.",
        ],
        list: [
          "Booked most weeks with pets allowed: weekly service.",
          "Occasional pet stays: a one-time cleanup after each one.",
          "Long-term or mid-term guest with a dog: weekly service for the length of the stay.",
          "Selling or listing the property: a one-time cleanup before photos and showings.",
        ],
      },
      {
        h2: 'Which Asheville-area rentals does Scoopy Doo AVL serve?',
        paras: [
          "Scoopy Doo AVL serves rentals in Asheville (including West Asheville and Downtown), Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, and Brevard. Condos and townhomes with a private yard or patio qualify the same way a house does.",
          "If you manage several properties, each one gets its own quote based on its yard and schedule.",
        ],
      },
    ],
    faqs: [
      { q: 'Do Asheville Airbnb hosts use pooper scooper services?', a: "Yes. Pet-friendly vacation rental hosts use scheduled dog poop removal to keep yards clean between guests, since cleaning crews usually focus on the inside of the house. Scoopy Doo AVL serves rentals across the Asheville area from $20 per weekly visit." },
      { q: 'Can a pet waste service confirm the yard was cleaned if I am not there?', a: "Yes. Scoopy Doo AVL texts before each visit and sends a photo of the latched gate when the visit is done, so remote hosts have a time-stamped record of every service." },
      { q: 'How much does pet waste cleanup cost for a vacation rental in Asheville?', a: "The same as any home: $20 per visit weekly, $33 per visit every other week, or a one-time cleanup from $85, adjusted for yard size and the number of dogs. There is no contract." },
    ],
  },
];

export const geoPostBySlug = Object.fromEntries(geoPosts.map((p) => [p.slug, p]));
