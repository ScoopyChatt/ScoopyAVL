// Asheville pet waste removal comparison, read by pages/ComparisonPage.jsx and by
// tools/create-static-pages.cjs (the crawlable copy). One source so they cannot disagree.
//
// Every competitor fact here was checked against that company's own Asheville page on
// CHECKED_ON. Re-check before editing a row, leave a cell as "Not listed" rather than
// guess, and only list companies with a confirmed Asheville location. The earlier
// version of this page carried Chattanooga companies over from the original site.

export const CHECKED_ON = 'October 17, 2026';

export const providers = [
  {
    name: 'Scoopy Doo AVL',
    url: 'https://www.scoopyavl.com',
    local: true,
    area: 'Asheville, West Asheville, Downtown, Arden, Fletcher, Hendersonville, Black Mountain, Weaverville, Fairview, Candler, Swannanoa, Woodfin, Mills River, Biltmore Forest, Brevard',
    frequency: 'Weekly, twice weekly, every other week, one-time',
    price: '$20/visit weekly (1 dog), published online',
    notable: 'On-the-way text and gate photo every visit; quote and pay 100% online; waste hauled off property; no contracts; locally owned',
  },
  {
    name: 'DoodyCalls (Asheville)',
    url: 'https://www.doodycalls.com/asheville/',
    local: false,
    area: 'Asheville, Fairview, and about 30 nearby communities including Black Mountain, Hendersonville, Weaverville, Waynesville, Canton, and Maggie Valley',
    frequency: 'Weekly, twice weekly, one-time',
    price: 'Not listed (quote required)',
    notable: 'National franchise (Authority Brands), locally owned location; commercial pet waste station service; odor-control add-on; satisfaction guarantee',
  },
  {
    name: 'Doo Doo Blues (Asheville)',
    url: 'https://doodooblues.com/pet-waste-pickup-locations/asheville-nc/',
    local: false,
    area: 'Asheville and surrounding areas (towns not listed)',
    frequency: 'Weekly (other schedules not detailed)',
    price: '"Starting at $9.99" (unit not stated)',
    notable: 'Multi-city brand; first cleaning free offer; no contracts',
  },
];

export const descriptions = [
  {
    name: 'Scoopy Doo AVL',
    text: 'Scoopy Doo AVL is a locally owned Asheville company and the only provider here that publishes its full price list online: $20 per visit weekly, $18 twice weekly, $33 every other week, and one-time cleanups from $85. Every visit includes an on-the-way text and a photo of the latched gate, quoting and payment are fully online, and there is no contract.',
  },
  {
    name: 'DoodyCalls (Asheville)',
    text: 'DoodyCalls is a national pet waste franchise, part of Authority Brands, with an independently owned Asheville location. It lists the widest named service area of the three, reaching west to Waynesville, Canton, and Maggie Valley, and offers commercial station service and an odor-control add-on. Prices are not published; you request a quote.',
  },
  {
    name: 'Doo Doo Blues (Asheville)',
    text: 'Doo Doo Blues is a multi-city pet waste brand with an Asheville location. Its page advertises service "starting at $9.99" without saying whether that is per visit or per month, offers the first cleaning free, and says there are no contracts. It does not name the towns it covers around Asheville, so confirm your address is served before signing up.',
  },
];
