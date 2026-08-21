import React from 'react';
import BlogPostTemplate from '@/components/BlogPostTemplate.jsx';

// BlogPostTemplate renders `content` through dangerouslySetInnerHTML, so this has to be
// an HTML string. It previously passed JSX, which stringified to "[object Object]" and
// rendered as the entire body of the post.
const BenefitsPage = () => {
  const meta = {
    title: "Benefits of Professional Pet Waste Removal",
    description: "The health, time, and lawn-care benefits of hiring a professional pet waste removal service in Asheville, NC, and what a weekly visit actually covers.",
    author: "Scoopy Doo AVL Team",
    datePublished: "2026-04-05",
    slug: "benefits",
    category: "Guides"
  };

  const content = `
    <p>
      Many dog owners view picking up poop as just another chore. Hiring a professional pet
      waste removal service offers advantages that go well beyond having a clean lawn. Here
      is what Asheville homeowners actually get out of outsourcing the job.
    </p>

    <h2>1. Significant Time Savings</h2>
    <p>
      Your time is valuable. Between work, family, and everything else, spending a weekend
      walking the yard with a scooper is not how most people want to spend it. A weekly
      service reclaims that time and lets you enjoy your outdoor space rather than maintain it.
    </p>

    <h2>2. Real Health Benefits</h2>
    <p>
      Dog waste can carry roundworms, hookworms, giardia, and E. coli, all of which transmit
      to humans and to other pets. In a rain-heavy climate like Western North Carolina it also
      washes into storm drains and the French Broad watershed. Thorough removal and proper
      disposal cut that exposure substantially, and it matters most in yards where children
      play.
    </p>

    <h2>3. Protecting Your Lawn</h2>
    <p>
      Dog waste is high in nitrogen. Left on the grass it burns unsightly yellow and brown
      patches into the lawn, and the damage compounds the longer it sits. Regular removal
      protects the landscaping you have already paid for.
    </p>

    <h2>4. Consistency You Do Not Have to Think About</h2>
    <p>
      It is easy to skip a week when the weather turns or you are simply worn out, and one
      skipped week is usually what turns a manageable yard into a project. A professional
      shows up on schedule regardless.
    </p>

    <h2>What a Scoopy Doo Visit Includes</h2>
    <p>
      Every visit starts with an on-the-way text so you know we are coming, and you do not
      need to be home. We sweep the yard in a grid pattern rather than spot-checking, double-bag
      the waste, and haul it completely off your property. When we are done the gate is secured
      and a photo goes to your phone confirming it.
    </p>

    <h2>What It Costs in Asheville</h2>
    <p>
      Weekly service starts at $20 per visit for one dog, twice-weekly at $18 per visit, and
      every-other-week at $33 per visit. One-time cleanups for a yard that has gotten away from
      you start at $85. There are no contracts and no cancellation fee, so you can stop at any
      time.
    </p>
  `;

  return <BlogPostTemplate {...meta} content={content} />;
};

export default BenefitsPage;
