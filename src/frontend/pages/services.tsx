// export default ServicesPage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield, // Example icon for Criminal Defense
  faPeopleArrows, // Example icon for Family Law
  faHandHoldingMedical, // Example icon for Personal Injury
  faBuilding, // Example icon for Civil Corporate Law
  faBalanceScale, // Example icon for Arbitration and Mediation
  faFileContract, // Estate Planning
  faGlobe, // Immigration Law
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Criminal Defense",
    description:
      "Expert legal representation for those facing criminal charges. Our team ensures the best possible defense and works tirelessly to protect your rights.",
    icon: faUserShield,
  },
  {
    title: "Family Law",
    description:
      "Comprehensive legal services for family-related issues, including divorce, custody, and support. We provide compassionate and effective support during challenging times.",
    icon: faPeopleArrows,
  },
  {
    title: "Personal Injury",
    description:
      "Dedicated to helping you get the compensation you deserve for personal injuries. We handle cases involving accidents, negligence, and more.",
    icon: faHandHoldingMedical,
  },
  {
    title: "Civil Corporate Law",
    description:
      "Expert advice and representation for corporate legal matters, including business formation, contracts, and compliance. We help your business navigate complex legal landscapes.",
    icon: faBuilding,
  },
  {
    title: "Arbitration and Mediation",
    description:
      "Professional services for resolving disputes outside of court. Our arbitration and mediation experts work to find fair solutions and avoid lengthy litigation.",
    icon: faBalanceScale,
  },
  {
    title: "Estate Planning",
    description:
      "Comprehensive legal services for estate planning, including wills, trusts, and estate management. We help you plan for the future and protect your assets.",
    icon: faFileContract,
  },
  {
    title: "Immigration Law",
    description:
      "Expert assistance with immigration matters, including visas, green cards, and citizenship applications. We guide you through the complex immigration process.",
    icon: faGlobe,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-dracula-bg py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-dracula-foreground mb-8">
        Our Services
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-dracula-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start"
          >
            {/* Font Awesome Icon */}
            <div className="flex-shrink-0 mb-4">
              <FontAwesomeIcon
                icon={service.icon}
                className="w-12 h-12 text-dracula-green"
              />
            </div>
            {/* Title and Description */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-dracula-foreground mb-2">
                {service.title}
              </h2>
              <p className="text-dracula-comment">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
