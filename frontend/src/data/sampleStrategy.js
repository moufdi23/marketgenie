// ── Sample strategy data ───────────────────────────────────────────────────
// Used by the "See a Sample" button on the landing page.
// All content is fictional — The Corner Bistro and Maple Street Grill do not
// exist. Formatted to match every parser in StrategyResults.jsx exactly.

export const SAMPLE_BUSINESS =
  "The Corner Bistro — upscale casual American restaurant in Chicago's Lincoln Park neighborhood, 60-seat dining room, farm-to-table seasonal menu, award-winning wine program";

export const SAMPLE_ANSWERS = [
  { question: 'Who is your target customer?',
    answer: 'Young professionals and couples, ages 28–45, $75K–$150K income, in Lincoln Park and Lakeview' },
  { question: 'What is your monthly marketing budget?',
    answer: '$800–$1,200/month' },
  { question: 'What marketing channels do you currently use?',
    answer: 'Instagram, word of mouth, a basic Google Business listing' },
  { question: 'What is your primary goal for the next 90 days?',
    answer: 'Increase weeknight dinner covers by 30% and grow catering revenue' },
  { question: 'What is your key competitive advantage?',
    answer: 'Farm-to-table seasonal menu, intimate 60-seat dining room, award-winning wine program' },
];

