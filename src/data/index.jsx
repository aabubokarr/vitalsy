
import {
    Stethoscope,
    Heart,
    Activity,
    Brain,
    UserPlus,
    Microscope,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from "lucide-react";

export const companyName = "VitalSy";

export const navLinks = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Testimonials", to: "testimonials" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
];

export const heroData = {
    badge: "PREMIER HEALTHCARE",
    title: "Your Health,",
    highlight: "Our Priority",
    description: "Experience world-class medical care with a personal touch. We are committed to your well-being through every stage of life.",
    primaryAction: "Book Appointment",
    secondaryAction: "Explore Services"
};

export const stats = [
    { value: "20+", label: "Years Experience", icon: Activity, color: "blue" },
    { value: "15k+", label: "Happy Patients", icon: null, color: "primary" },
    { value: "50+", label: "Specialist Doctors", icon: null, color: "secondary" },
    { value: "24/7", label: "Emergency Care", icon: Activity, color: "teal" }
];

export const services = [
    {
        icon: <Stethoscope size={40} className="text-primary" />,
        title: "General Checkup",
        description: "Comprehensive health assessments to keep you in top shape.",
    },
    {
        icon: <Heart size={40} className="text-primary" />,
        title: "Cardiology",
        description: "Expert care for your heart with advanced diagnostic tools.",
    },
    {
        icon: <Activity size={40} className="text-primary" />,
        title: "Emergency Care",
        description: "24/7 emergency services for critical health situations.",
    },
    {
        icon: <Brain size={40} className="text-primary" />,
        title: "Neurology",
        description: "Specialized treatment for disorders of the nervous system.",
    },
    {
        icon: <UserPlus size={40} className="text-primary" />,
        title: "Pediatrics",
        description: "Compassionate care for infants, children, and adolescents.",
    },
    {
        icon: <Microscope size={40} className="text-primary" />,
        title: "Laboratory",
        description: "Accurate and timely lab tests to support your diagnosis.",
    },
];

export const aboutData = {
    subtitle: "About Us",
    title: "Dedicated to Your Well-being",
    description: "At VitalSy, we believe in a holistic approach to medicine. Our team of experienced professionals is dedicated to providing personalized care that addresses not just your symptoms, but your overall health and lifestyle.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop",
    features: [
        "Experienced Specialist Doctors",
        "Advanced Diagnostic Technology",
        "Personalized Treatment Plans",
        "24/7 Patient Support"
    ]
};

export const testimonials = [
    {
        name: "Emily Thompson",
        role: "Patient",
        content: "The care I received was exceptional. The doctors were attentive and the staff made me feel right at home.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Patient",
        content: "State-of-the-art facilities and a very professional team. I highly recommend this clinic to everyone.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Mother",
        content: "My children actually enjoy coming here! The pediatric team is wonderful and patient.",
        rating: 5,
    },
];

export const faqs = [
    {
        question: "Do I need an appointment?",
        answer: "While we welcome walk-ins for emergencies, we highly recommend booking an appointment for general checkups to avoid waiting times.",
    },
    {
        question: "What insurance plans do you accept?",
        answer: "We accept most major insurance plans. Please contact our front desk for a specific list of covered providers.",
    },
    {
        question: "Are your services available on weekends?",
        answer: "Yes, we are open on Saturdays from 9 AM to 5 PM. Sundays are reserved for emergency services only.",
    },
    {
        question: "How can I get my test results?",
        answer: "Test results are typically available within 24-48 hours. You can access them through our online patient portal or pick them up in person.",
    },
];

export const contactInfo = {
    address: "123 Health Street, Sydney, NSW 2000, Australia",
    phone: "+61 2 1234 5678",
    email: "contact@vitalsy.com",
    addressShort: "123 Health Street, Sydney NSW 2000"
};

export const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
];

export const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" }
];

export const footerServices = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Emergency Care",
    "General Checkup"
];
