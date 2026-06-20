export const getFaqData = (location = 'Asheville') => {
  const baseLocation = location.split(',')[0].trim();

  return [
    {
      title: "General & Pricing",
      faqs: [
        {
          question: "How do I schedule a service?",
          answer: "Booking is easy! Visit our Quote Request page, fill out your details including your yard size and number of dogs, and we'll get back to you within 24 hours to confirm your schedule and pricing."
        },
        {
          question: "Does Scoopy Doo serve Western North Carolina?",
          answer: "Yes. Scoopy Doo serves Mills River, Leicester, Mars Hill, Biltmore Forest, and the surrounding Buncombe and Henderson County communities. All Western North Carolina locations are covered at the same rates, with no extra fees. We run regular routes across the area, and most new customers can start within 2-5 days."
        },
        {
          question: "Is there a contract or long-term commitment?",
          answer: "No contracts, ever. Scoopy Doo service is completely flexible — you can start, pause, or cancel at any time with no cancellation fees. We keep customers by doing a great job, not by locking them in. Most clients stay with us for years simply because the service works."
        },
        {
          question: "How much does it cost?",
          answer: "Our pet waste removal services start at just $16 per service. Pricing varies slightly based on the number of dogs, yard size, and frequency of visits. Contact us for a quick, personalized quote!"
        },
        {
          question: "How often should I have my yard cleaned?",
          answer: "We recommend weekly or twice-weekly cleanings for most households to keep your yard fresh, safe, and odor-free. However, we also offer every-other-week and one-time spring cleaning options to fit your specific needs."
        },
        {
          question: `How much does pooper scooper service cost in ${baseLocation}?`,
          answer: `Pooper scooper service costs in the ${baseLocation} area typically range from $10-$25 per visit for weekly service, depending on several factors. Yard size significantly impacts pricing—larger properties require more time and effort. The number of dogs you have directly affects service cost, as more dogs generate more waste. Service frequency also matters; weekly service is more economical per visit than one-time cleanups. Most ${baseLocation} pet waste removal companies offer discounts for recurring weekly or bi-weekly service. While DIY scooping seems cheaper upfront, professional service saves time, reduces health risks, and prevents costly lawn damage. Scoopy Doo LLC offers competitive, transparent pricing tailored to your yard size and dog count, making professional pet waste removal an affordable investment in your family's health and your yard's appearance.`
        }
      ]
    },
    {
      title: "Health & Environment",
      faqs: [
        {
          question: "Is dog poop dangerous in my yard?",
          answer: "Dog waste poses several significant health hazards to your family and pets. It contains harmful parasites like roundworms, hookworms, and giardia that can survive in soil for months and contaminate groundwater. Bacteria such as E. coli and salmonella thrive in dog feces and can cause serious infections if ingested or transferred through contact. Beyond health risks, accumulated dog poop damages your lawn by creating dead patches, burning grass, and promoting weed growth. Professional pooper scooper services like Scoopy Doo LLC remove waste regularly, preventing pathogen buildup and maintaining a safe, healthy yard for your family and pets. Regular removal is far more effective than occasional cleanup and protects your property's long-term health."
        },
        {
          question: "Can dog poop harm kids?",
          answer: "Yes, dog waste poses specific health risks to children who play in yards and may have less developed immune systems. Dog feces contain parasites like roundworms and hookworms that can cause intestinal infections, anemia, and developmental issues in children. Bacteria including E. coli, salmonella, and campylobacter can cause severe gastrointestinal illness, fever, and diarrhea in kids. Children are particularly vulnerable because they play on grass, touch contaminated soil, and may put hands in their mouths without washing. Cryptosporidium and giardia in dog waste can cause prolonged diarrhea and dehydration in young children. Professional pet waste removal is one of the most effective ways to protect your children's health by eliminating contamination sources from play areas. Scoopy Doo LLC's regular pooper scooper service ensures your yard remains a safe, clean space where kids can play without exposure to harmful pathogens. Consistent professional removal is far more protective than occasional cleanup and gives parents peace of mind."
        }
      ]
    },
    {
      title: "Convenience & Lifestyle",
      faqs: [
        {
          question: "How does this service help busy families?",
          answer: `Modern families are stretched thin between work, school runs, extracurricular activities, and maintaining a household. Finding the time and energy to consistently clean up dog waste often falls to the bottom of the priority list, leading to an unusable yard and mounting stress. Scoopy Doo LLC takes this unpleasant, time-consuming chore completely off your plate. By putting your pet waste removal on autopilot with our reliable weekly service, you eliminate a major source of household friction—no more arguing over whose turn it is to scoop the poop. Busy ${baseLocation} families trust our professional pooper scooper service to maintain a sanitary, odor-free yard without lifting a finger, allowing you to focus your limited free time on what truly matters: making memories with your loved ones and actually enjoying your home.`
        },
        {
          question: "How much time will this save me?",
          answer: "The average dog owner spends roughly 1 to 2 hours every single week trying to keep up with yard waste—gathering tools, hunting for hidden messes, bagging, and disposing of the waste. Over a year, that adds up to over 100 hours of your life spent doing the worst chore imaginable. When you hire Scoopy Doo LLC, you instantly reclaim all of those hours. Our trained professionals work efficiently, using specialized equipment to thoroughly clear your yard in a fraction of the time it takes the average homeowner. Instead of dreading the weekend cleanup, you can invest that saved time into hobbies, relaxing, or spending quality moments with your pets rather than cleaning up after them. Professional pet waste removal isn't just a cleaning service; it's an investment in your personal time and peace of mind."
        },
        {
          question: "How can I get my weekend freedom back?",
          answer: `Weekends should be your time to recharge, explore ${baseLocation}, or simply relax in your own backyard—not a time reserved for catching up on gross outdoor chores. Unfortunately, many dog owners spend their Saturday mornings carefully navigating their lawn with a bag and a scooper, trying to undo a week's worth of accumulation. With Scoopy Doo LLC handling your pet waste removal during the week, your weekends are completely yours again. You can wake up on Saturday morning, let the dogs out, and step onto your lawn barefoot without a single worry. Reclaim your weekend freedom and let our dependable local team handle the dirty work. Whether you're heading to the mountains or firing up the grill, you'll know your yard is pristine, safe, and ready for whatever your weekend brings.`
        },
        {
          question: "Will this help me enjoy my yard again?",
          answer: "Absolutely. One of the biggest complaints we hear from new clients is that they stopped using their own backyard because it became a \"minefield.\" The fear of stepping in dog waste, coupled with the unpleasant odors and swarming flies, turns a beautiful outdoor living space into a dreaded zone. Scoopy Doo LLC's consistent pooper scooper service completely revitalizes your relationship with your property. We meticulously remove all waste, dramatically reducing odors and insect activity. You'll finally be able to play fetch with your dog, let your children run barefoot through the grass, and set up your patio furniture without hesitation. Our clients frequently tell us that our service didn't just clean their grass—it actually gave them their backyard back, turning it into the relaxing oasis it was meant to be."
        },
        {
          question: "Can I host events without worrying about the yard?",
          answer: `Hosting a backyard BBQ, a child's birthday party, or a family get-together should be fun, not stressful. The last thing you want is a guest accidentally stepping in a mess or complaining about unpleasant smells while trying to enjoy a meal. When you use Scoopy Doo LLC's regular service, your yard is always "guest-ready." For special events, we also offer one-time cleanups or strategically timed weekly visits right before your gathering to ensure your lawn is absolutely spotless. You can send out invitations with confidence, knowing your outdoor space will reflect well on you. Eliminate the pre-party panic of rushing around the yard with a trash bag—let our professional pet waste technicians ensure your ${baseLocation} property is pristine, safe, and perfectly prepared for entertaining your friends and family.`
        },
        {
          question: "Why is professional removal better than DIY?",
          answer: "While DIY scooping might seem simple, it is rarely done with the consistency or thoroughness required to maintain a truly healthy yard. Homeowners often miss hidden waste in tall grass, under bushes, or along fence lines, which continues to harbor dangerous bacteria and parasites. Furthermore, simply throwing dog waste into your residential trash bin can create unbearable odors and attract pests. Scoopy Doo LLC's professional technicians are trained to scan yards systematically, ensuring nothing is missed. We use commercial-grade sanitizing tools and haul the waste away entirely (or bag it securely per your preference), removing the problem from your property altogether. Professional service guarantees that the job gets done every single week, regardless of bad weather, busy schedules, or lack of motivation, ensuring a consistently safe environment for your family."
        }
      ]
    },
    {
      title: "Trust & Process",
      faqs: [
        {
          question: "Best pet waste company near me?",
          answer: `When choosing a pet waste removal company, look for several key qualities: reliability and consistent scheduling, professional staff who arrive on time, transparent pricing with no hidden fees, and excellent customer service. A trustworthy pet waste company should be insured and bonded, use eco-friendly disposal methods, and offer flexible service options (weekly, bi-weekly, or monthly). They should communicate clearly about their service area and respond promptly to customer inquiries. Scoopy Doo LLC is a trusted local pet waste removal company serving the ${baseLocation} area with a reputation for dependable service, friendly staff, and commitment to keeping your yard clean and safe. We understand the unique needs of ${baseLocation} pet owners and provide customized service plans that fit your schedule and budget. Choose a local company that knows your community and prioritizes your family's health and satisfaction.`
        },
        {
          question: "What is your service workflow?",
          answer: `Our service workflow is designed to be completely seamless and stress-free for our clients. Once you sign up, we assign you a specific service day based on your route in the ${baseLocation} area. On your scheduled day, our uniformed technician will arrive in a clearly marked vehicle. We always ensure gates are securely closed upon entering. Our tech will systematically walk your yard in a grid pattern to ensure no waste is missed, carefully collecting all pet waste. After cleaning, we double-check the area, secure your gate upon exiting, and sanitize all our equipment before leaving your property. Finally, we send you a quick notification letting you know the job is done and your yard is ready to enjoy. It's a reliable, "set it and forget it" process that guarantees a clean yard every week.`
        },
        {
          question: "What happens during the first cleanup experience?",
          answer: "Your first cleanup (often referred to as an initial or spring cleaning) is a comprehensive reset of your yard's health. Because waste may have accumulated over weeks or months, the first visit requires significantly more time, effort, and attention to detail than a standard weekly maintenance visit. Our technicians will meticulously comb through your entire property, navigating tall grass, checking under bushes, and removing deeply embedded waste that you might not even know was there. This thorough initial sweep establishes a clean, sanitary baseline. Once this heavy lifting is complete and your yard is restored to a pristine condition, we can seamlessly transition into our quick, efficient weekly maintenance schedule to ensure it stays that way permanently."
        },
        {
          question: "Do you sanitize your tools between yards?",
          answer: "Absolutely. Cross-contamination is a serious concern in the pet waste removal industry, as diseases like parvo, giardia, and various parasites can easily be transferred from one yard to another via contaminated footwear or tools. At Scoopy Doo LLC, we take the health of your pets incredibly seriously. We have strict sanitation protocols in place for every single stop. Our technicians use a professional-grade, pet-safe disinfectant to thoroughly clean and sanitize all our scooping equipment, rakes, and boots before they even step foot on your property, and immediately after they leave. This rigorous sanitization process guarantees that we are exclusively removing hazards from your yard, never introducing new ones, giving you absolute peace of mind about your dog's safety."
        },
        {
          question: "How do you handle gate security and keeping my dogs safe?",
          answer: "We know that your dogs are beloved family members, and their safety is our absolute highest priority. The biggest fear for any pet owner hiring a service is a gate being left open. Scoopy Doo LLC has instituted a strict \"Double-Check\" gate policy. Our technicians physically verify that every latch is completely engaged and secure both when we enter your yard and immediately after we exit. We never prop gates open while we work. Furthermore, our staff is trained to be highly aware of their surroundings and to ensure no pets slip past them while entering or exiting. You can trust that when we leave your property, your yard is not only meticulously clean but completely secure for your furry friends to run and play."
        },
        {
          question: "How will I know when you've completed the service?",
          answer: "We believe in transparent, proactive communication so you never have to guess if we've been there. When you partner with Scoopy Doo LLC, you'll receive a confirmation notification (via email or text, depending on your preference) as soon as our technician completes the cleaning of your yard and secures your gate. This real-time alert provides immense peace of mind, especially for clients who are at work during our visits. You'll know exactly when it's safe to let the dogs out or allow the kids to go play in the freshly cleaned grass. Our reliable communication system is just one of the ways we build trust and demonstrate our commitment to exceptional customer service."
        },
        {
          question: "What is your weather policy? Do you work in the rain?",
          answer: "Yes, our commitment to keeping your yard clean doesn't stop just because the weather is less than ideal. We work through rain, cold, and standard seasonal weather to ensure your yard doesn't accumulate dangerous amounts of waste. However, the safety of our technicians is paramount. In the event of severe weather—such as lightning storms, torrential downpours causing flooding, heavy snow accumulation, or extreme icy conditions—we may need to pause service. If a weather event prevents us from servicing your yard on your scheduled day, we will communicate with you immediately and either reschedule for later in the week or, if necessary, perform a double-cleanup on your next scheduled visit at no extra charge. We guarantee your yard will always be taken care of."
        },
        {
          question: "Do I need to be home for the service?",
          answer: "Not at all! The beauty of our professional pooper scooper service is ultimate convenience. The vast majority of our clients are at work, running errands, or simply relaxing inside their homes while we work. As long as we have clear access to your yard and your gate is unlocked on your scheduled service day, we can handle everything independently. If your gate has a combination lock, you can securely provide the code to our office, and our technicians will lock it back up when they finish. You get to return home to a perfectly clean yard without ever having to adjust your schedule to accommodate our visit."
        },
        {
          question: "Are you fully insured and bonded?",
          answer: `Yes, Scoopy Doo LLC is a fully legitimate, professional business that is comprehensively insured and bonded. We carry robust general liability insurance to protect your property and our employees while we are working on your premises. Being fully insured is a critical mark of a professional pet waste removal company; it separates the trusted professionals from the weekend hobbyists. If an incredibly rare accident or property damage were to occur while we were servicing your yard, you are completely protected. We are happy to provide proof of insurance upon request, ensuring you feel entirely secure and confident in allowing our team onto your ${baseLocation} property week after week.`
        },
        {
          question: "What do your customers say about your service?",
          answer: `Our customers are our biggest advocates, and their feedback speaks volumes about our reliability and the quality of our work. Clients routinely praise Scoopy Doo LLC for our consistent communication, the dramatic improvement in their yard's usability, and our friendly, professional technicians. Many reviews highlight how our service has literally changed their weekly routines, completely removing the stress and arguments associated with dog chores. We frequently hear from customers who tell us they wish they had hired us years ago because of how effortless and life-changing the service is. We take immense pride in our reputation across the ${baseLocation} area and work tirelessly every single day to ensure every client feels valued and satisfied.`
        },
        {
          question: "How many 5-star reviews do you have?",
          answer: `Scoopy Doo LLC has proudly earned dozens of verified 5-star reviews from thrilled pet owners throughout the greater ${baseLocation} area. These reviews reflect our unwavering commitment to showing up on time, doing an incredibly thorough job, and treating our clients' pets and properties with the utmost respect. We don't just aim to pick up dog waste; we aim to deliver an exceptional customer experience from the moment you request a quote to the weekly completion notifications. Our growing wall of 5-star reviews is a testament to our position as the most trusted, reliable, and professional pet waste removal service in the region. We invite you to read them and see why your neighbors trust us!`
        }
      ]
    }
  ];
};