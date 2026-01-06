export const site = {
  name: "Southeastern Stair Company",
  legalName: "Southeastern Stair Company, LLC",
  baseUrl: "https://southeasternstaircompany.com",
  social: {
    facebook: "https://www.facebook.com/southeasternstaircompany",
    instagram: "https://www.instagram.com/southeasternstaircompany",
  },
  geo: {
    latitude: 33.9237,
    longitude: -84.8413,
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  contact: {
    phoneDisplay: "(678) 229 - 5918",
    phoneTel: "6782295918",
    phoneE164: "+16782295918",
    email: "sales@southeasternstaircompany.com",
    address: {
      street: "123 Black Forest Dr.",
      city: "Dallas",
      region: "GA",
      postalCode: "30132",
      country: "US",
    },
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/recent-work", label: "Recent Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/recent-work", label: "Recent Work" },
  { href: "/contact", label: "Contact Us" },
] as const;

export type Service = {
  title: string;
  slug: string;
  priority: number;
  description: string;
  icon: string;
  image: string;
  content: string;
};

export const services: Service[] = [
  {
    slug: "custom-stair-design",
    title: "Custom Stair Design",
    priority: 1,
    description:
      "Bespoke staircase designs tailored for luxury homes. We create architectural centerpieces that define the character of your residence.",
    icon: "M12 4v16m8-8H4",
    content: `
        <p>Your staircase is more than just a transition between floors; it is a central design element that sets the tone for your entire home. At Southeastern Stair Company, we specialize in <strong>custom stair design</strong> that blends form and function seamlessly for the most discerning homeowners.</p>
        
        <h3>Our Design Process</h3>
        <p>We work closely with homeowners, architects, and interior designers in affluent neighborhoods across the Southeast to create one-of-a-kind stair systems. Whether you prefer a modern floating staircase, a classic curved design, or a rustic timber-frame look, our team has the expertise to bring it to life.</p>
        
        <ul>
          <li><strong>Initial Consultation:</strong> We discuss your style, space requirements, and luxury finish expectations.</li>
          <li><strong>Material Selection:</strong> Choose from exotic hardwoods, architectural iron, glass, and precision-engineered steel.</li>
          <li><strong>3D Modeling:</strong> Visualize your design with detailed renderings before construction begins.</li>
          <li><strong>Structural Engineering:</strong> Ensuring your masterpiece meets all safety standards without compromising on aesthetic flow.</li>
        </ul>

        <h3>Exclusive Staircase Styles</h3>
        <p>From minimalist modern runs to grand geometrical masterpieces, we handle the most complex design challenges:</p>
        <ul>
          <li>Grand Curved and Double-Helix Staircases</li>
          <li>Minimalist Floating and Cantilevered Designs</li>
          <li>Traditional Period-Correct Replications</li>
          <li>Modern Transitional Wood and Metal Fusions</li>
        </ul>
      `,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "curved-spiral-stairs",
    title: "Curved & Spiral Staircases",
    priority: 2,
    description:
      "Master-built curved and spiral staircases. Our geometric precision creates stunning visual flow in high-end entryways and grand halls.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    content: `
        <p>A <strong>curved or spiral staircase</strong> is the ultimate architectural statement for a luxury home. At Southeastern Stair Company, we combine master-level geometry with premium materials to build staircases that are true works of functional art.</p>
        
        <h3>Curved Staircase Excellence</h3>
        <p>Curved stairs offer a sense of grandeur and flow that straight stairs cannot achieve. We use advanced bending techniques to create smooth, continuous handrails and stringers that follow the precise radius of your entryway, creating a seamless transition between levels.</p>
        
        <h3>Bespoke Spiral Designs</h3>
        <p>Perfect for sophisticated space-saving or as a dramatic secondary access point, our spiral staircases are engineered for both safety and high-end style. We offer custom-built wood spirals as well as contemporary wood-and-iron combinations.</p>

        <ul>
          <li><strong>Custom Radii:</strong> Perfectly tailored to your architectural floor plan.</li>
          <li><strong>Vibration-Free Engineering:</strong> Rock-solid structural integrity for a premium feel.</li>
          <li><strong>Artisanal Finishes:</strong> Hand-rubbed wood or custom powder-coated metal components.</li>
        </ul>
      `,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "glass-modern-railings",
    title: "Glass & Modern Railings",
    priority: 3,
    description:
      "Sophisticated glass and cable railing systems for contemporary interiors. Clean lines and unobstructed views for modern luxury living.",
    icon: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    content: `
        <p>For a truly contemporary aesthetic in modern luxury homes, <strong>glass and modern railing systems</strong> provide safety without sacrificing the open, airy feel of your interior design.</p>
        
        <h3>Luxury Glass Railing Systems</h3>
        <p>Glass railings offer unobstructed views and an immediate sense of modern luxury. We use high-strength tempered or laminated glass panels, available in ultra-clear, frosted, or custom tinted finishes to match your decor.</p>
        <ul>
          <li><strong>Minimalist Hardware:</strong> Stainless steel standoffs or concealed base shoes for a clean look.</li>
          <li><strong>Structural Precision:</strong> Engineered to provide maximum safety with minimal visual impact.</li>
          <li><strong>Post-to-Post Options:</strong> Glass panels integrated into structural metal or hardwood posts.</li>
        </ul>

        <h3>Precision Cable Railings</h3>
        <p>Our cable railing systems are an excellent choice for modern transitional homes. We use marine-grade 316 stainless steel cables that provide high durability and a sleek, industrial-chic profile.</p>

        <ul>
          <li><strong>Ultra-Slim Profiles:</strong> Significantly thinner lines than traditional balusters.</li>
          <li><strong>Indoor/Outdoor Synergy:</strong> Perfect for matching interior stairs with exterior luxury decks.</li>
          <li><strong>Designer Handrails:</strong> Combine modern cable with warm, premium hardwoods for a sophisticated touch.</li>
        </ul>
      `,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "iron-baluster-upgrades",
    title: "Iron Baluster Upgrades",
    priority: 4,
    description:
      "Transform your existing staircase with elegant wrought iron baluster conversions. A timeless upgrade for refined residential interiors.",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
    content: `
        <p>One of the most impactful ways to modernize a luxury home is with an <strong>iron baluster upgrade</strong>. Wrought iron balusters offer a timeless, sophisticated look that instantly elevates the aesthetic of your foyer and entire residence.</p>
        
        <h3>Why Upgrade to Iron?</h3>
        <p>Wrought iron provides a level of detail and artistic variety that wood simply cannot match. From minimalist modern bars to ornate hand-forged scrolls, we offer designs that complement any architectural style.</p>
        
        <ul>
          <li><strong>Unmatched Durability:</strong> Iron balusters are structurally superior and maintenance-free.</li>
          <li><strong>Aesthetic Versatility:</strong> Available in Satin Black, Oil-Rubbed Bronze, Antique Silver, and more.</li>
          <li><strong>Instant Equity:</strong> A modern staircase is a key differentiator in the high-end real estate market.</li>
          <li><strong>White-Glove Installation:</strong> We ensure a dust-free, precision installation process in your home.</li>
        </ul>

        <h3>Our Professional Conversion Process</h3>
        <p>We specialize in seamless "wood-to-iron" conversions. Our team carefully removes outdated wooden pickets and installs new iron balusters with high-strength epoxy and decorative shoes, resulting in a flawless finish that looks original to the home.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "staircase-remodeling",
    title: "Staircase Remodeling",
    priority: 5,
    description:
      "High-end staircase restoration and remodeling. We breathe new life into existing systems with premium materials and modern aesthetics.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    content: `
        <p>Transform your outdated stairs into a modern masterpiece. Our <strong>staircase remodeling</strong> services specialize in updating railings, balusters, and treads to reflect current luxury design trends.</p>
        
        <h3>Modernize Your Aesthetic</h3>
        <p>Many fine homes have structurally sound stairs that simply need an aesthetic update. We can transform individual components to completely change the character of the space:</p>
        <ul>
          <li><strong>New Handrails:</strong> Upgrade to more ergonomic and stylish designer profiles.</li>
          <li><strong>Tread Overlays:</strong> Install thick, premium hardwood over existing construction for a grander look.</li>
          <li><strong>Open-Concept Conversions:</strong> Removing outdated walls to create a more open, airy feel.</li>
          <li><strong>Box Newel Upgrades:</strong> Replace thin posts with substantial, custom-crafted box newels.</li>
        </ul>

        <p>Remodeling is a sophisticated way to add significant value to your residence and improve its overall flow without the need for structural replacement.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "quality-craftsmanship",
    title: "Quality Craftsmanship",
    priority: 6,
    description:
      "Uncompromising attention to detail in every tread and riser. We utilize time-honored techniques for superior structural integrity.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    content: `
        <p>At Southeastern Stair Company, <strong>quality craftsmanship</strong> is the fundamental principle of our work. We believe that a luxury staircase should be as structurally silent as it is visually stunning.</p>
        
        <h3>Master-Level Joinery</h3>
        <p>Our artisans are experts in advanced woodworking techniques. We take pride in the invisible details—from the precision dovetailing of our components to the grain-matching of every tread. Our "no-squeak" construction ensures your stairs feel as solid as they look.</p>
        
        <ul>
          <li><strong>Precision-Engineered Fits:</strong> No gaps, no squeaks, just solid craftsmanship.</li>
          <li><strong>Hand-Finished Surfaces:</strong> Every element is sanded and finished to a glass-smooth touch.</li>
          <li><strong>Artisanal Detail Work:</strong> Custom-turned balusters and hand-carved rail transitions.</li>
        </ul>

        <h3>A Legacy of Quality</h3>
        <p>Serving the Southeast's most exclusive communities, our reputation is built on the longevity of our work. We treat your residence with the utmost respect, delivering a final product that truly reflects the quality of your home.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "installation-finishing",
    title: "Installation & Finishing",
    priority: 7,
    description:
      "Precision installation and artisanal finishing. Our white-glove service ensures a flawless, high-durability finish in your home.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    content: `
        <p>The ultimate beauty of a custom staircase depends on the precision of its <strong>installation and finishing</strong>. We provide a white-glove service that ensures your project is completed with surgical accuracy and minimal disruption.</p>
        
        <h3>White-Glove Installation</h3>
        <p>Our installation team is specialized in the unique challenges of high-end residential construction. We ensure every component is perfectly level, plumb, and structurally integrated into your home's framing for a rock-solid feel.</p>
        
        <h3>High-End Finishing Options</h3>
        <p>The right finish protects your investment and highlights the natural elegance of the wood. We offer artisanal finishing techniques, including:</p>
        <ul>
          <li><strong>Custom Color Matching:</strong> Perfectly matching your existing flooring or furniture.</li>
          <li><strong>High-Durability Nano-Coats:</strong> Finishes that withstand heavy traffic while maintaining clarity.</li>
          <li><strong>Hand-Rubbed Oil Finishes:</strong> For a natural, matte look that emphasizes the wood's tactile quality.</li>
          <li><strong>Two-Tone Designer Finishes:</strong> Combining painted risers with stained treads for a classic look.</li>
        </ul>

        <p>Our multi-stage finishing process results in a durable, furniture-grade surface that is as beautiful to touch as it is to see.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "wood-selection",
    title: "Premium Wood Selection",
    priority: 8,
    description:
      "Exclusive access to high-grade hardwoods including White Oak, Walnut, and Mahogany. Only the finest grains for your custom project.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    content: `
        <p>The choice of wood for your staircase is a critical decision that impacts both its legacy and its daily tactile experience. At Southeastern Stair Company, we help you select <strong>premium hardwoods</strong> that perfectly complement your home's luxury interior.</p>
        
        <h3>Exclusive Hardwood Species</h3>
        <p>We source only the highest FAS-grade lumber from sustainable forests to ensure exceptional stability and beauty. Our most requested species for luxury projects include:</p>
        <ul>
          <li><strong>Select White Oak:</strong> Known for its exceptional durability and elegant linear grain—the standard for modern luxury.</li>
          <li><strong>Black Walnut:</strong> A rich, dark wood that offers unparalleled warmth and a sophisticated atmosphere.</li>
          <li><strong>African Mahogany:</strong> A timeless choice for grand, traditional estates with its deep reddish-brown luster.</li>
          <li><strong>Hard Maple:</strong> Extremely dense and light-toned, perfect for contemporary minimal designs.</li>
        </ul>

        <h3>Artisanal Sourcing and Curing</h3>
        <p>We take pride in our sourcing process, ensuring that every piece of wood used in your home is properly kiln-dried and color-matched for a consistent, high-end appearance across the entire staircase system.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "consultation",
    title: "Expert Consultation",
    priority: 9,
    description:
      "Professional design consultation for affluent homeowners. We help you navigate complex structural requirements and aesthetic choices.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    content: `
        <p>Starting a grand staircase project requires more than just a builder; it requires a partner. Our <strong>expert consultation</strong> services are designed to provide clarity, confidence, and creative direction from the very first meeting.</p>
        
        <h3>Our Consultative Approach</h3>
        <p>During our personalized session, we cover every technical and aesthetic aspect of your project to ensure a seamless execution that aligns with your lifestyle and home's architecture.</p>
        
        <ul>
          <li><strong>Architectural site assessment:</strong> Evaluating structural needs and visual flow.</li>
          <li><strong>Luxury Material Curation:</strong> Navigating our vast selection of premium hardwoods and metals.</li>
          <li><strong>Budgetary Planning:</strong> Providing transparent, detailed investment options.</li>
          <li><strong>Code & Safety Compliance:</strong> Ensuring your vision meets all regulatory standards with grace.</li>
        </ul>

        <p>Whether you are building a new luxury estate or planning a significant renovation, our team provides the high-level technical expertise and creative guidance you deserve.</p>
      `,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
  },
];

export const footerServices = services
  .filter((s) =>
    [
      "custom-stair-design",
      "quality-craftsmanship",
      "installation-finishing",
      "consultation",
    ].includes(s.slug)
  )
  .map((s) => ({ label: s.title, href: `/services/${s.slug}` }));
