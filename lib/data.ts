export const FIRM = {
  name: 'Summit Legal Partners',
  tagline: 'Counsel Built on Trust, Results Built on Principle',
  phone: '+91 9456789013',
  phoneHref: 'tel:+919456789013',
  email: 'counsel@summitlegalpartners.in',
  address: {
    line1: '95 Justice Chambers, Banjara Hills',
    line2: 'Hyderabad, Telangana 500034',
  },
  hours: [
    { day: 'Monday – Friday', time: '9:30 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'By Appointment' },
  ],
  social: {
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://www.twitter.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  founded: 1998,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Our Lawyers', href: '/our-lawyers' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  services: string[];
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    short: 'M&A, compliance, and corporate governance counsel.',
    description:
      'From entity formation to cross-border mergers, we advise boards and founders on the full corporate lifecycle — structuring, compliance, governance, and regulatory strategy.',
    icon: 'Building2',
    services: [
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Joint Ventures',
      'SEBI & Regulatory Compliance',
      'Company Incorporation',
      'Board Advisory',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    short: 'Representation across civil courts and tribunals.',
    description:
      'Our litigators represent clients in high-stakes civil disputes before the High Court, district courts, and specialized tribunals — with a record of decisive, well-prepared arguments.',
    icon: 'Scale',
    services: [
      'Commercial Disputes',
      'Contract Enforcement',
      'Recovery Suits',
      'Injunctions & Interim Relief',
      'Consumer Protection',
      'Writ Petitions',
    ],
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    short: 'Robust defense across bailable and non-bailable matters.',
    description:
      'We defend individuals and corporations in criminal proceedings with meticulous preparation — from bail applications to full trials and appellate representation.',
    icon: 'Shield',
    services: [
      'Bail Applications',
      'Trial Defense',
      'White-Collar Crime',
      'Cybercrime Defense',
      'Appeals & Revisions',
      'Quashing Petitions',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    short: 'Sensitive counsel for divorce, custody, and maintenance.',
    description:
      'Family disputes demand discretion and empathy. We guide clients through divorce, child custody, maintenance, and inheritance matters with a steady, solution-focused approach.',
    icon: 'HeartHandshake',
    services: [
      'Divorce & Separation',
      'Child Custody',
      'Maintenance & Alimony',
      'Domestic Violence',
      'Inheritance & Succession',
      'Prenuptial Agreements',
    ],
  },
  {
    slug: 'property-real-estate',
    title: 'Property & Real Estate',
    short: 'Title verification, due diligence, and dispute resolution.',
    description:
      'We handle the full spectrum of real estate law — title due diligence, conveyancing, RERA compliance, and property disputes — protecting your investment at every step.',
    icon: 'Home',
    services: [
      'Title Due Diligence',
      'Sale & Lease Drafting',
      'RERA Compliance',
      'Property Disputes',
      'Land Acquisition',
      'Eviction Matters',
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    short: 'Trademarks, copyrights, patents, and enforcement.',
    description:
      'Protecting innovation is protecting value. We register and enforce trademarks, copyrights, designs, and patents — and defend them against infringement across India.',
    icon: 'Lightbulb',
    services: [
      'Trademark Registration',
      'Copyright & Patents',
      'IP Enforcement',
      'Licensing Agreements',
      'Design Protection',
      'Opposition Proceedings',
    ],
  },
  {
    slug: 'taxation',
    title: 'Taxation',
    short: 'Direct and indirect tax advisory and dispute defense.',
    description:
      'Our tax practice spans advisory, structuring, and litigation — covering GST, income tax, and international tax, with a sharp focus on minimizing risk and liability.',
    icon: 'Calculator',
    services: [
      'GST Advisory',
      'Income Tax Planning',
      'Tax Disputes & Appeals',
      'International Taxation',
      'Transfer Pricing',
      'Tax Audits',
    ],
  },
  {
    slug: 'arbitration-mediation',
    title: 'Arbitration & Mediation',
    short: 'Efficient, confidential alternative dispute resolution.',
    description:
      'When courtrooms are not the answer, we guide clients through arbitration, mediation, and conciliation — securing enforceable outcomes with speed and confidentiality.',
    icon: 'Handshake',
    services: [
      'Domestic & International Arbitration',
      'Mediation & Conciliation',
      'Arbitration Awards',
      'Enforcement of Awards',
      'ADR Clause Drafting',
      'Tribunal Representation',
    ],
  },
];

export type Lawyer = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string[];
  barId: string;
  expertise: string[];
  experienceYears: number;
};

export const LAWYERS: Lawyer[] = [
  {
    slug: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Founding Partner & Senior Counsel',
    image:
      'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'With over 25 years at the Bar, Arjun Mehta founded Summit Legal Partners on a simple conviction — that rigorous preparation wins cases. He leads the firm’s corporate and appellate practice and has argued landmark matters before the Telangana High Court and the Supreme Court of India.',
    education: [
      'LL.M., Harvard Law School',
      'LL.B., NALSAR University of Law',
      'B.A. (Hons) Economics, Delhi University',
    ],
    barId: 'TS/1120/1998',
    expertise: ['Corporate Law', 'Appellate Litigation', 'Constitutional Law'],
    experienceYears: 26,
  },
  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    role: 'Managing Partner — Litigation',
    image:
      'https://images.pexels.com/photos/7581115/pexels-photo-7581115.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Priya Nair heads the litigation practice, bringing strategic precision to complex commercial and civil disputes. Recognized for her incisive cross-examination and calm under pressure, she has secured favorable verdicts in over 200 contested matters.',
    education: [
      'LL.B., NLSIU Bangalore',
      'B.A. Political Science, Lady Shri Ram College',
    ],
    barId: 'TS/2245/2003',
    expertise: ['Civil Litigation', 'Commercial Disputes', 'Arbitration'],
    experienceYears: 21,
  },
  {
    slug: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'Partner — Criminal Defense',
    image:
      'https://images.pexels.com/photos/34762353/pexels-photo-34762353.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'A former public prosecutor turned defense counsel, Rajesh Kumar brings an insider’s understanding of criminal procedure to every matter. He is known for tenacious trial advocacy and a meticulous eye for procedural detail.',
    education: [
      'LL.B., Osmania University',
      'M.A. Criminology, Tata Institute of Social Sciences',
    ],
    barId: 'TS/3389/2005',
    expertise: ['Criminal Defense', 'White-Collar Crime', 'Cybercrime'],
    experienceYears: 19,
  },
  {
    slug: 'ananya-sharma',
    name: 'Ananya Sharma',
    role: 'Partner — Family & Property Law',
    image:
      'https://images.pexels.com/photos/10620268/pexels-photo-10620268.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Ananya Sharma leads the family and property practice, combining legal rigor with the empathy these matters demand. She is a trained mediator and a strong advocate of out-of-court resolution wherever it serves her clients.',
    education: [
      'LL.M., Columbia Law School',
      'LL.B., Faculty of Law, Delhi University',
    ],
    barId: 'TS/4471/2008',
    expertise: ['Family Law', 'Property Law', 'Mediation'],
    experienceYears: 16,
  },
  {
    slug: 'vikram-reddy',
    name: 'Vikram Reddy',
    role: 'Partner — IP & Taxation',
    image:
      'https://images.pexels.com/photos/15200105/pexels-photo-15200105.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Vikram Reddy advises on the intersection of intellectual property and tax — a niche he has helped define for Indian technology and pharma clients. He manages global IP portfolios and complex transfer pricing matters.',
    education: [
      'LL.M., Stanford Law School',
      'B.Tech, IIT Madras',
      'LL.B., NALSAR University of Law',
    ],
    barId: 'TS/5560/2011',
    expertise: ['Intellectual Property', 'Taxation', 'Technology Law'],
    experienceYears: 13,
  },
  {
    slug: 'meera-iyer',
    name: 'Meera Iyer',
    role: 'Senior Associate — Corporate & Securities',
    image:
      'https://images.pexels.com/photos/7580944/pexels-photo-7580944.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Meera Iyer structures deals and steers compliance for growth-stage and listed companies alike. She is known for drafting that anticipates risk and for her steady hand through SEBI and MCA filings.',
    education: [
      'LL.B., NALSAR University of Law',
      'B.Com (Hons), Shri Ram College of Commerce',
    ],
    barId: 'TS/6674/2014',
    expertise: ['Corporate Law', 'Securities', 'M&A'],
    experienceYears: 10,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  practiceArea: string;
  client: string;
  summary: string;
  challenge: string;
  strategy: string;
  outcome: string;
  result: string;
  image: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'landmark-m-acquisition',
    title: 'Landmark Cross-Border Acquisition in Pharma',
    practiceArea: 'Corporate Law',
    client: 'Confidential Pharma Major',
    summary:
      'Advised a leading Indian pharmaceutical company on its USD 240M acquisition of a European manufacturer.',
    challenge:
      'The client faced a time-sensitive cross-border acquisition involving three jurisdictions, competing regulatory regimes, and a complex intellectual property portfolio that had to be transferred without business disruption.',
    strategy:
      'We assembled a multi-disciplinary team spanning corporate, IP, and tax. A phased due diligence model identified liabilities early, while parallel negotiations with regulators across India, Germany, and the Netherlands kept the timeline intact.',
    outcome:
      'The deal closed 11 days ahead of schedule with full regulatory clearance and a clean IP transfer. The client expanded into three new European markets without a single day of operational downtime.',
    result: 'USD 240M deal closed',
    image:
      'https://images.pexels.com/photos/7875996/pexels-photo-7875996.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'high-court-commercial-dispute',
    title: 'High Court Victory in a High-Value Commercial Dispute',
    practiceArea: 'Civil Litigation',
    client: 'Indian Infrastructure Consortium',
    summary:
      'Secured a favorable judgment in a INR 90 crore commercial dispute before the Telangana High Court.',
    challenge:
      'Our client was locked in a multi-party contract dispute over delayed infrastructure deliverables, facing a counterclaim that threatened to void the core agreement entirely.',
    strategy:
      'We reconstructed the contract performance timeline through 400+ documents and structured witness testimony around the force majeure provisions — turning the opponent’s strongest argument into our decisive defense.',
    outcome:
      'The High Court ruled in our client’s favor, upholding the contract and dismissing the counterclaim in full. The judgment has since been cited in two subsequent commercial cases.',
    result: 'INR 90 crore recovered',
    image:
      'https://images.pexels.com/photos/7876197/pexels-photo-7876197.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'trademark-enforcement-victory',
    title: 'Trademark Enforcement Across Six States',
    practiceArea: 'Intellectual Property',
    client: 'National Consumer Brand',
    summary:
      'Enforced a leading FMCG brand’s trademark against a coordinated network of counterfeiters.',
    challenge:
      'A well-known consumer brand discovered a network of counterfeit manufacturers operating across six Indian states, eroding market share and brand trust simultaneously.',
    strategy:
      'We coordinated simultaneous Anton Piller orders across jurisdictions, working with local investigators to seize inventory and trace the supply chain back to its source — then pursued civil and criminal remedies in parallel.',
    outcome:
      'Within 90 days, raids were executed in 14 locations, counterfeit inventory was seized, and the ringleaders were held liable for damages. The brand’s market share recovered fully the following quarter.',
    result: '14 enforcement actions',
    image:
      'https://images.pexels.com/photos/7876144/pexels-photo-7876144.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'gst-dispute-resolution',
    title: 'Resolution of a Complex GST Dispute',
    practiceArea: 'Taxation',
    client: 'Mid-Market Manufacturing Group',
    summary:
      'Resolved a contentious GST classification dispute saving the client INR 12 crore in liability.',
    challenge:
      'The revenue department reclassified our client’s products retrospectively, raising a demand of INR 12 crore plus penalties — threatening both cash flow and ongoing operations.',
    strategy:
      'We challenged the reclassification at the appellate authority with a detailed technical submission supported by industry precedent, and negotiated a settlement that preserved the original classification going forward.',
    outcome:
      'The entire demand was withdrawn and the original product classification was restored, securing the client’s margins and removing a cloud over future filings.',
    result: 'INR 12 crore saved',
    image:
      'https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'family-estate-settlement',
    title: 'Confidential Settlement of a Multi-Generational Estate',
    practiceArea: 'Family Law',
    client: 'Prominent Business Family',
    summary:
      'Facilitated a private, out-of-court settlement of a complex inheritance dispute.',
    challenge:
      'A multi-generational inheritance dispute threatened to fracture a prominent family business and play out publicly in the courts, with substantial assets held across multiple entities.',
    strategy:
      'We guided the family through structured mediation, working alongside financial advisors to value and partition assets equitably — while keeping the matter entirely confidential.',
    outcome:
      'A binding settlement was reached in seven months, the family business remained intact, and all parties avoided protracted litigation. The resolution was sealed by consent decree.',
    result: 'Private 7-month resolution',
    image:
      'https://images.pexels.com/photos/7876203/pexels-photo-7876203.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'real-estate-title-clearance',
    title: 'Title Clearance for a Landmark Real Estate Development',
    practiceArea: 'Property & Real Estate',
    client: 'Real Estate Developer',
    summary:
      'Cleared a tangled 40-year title chain enabling a INR 350 crore mixed-use development.',
    challenge:
      'A developer acquired a prime parcel in Hyderabad, only to discover a 40-year-old title chain riddled with partition disputes, unregistered deeds, and competing claims from distant heirs.',
    strategy:
      'We conducted a forensic title reconstruction, located and obtained relinquishments from 11 claimants, and rectified the land records through the revenue authorities before approaching RERA.',
    outcome:
      'The title was rendered marketable, RERA registration was secured, and the development launched on schedule — preserving the client’s investment and reputation.',
    result: 'INR 350 crore development unblocked',
    image:
      'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Summit Legal Partners guided us through the most complex transaction of our company’s history. Their preparation was flawless and their judgment was spot on at every turn.',
    name: 'Karthik Venkatesh',
    role: 'CEO, Venkatesh Pharma Group',
    rating: 5,
  },
  {
    quote:
      'I came to them anxious and uncertain about a family dispute. They handled the matter with discretion and empathy, and achieved a resolution I did not think was possible.',
    name: 'Lakshmi Rao',
    role: 'Private Client',
    rating: 5,
  },
  {
    quote:
      'Their litigation team is simply the best I have worked with. They understood our commercial reality and fought for the outcome that mattered to our business.',
    name: 'Aditya Bansal',
    role: 'Director, Bansal Infrastructure',
    rating: 5,
  },
  {
    quote:
      'When our brand was being counterfeited, Summit moved fast and decisively. Within weeks the counterfeiters were shut down. They protected everything we had built.',
    name: 'Sneha Kapoor',
    role: 'Founder, Kapoor Consumer Brands',
    rating: 5,
  },
  {
    quote:
      'The tax team resolved a dispute that had hung over our company for two years. Their technical depth and strategic patience made all the difference.',
    name: 'Rahul Deshpande',
    role: 'CFO, Deshpande Manufacturing',
    rating: 5,
  },
  {
    quote:
      'Professional, responsive, and genuinely invested in our outcome. Summit Legal Partners feels less like an outside firm and more like part of our team.',
    name: 'Pooja Malhotra',
    role: 'General Counsel, NorthStar Tech',
    rating: 5,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'new-digital-personal-data-protection-act',
    title: 'What the New Digital Personal Data Protection Act Means for Your Business',
    excerpt:
      'India’s new data protection regime reshapes how companies collect, store, and process personal data. Here is what compliance looks like in practice.',
    category: 'Corporate Law',
    author: 'Arjun Mehta',
    date: '2025-07-18',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/7876088/pexels-photo-7876088.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'rera-2025-amendments-developers',
    title: 'RERA 2025 Amendments: A Practical Guide for Real Estate Developers',
    excerpt:
      'The latest regulatory updates introduce stricter timelines and disclosure norms. We break down what has changed and how developers should respond.',
    category: 'Real Estate',
    author: 'Ananya Sharma',
    date: '2025-06-30',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'enforcing-arbitration-awards-india',
    title: 'Enforcing Arbitration Awards in India: A 2025 Playbook',
    excerpt:
      'The Arbitration Act has evolved significantly. We examine the current enforcement landscape and how to secure your award without delay.',
    category: 'Arbitration',
    author: 'Priya Nair',
    date: '2025-06-12',
    readTime: '7 min read',
    image:
      'https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'gst-classification-disputes',
    title: 'Winning GST Classification Disputes: Lessons from Recent Tribunals',
    excerpt:
      'Classification disputes remain the single largest source of GST litigation. We analyze the patterns that separate winning cases from losing ones.',
    category: 'Taxation',
    author: 'Vikram Reddy',
    date: '2025-05-28',
    readTime: '9 min read',
    image:
      'https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'protecting-ip-startups',
    title: 'Protecting Your IP Before You Scale: A Startup Founder’s Checklist',
    excerpt:
      'Intellectual property is often a startup’s most valuable asset — and the most neglected. Here is the checklist we walk every founder through.',
    category: 'Intellectual Property',
    author: 'Vikram Reddy',
    date: '2025-05-10',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'mediation-vs-litigation-family-disputes',
    title: 'Mediation vs. Litigation in Family Disputes: Choosing the Right Path',
    excerpt:
      'Not every family dispute belongs in a courtroom. We compare mediation and litigation — and explain when each approach serves the client best.',
    category: 'Family Law',
    author: 'Ananya Sharma',
    date: '2025-04-22',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/7876203/pexels-photo-7876203.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export type FAQ = {
  question: string;
  answer: string;
  category: string;
};

export const FAQS: FAQ[] = [
  {
    category: 'Engagement',
    question: 'How do I schedule a consultation with Summit Legal Partners?',
    answer:
      'You can request a consultation through the Contact page on this site, or call us directly at +91 9456789013. Our front office will schedule an initial meeting — in person at our Banjara Hills office or virtually — within two working days.',
  },
  {
    category: 'Engagement',
    question: 'What should I bring to my first consultation?',
    answer:
      'Bring any documents relevant to your matter — contracts, notices, court papers, correspondence, and identification. The more context you provide, the more precisely we can assess your position. If you are unsure, bring what you have and we will guide you on what else is needed.',
  },
  {
    category: 'Fees',
    question: 'How does Summit Legal Partners structure its fees?',
    answer:
      'We offer transparent fee structures tailored to the matter. These may include fixed fees for defined work (such as drafting or due diligence), hourly billing for complex litigation, and retainer arrangements for ongoing counsel. All fee terms are confirmed in writing before work begins.',
  },
  {
    category: 'Fees',
    question: 'Do you offer an initial consultation at no charge?',
    answer:
      'We offer a brief initial discussion to understand your matter and determine whether we are the right fit. A substantive consultation that includes legal assessment is billed at our standard rate, which is communicated upfront.',
  },
  {
    category: 'Practice',
    question: 'What areas of law does the firm practice?',
    answer:
      'We focus on eight core practice areas: Corporate Law, Civil Litigation, Criminal Defense, Family Law, Property & Real Estate, Intellectual Property, Taxation, and Arbitration & Mediation. Each is led by a partner with deep specialization in that field.',
  },
  {
    category: 'Practice',
    question: 'Do you represent clients outside Hyderabad?',
    answer:
      'Yes. While we are based in Hyderabad, we represent clients across India and in cross-border matters. We appear before the Telangana High Court, the Supreme Court of India, and tribunals nationwide, and we maintain a network of trusted correspondent firms in major cities.',
  },
  {
    category: 'Confidentiality',
    question: 'How is my information kept confidential?',
    answer:
      'Attorney-client privilege is fundamental to our practice. All communications, documents, and case details are handled with strict confidentiality and stored on secure systems. Our internal protocols are designed to protect your information at every stage of the engagement.',
  },
  {
    category: 'Confidentiality',
    question: 'Will my case details ever be shared publicly?',
    answer:
      'Never without your explicit consent. We do not disclose client identities or case specifics. Any case studies we publish are anonymized unless a client has expressly authorized us to share their story.',
  },
];

export const METRICS = [
  { label: 'Years of Experience', value: 27, suffix: '+' },
  { label: 'Cases Won', value: 1200, suffix: '+' },
  { label: 'Clients Served', value: 850, suffix: '+' },
  { label: 'Practice Areas', value: 8, suffix: '' },
];

export const FIRM_HIGHLIGHTS = [
  {
    icon: 'Award',
    title: 'Award-Winning Counsel',
    description:
      'Recognized by leading legal directories for excellence across corporate, litigation, and dispute resolution practice.',
  },
  {
    icon: 'Users',
    title: 'Partner-Led Service',
    description:
      'Every engagement is led by a senior partner — you work directly with the lawyer responsible for your outcome.',
  },
  {
    icon: 'Clock',
    title: 'Responsive & Decisive',
    description:
      'We respond within one working day and move with purpose. Delays in legal work cost our clients — and we do not tolerate them.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Absolute Confidentiality',
    description:
      'Your matters are protected by rigorous confidentiality protocols and secure, encrypted case management.',
  },
];

export const WHY_CHOOSE = [
  {
    icon: 'Target',
    title: 'Outcome-Driven Strategy',
    description:
      'We begin every matter with the end in mind. Our strategy is built around the result that matters to you — not procedural activity for its own sake.',
  },
  {
    icon: 'Layers',
    title: 'Cross-Disciplinary Depth',
    description:
      'Complex matters rarely fit one practice area. Our teams span corporate, litigation, tax, and IP — assembled around your specific needs.',
  },
  {
    icon: 'Globe',
    title: 'National & Cross-Border Reach',
    description:
      'From the Telangana High Court to the Supreme Court and international arbitrations, we represent clients across India and abroad.',
  },
  {
    icon: 'MessageSquare',
    title: 'Clear Communication',
    description:
      'You always know where your matter stands. We provide plain-language updates, candid assessments, and realistic timelines.',
  },
];
