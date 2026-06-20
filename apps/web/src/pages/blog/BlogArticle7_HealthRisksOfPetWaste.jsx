
import React from 'react';
import BlogPostTemplate from '@/components/BlogPostTemplate.jsx';

const BlogArticle7_HealthRisksOfPetWaste = () => {
  const meta = {
    title: "The Hidden Health Risks of Pet Waste in Your Yard",
    description: "Dog waste contains up to 23 million fecal coliform bacteria per gram and 11 human-transmissible pathogens. Here is what is actually living in your Asheville yard.",
    author: "Scoopy Doo Team",
    datePublished: "2026-05-09",
    slug: "health-risks-of-pet-waste",
    category: "Health"
  };

  const content = `
    <h2>Dog Waste Is an EPA-Classified Pollutant &mdash; Here Is What That Means for Your Yard</h2>
    <p>
      A single gram of dog feces contains up to 23 million fecal coliform bacteria &mdash; including E. coli, Salmonella, and Campylobacter. The EPA classifies dog waste alongside toxic chemicals and oil spills as a dangerous non-point source pollutant. In Asheville's warm, wet climate, averaging over 50 inches of rain per year, these pathogens spread through soil, onto patios, and into your home on shoes and paws within days.
    </p>

    <h2>Which Diseases Can Humans Catch from Dog Waste?</h2>
    <p>Dog feces transmit at least 11 pathogens that infect humans, including:</p>
    <ul>
      <li><strong>E. coli O157:H7</strong> &mdash; severe intestinal illness; spreads via soil contact and contaminated surfaces</li>
      <li><strong>Toxocara canis (roundworm)</strong> &mdash; eggs survive in soil for up to 5 years; children who play in dirt are at highest risk</li>
      <li><strong>Ancylostoma (hookworm)</strong> &mdash; larvae penetrate bare skin directly and cause cutaneous larva migrans</li>
      <li><strong>Giardia</strong> &mdash; spreads to other pets and humans; survives in moist soil for up to 3 months</li>
      <li><strong>Salmonella</strong> &mdash; shed in feces even by dogs that appear completely healthy</li>
    </ul>
    <p>Children under 5 are at highest risk because they play close to the ground and touch their faces frequently. According to the CDC, Toxocara infects an estimated 14% of the U.S. population &mdash; most without knowing it.</p>

    <h2>How Long Do Bacteria from Dog Waste Survive in Soil?</h2>
    <p>
      Roundworm eggs survive up to 5 years. E. coli persists 3 to 6 months in moist soil. Giardia cysts survive up to 3 months at temperatures below 77&deg;F. In Asheville's mild winters, where the ground rarely freezes solid, most pathogens survive year-round. Weekly removal eliminates them before they establish a lasting presence in your soil.
    </p>

    <h2>Does Dog Waste Contaminate Local Waterways?</h2>
    <p>
      Yes. Asheville receives over 50 inches of rain annually &mdash; well above the U.S. average of 38 inches. Every rainfall event washes accumulated waste into storm drains that empty directly into Asheville Creek and the French Broad River without treatment. Research has found pet waste accounts for up to 20&ndash;30% of bacterial contamination in urban waterways. This affects water quality used for recreation and wildlife downstream of every Asheville neighborhood.
    </p>

    <h2>Is Dog Waste a Fertilizer? No &mdash; Here Is Why</h2>
    <p>
      Unlike composted livestock manure, dog waste is not a fertilizer. Dogs are primarily carnivores; their waste is highly acidic with nitrogen concentration so dense it burns rather than feeds grass. Spots where dogs eliminate repeatedly develop yellow or brown dead patches &mdash; nitrogen burn. In summer heat above 80&deg;F, grass death from a single unremoved deposit can occur within 72 hours.
    </p>

    <h2>How Often Does Waste Need to Be Removed to Keep Your Yard Safe?</h2>
    <p>
      Weekly removal is the minimum recommended by veterinary and lawn care professionals. In Asheville's heat and humidity, bacteria in unremoved waste doubles roughly every 4 hours above 80&deg;F, and fly populations around fresh deposits can triple within 48 hours. Weekly professional service keeps pathogen levels low enough to eliminate measurable contamination risk for your family and pets.
    </p>
    <p>
      Scoopy Doo's weekly service starts at $16 per visit for one dog in Asheville. Our technicians grid-walk your entire yard, remove all waste from the property, and sanitize equipment between every yard to prevent cross-contamination between homes.
    </p>
  `;

  return (
    <BlogPostTemplate {...meta} content={content} />
  );
};

export default BlogArticle7_HealthRisksOfPetWaste;
