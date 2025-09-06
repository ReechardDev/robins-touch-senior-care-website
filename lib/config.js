export const SITE = {
  name: "Senior Care Website",
  brandName: "Robin's Touch Senior Care",
  phone: "+1-720-690-8765",
  phoneDisplay: "(720) 690‑8765",
  email: "miller.76.robin@gmail.com",
  city: "Denver, CO",
  headline: "Compassionate Senior Care in Denver Metro.",
  subcopy:
    "Non-medical care you can trust—rides to appointments, companionship, light home help, and daily check‑ins.",
   hero: {
    bgUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    portraitUrl: "/portrait.jpg", // <— local, will always work
  },
  trust: [
    { label: "CPR‑Certified", icon: "ShieldCheck" },
    { label: "Background check", icon: "ClipboardCheck" },
    { label: "25+ years experience", icon: "Sparkles" },
  ],
  areas: ["Denver", "Lakewood", "Cherry Creek", "Littleton", "Thornton"],
  pricingNote: "Simple hourly rates. No long contracts.",
  plans: [
    {
      name: "Standard",
      features: [
        "Companionship & light help",
        "Daily check‑ins",
        "Flexible scheduling",
      ],
      highlight: false,
    },
    {
      name: "Essentials",
      features: [
        "Everything in Standard",
        "Appointments & errands",
        "Care coordination",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      features: [
        "Expanded weekly hours",
        "Respite care block",
        "Priority scheduling",
      ],
      highlight: false,
    },
  ],
};