// The markdown string below is pre-formatted to match parseSections(), parseEmailTemplates(),
// parseAdCopy(), parseSEOKeywords(), extractScore(), parseBreakdown(), and parseQuickWins()
// in StrategyResults.jsx. Do not alter section headers or field names.
export const SAMPLE_STRATEGY = `## Target Audience
- **Primary demographics:** Young professionals and couples aged 28–45, earning $75K–$150K annually, living in Lincoln Park, Lakeview, and Old Town neighborhoods of Chicago
- **Lifestyle & values:** Food-conscious diners who value locally sourced ingredients, memorable experiences, and Instagram-worthy presentations; they research restaurants on Yelp and Google before visiting
- **Top pain points:** Tired of overcrowded chain restaurants with generic menus, limited vegetarian options, and difficulty finding date-night spots that feel genuinely special without being stuffy or overpriced
- **Buying motivators:** Seasonal menu rotations that reward repeat visits, wine pairing experiences, special-occasion packages, and genuine hospitality that makes them feel recognized and valued
- **Where they spend time online:** Instagram (food reels and neighborhood influencers), Google Maps reviews, Yelp, Chicago food blogs like Eater Chicago and Time Out Chicago, and Facebook events for private dining

## Social Media Strategy
**Instagram:** Build a visually-led "farm-to-table storytelling" presence documenting your sourcing journey and dish evolution. Goal: 2,000 followers and a 4% engagement rate within 90 days.
- Behind-the-scenes reel of Chef visiting Green City Market at dawn to source the week's produce
- "Meet the Farmer" carousel featuring your current seasonal supplier from Prairie Roots Farm with direct quotes
- Side-by-side transformation post: raw seasonal ingredient → finished plate → delighted customer
- Friday cocktail spotlight: 15-second reel of bartender crafting the weekend's signature drink
- "What's in Season" Story series every Monday previewing the week's specials and menu changes

Posting frequency: 5x per week (3 feed posts, 2 Stories). Best times: Tuesday–Thursday 6–8pm and Sunday 12–2pm.

**Facebook:** Leverage your older event-booking demographic (35–55) to drive reservations and private dining inquiries. Goal: fill all Saturday tables 3 weeks in advance.
- Monthly "Winemaker Dinner" event page with ticket purchase link and sommelier biography
- Photo album after each weekend service captioned "Last night at The Corner Bistro"
- Boosted reservation post targeting zip codes 60614 and 60657 for couples within a 5-mile radius
- "Reservations just opened" urgency posts every Tuesday morning for the upcoming weekend
- Customer spotlight: share anniversary and birthday photos (with guest permission) to build social proof

Ad targeting: Chicago metro, ages 28–55, interests include fine dining, wine, date night, farm-to-table, and local restaurants.

**TikTok:** Build viral discovery content to attract 21–35 first-time visitors who find restaurants through TikTok food content. Goal: one video reaching 10K+ views within 60 days.
- "POV: You're at The Corner Bistro on a Tuesday night" — intimate ambient atmosphere video
- Chef reaction video: customer tastes the seasonal tasting menu for the first time
- "What $85 gets you at a Chicago farm-to-table restaurant" — honest, impressive value breakdown
- Speed-edit of building the week's most photogenic dish from raw ingredients to final plate
- "Day in the life of a Lincoln Park chef" — 30-second behind-the-scenes series with narration

Trending topics to use: #ChicagoFoodScene, #FarmToTable, #DateNightChicago

## 30-Day Content Calendar
**Week 1 – Launch & Introduce:**
- Day 1 | Instagram | Chef market visit reel — "This week's menu starts here at Green City Market"
- Day 3 | Facebook | Announce weekend reservation availability with direct online booking link
- Day 5 | Instagram | Seasonal dish spotlight — spring asparagus tart with wine pairing suggestion
- Day 7 | TikTok | "First look at our new spring menu" — 30-second walk-through video with chef narration

**Week 2 – Storytelling & Trust:**
- Day 8 | Instagram | "Meet the Farmer" carousel — feature Prairie Roots Farm owner with sourcing story
- Day 10 | Facebook | Share a 5-star Yelp review with the guest's photo and heartfelt thank-you caption
- Day 12 | Instagram | Cocktail creation reel — bartender crafting the "Lincoln Park Sour" feature drink
- Day 14 | TikTok | "POV: Saturday dinner service at The Corner Bistro" — slow ambient reel at peak hours

**Week 3 – Conversion & Urgency:**
- Day 15 | Instagram | "Last 6 tables for Saturday" Story with direct reservation swipe-up link
- Day 17 | Facebook | Boosted post: "Date night in Lincoln Park — Reserve your table this week"
- Day 19 | Instagram | Customer anniversary photo feature with caption about creating lasting memories
- Day 21 | TikTok | "$85 tasting menu — what you actually get" — honest and impressive value breakdown video

**Week 4 – Community & Loyalty:**
- Day 22 | Instagram | Behind-the-scenes kitchen prep with front-of-house team introduction captions
- Day 24 | Facebook | "Winemaker Dinner — May 15th" event announcement with RSVP link and sommelier bio
- Day 26 | Instagram | Summer menu teaser — "New seasonal menu drops June 1st — here's a sneak peek"
- Day 28 | TikTok | Chef visits Green City Market again — continuing the weekly sourcing vlog series

## Email Marketing Templates
1. Welcome Email
Subject: Welcome to The Corner Bistro — Your table awaits
Body: Thank you for joining The Corner Bistro family. We're a small, passionate team in the heart of Lincoln Park dedicated to celebrating the best seasonal produce Chicago has to offer. As a subscriber, you'll be the first to hear about our monthly winemaker dinners, new seasonal menu drops, and exclusive reservation windows before they open to the public. We can't wait to cook for you — reply to this email anytime, we read every message personally.

2. Promotional Offer
Subject: Exclusive for you: Complimentary dessert on your next visit
Body: As a Corner Bistro insider, we're offering you something special — a complimentary seasonal dessert on your next dinner reservation, valid through the end of this month. Our pastry team just launched a spring strawberry pavlova that's been earning rave reviews, and we want you to be among the first to try it. Use the link below to book your table and it will be waiting for you. No catches, no codes — just our way of saying thank you.

3. Re-engagement Email
Subject: We miss you — here's what's changed at The Corner Bistro
Body: It's been a while since we've had the pleasure of cooking for you, and we wanted to reach out personally. A lot has changed since your last visit — we've launched a new summer tasting menu sourced exclusively from Illinois farms, added a rooftop terrace for warm evenings, and our sommelier just curated a new natural wine list that's unlike anything else in Lincoln Park. We'd love to welcome you back. Book this week and mention this email for a complimentary amuse-bouche to start your evening.

## Ad Copy
**Google Search Ads**

Headlines (each must be under 30 characters — write exactly 4, one per line):
- The Corner Bistro Chicago
- Farm-to-Table Lincoln Park
- Reserve Your Table Tonight
- Award-Winning Wine Program

Descriptions (each must be under 90 characters — write exactly 2, one per line):
- Upscale casual dining in Lincoln Park. Seasonal menu, local ingredients, unforgettable evenings.
- Perfect for date nights & special occasions. Reserve online — tables fill fast on weekends.

**Facebook/Instagram Ad**
Headline: Lincoln Park's Best-Kept Dinner Secret
Body: Farm-fresh ingredients. Intimate atmosphere. An award-winning wine list. The Corner Bistro is where Lincoln Park locals go when they want a dinner that actually feels special — without the stuffy price tag. Book your table tonight and taste the difference a seasonal kitchen makes.
CTA Button: Reserve a Table

## SEO Keywords

**Primary (3-4 keywords):**
- best restaurant Lincoln Park Chicago
- farm to table restaurant Chicago
- upscale casual dining Lincoln Park
- romantic restaurant Chicago

**Secondary (4-5 keywords):**
- seasonal menu restaurant Chicago
- date night restaurant Lincoln Park
- private dining Chicago North Side
- Chicago wine bar dinner
- best new restaurants Chicago 2026

**Long-tail phrases (5-6 phrases):**
- best farm to table restaurant in Lincoln Park Chicago
- intimate dinner restaurant for special occasions Chicago
- romantic date night restaurants Lincoln Park neighborhood
- upscale casual American restaurant North Side Chicago
- restaurant with award winning wine program Chicago
- seasonal tasting menu dinner Chicago Illinois

## Marketing Score
Overall Score: 82/100

Breakdown:
- Brand Clarity: 88/100
- Target Precision: 85/100
- Content Strategy: 78/100
- Digital Presence: 72/100
- Growth Potential: 90/100

Explanation: The Corner Bistro has exceptional brand clarity — the farm-to-table positioning, intimate atmosphere, and award-winning wine program create a clear and compelling identity that stands out in Chicago's competitive dining scene. The primary growth constraint is digital presence: a limited social media following and an under-optimized Google Business profile means you're losing customers who would genuinely love your restaurant but simply can't find you. Closing that gap is the single highest-ROI investment you can make this quarter.

Quick Wins (implement this week):
1. Claim and fully optimize your Google Business Profile with 15+ photos, current hours, menu link, and Q&A responses
2. Set up an Instagram business account with a booking link in bio and publish your first reel this week
3. Email your existing customer list with the complimentary dessert offer to drive immediate reservations
4. Create a Facebook event for your next winemaker dinner and ask your personal network to share it
5. Respond to every Google and Yelp review posted in the last 90 days — this directly boosts your search ranking
6. Add a "Reserve a Table" button to your Google Business Profile linking to your reservation system
7. Shoot 5 photos of your best dishes this weekend and schedule them to post over the next two weeks

## Competitor Analysis
### vs. Maple Street Grill

**Maple Street Grill** is The Corner Bistro's most direct competitor — a well-established neighborhood American restaurant two blocks away with strong brand recognition and a loyal base of repeat customers.

### Their Strengths
- Strong brand recognition in Lincoln Park with 8 years of operation and a loyal repeat-customer base built on consistency and familiarity
- Higher seating capacity (120 covers vs. your 60) giving them revenue advantages on busy weekend nights and the ability to absorb large walk-in traffic
- Aggressive happy hour program (3–6pm daily) that draws the after-work professional crowd and efficiently converts first-time visitors into regulars
- Well-reviewed brunch service that dominates weekend foot traffic and generates powerful social proof on Yelp and Google Maps

### Their Weaknesses & Gaps
- Menu lacks seasonality — the same dishes have been on rotation for 3+ years, leaving food-curious diners craving new experiences without a reason to return
- No real wine program — their wine list is limited to 12 bottles with minimal curation, leaving a huge gap for wine-focused diners and special occasions
- Generic atmosphere that prioritizes volume over experience — reviewers consistently mention "loud," "rushed," and "not special enough for a date night"
- Social media presence is minimal and inconsistent — no TikTok, sporadic Instagram, leaving the entire 21–38 discovery audience completely unaddressed

### Your Competitive Advantages
- Seasonal, ever-changing menu creates a compelling reason to return repeatedly — your regulars come back every month to see what's new, a behavior Maple Street Grill cannot trigger
- Award-winning wine program positions The Corner Bistro as the destination for wine-focused dining on the North Side, a category Maple Street Grill cannot credibly compete in
- Intimate 60-seat dining room creates an experience that feels genuinely special — exactly the "date night worthy" feeling that Maple Street Grill's volume-first model cannot replicate
- Active, visually-rich social media presence (especially TikTok) means you're capturing the next generation of Lincoln Park diners before Maple Street Grill has even entered that conversation

### Positioning Strategy
Position The Corner Bistro as **Lincoln Park's special-occasion restaurant** — the place you go when the evening actually matters. While Maple Street Grill owns the "casual reliable neighborhood spot" category, you own the **memorable experience** category. Your messaging should consistently highlight what Maple Street Grill cannot offer: a menu that surprises and rewards curiosity, a wine list that impresses your guests, and an atmosphere that makes the entire evening feel intentional and worth remembering. The comparison never needs to be explicit — let the experience and the content do the work.

### 5 Tactics to Win Their Customers
1. Run a targeted Instagram ad to zip codes 60614 and 60657 with creative that speaks to diners ready for something more memorable than their usual neighborhood spot — this speaks directly to Maple Street Grill regulars primed for an upgrade
2. Create a TikTok series showcasing your sommelier's weekly wine picks — educational, shareable content that positions your wine expertise and implicitly highlights a gap Maple Street Grill simply cannot fill
3. Reach out to Lincoln Park food influencers who have reviewed Maple Street Grill and invite them for a complimentary tasting — many will publish a comparison or "hidden gem" discovery piece that drives direct bookings
4. Build a proactive Google review strategy: respond to every positive review with language that leans into intimacy, atmosphere, and the special-occasion experience — building an SEO signal that Maple Street Grill's reviews undermine by comparison
5. Launch a monthly "Seasonal Preview Dinner" for 20 guests — an exclusive, reservations-only event that creates genuine scarcity and positions The Corner Bistro as the restaurant that keeps giving you a reason to come back`;
