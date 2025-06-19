"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  FaPalette,
  FaWordpress,
  FaShopify,
  FaSync,
  FaSearch,
  FaServer,
  FaTachometerAlt,
  FaChartLine,
  FaEnvelope,
  FaShareAlt,
  FaPenNib,
} from "react-icons/fa";
import styles from "@/styles/OurServices.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <FaPalette />,
    title: "Custom Website Design",
    description:
      "Bespoke website design tailored to your brand identity and business goals. We create unique, visually stunning websites that reflect your company's personality and values.",
  },
  {
    id: 2,
    icon: <FaWordpress />,
    title: "WordPress Development",
    description:
      "Custom WordPress websites with themes, plugins, and content management systems. Build powerful, scalable websites with the world's most popular CMS platform.",
  },
  {
    id: 3,
    icon: <FaShopify />,
    title: "Shopify Development",
    description:
      "Complete e-commerce stores built on Shopify with payment integration and inventory management. Launch your online store with confidence and start selling today.",
  },
  {
    id: 4,
    icon: <FaSync />,
    title: "Website Redesign & Refresh",
    description:
      "Modernizing existing websites with updated design, functionality, and user experience. Transform your outdated website into a modern, conversion-focused platform.",
  },
  {
    id: 5,
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    description:
      "On-page and off-page optimization to improve search engine rankings and organic traffic. Increase your visibility and drive more qualified leads to your business.",
  },
  {
    id: 6,
    icon: <FaServer />,
    title: "Website Hosting & Maintenance",
    description:
      "Reliable hosting solutions with regular updates, backups, and security monitoring. Keep your website running smoothly with our comprehensive maintenance services.",
  },
  {
    id: 7,
    icon: <FaTachometerAlt />,
    title: "Website Speed Optimization",
    description:
      "Performance improvements to reduce loading times and enhance user experience. Boost your site's speed and keep visitors engaged with lightning-fast performance.",
  },
  {
    id: 8,
    icon: <FaChartLine />,
    title: "Analytics & Reporting Setup",
    description:
      "Google Analytics integration and custom reporting dashboards. Make data-driven decisions with comprehensive insights into your website's performance and user behavior.",
  },
  {
    id: 9,
    icon: <FaEnvelope />,
    title: "Email Marketing Automation",
    description:
      "Newsletter campaigns, drip sequences, and customer retention email strategies. Build lasting relationships with your audience through targeted email marketing campaigns.",
  },
  {
    id: 10,
    icon: <FaShareAlt />,
    title: "Social Media Integration",
    description:
      "Social media feed integration and sharing capabilities across platforms. Connect your website with your social presence and expand your digital reach.",
  },
  {
    id: 11,
    icon: <FaPenNib />,
    title: "Content Marketing Strategy",
    description:
      "Blog setup, content creation, and content management systems. Establish thought leadership and drive organic traffic with compelling, valuable content.",
  },
];

export default function OurServices() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className={styles.servicesSection} id="services">
      <div className={`container ${styles.servicesContainer}`}>
        <h2 className="section-title">Our Services</h2>
        <div className={styles.servicesCarousel}>
          <div className={styles.carouselWrapper}>
            <button
              className={styles.servicesButtonPrev}
              aria-label="Previous service"
              title="Previous service"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.swiperContainer}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: `.${styles.servicesButtonNext}`,
                  prevEl: `.${styles.servicesButtonPrev}`,
                }}
                pagination={{
                  clickable: true,
                  el: ".services-pagination",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                className={styles.servicesSwiper}
                role="region"
                aria-label="Our services carousel"
                a11y={{
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div
                      className={styles.serviceCard}
                      role="group"
                      aria-labelledby={`service-title-${service.id}`}
                    >
                      <div className={styles.serviceIcon} aria-hidden="true">
                        {service.icon}
                      </div>
                      <h3
                        id={`service-title-${service.id}`}
                        className={styles.serviceTitle}
                      >
                        {service.title}
                      </h3>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                      <button
                        className={`cta-btn-primary ${styles.serviceCta}`}
                        aria-describedby={`service-title-${service.id}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              className={styles.servicesButtonNext}
              aria-label="Next service"
              title="Next service"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className="services-pagination"
            role="group"
            aria-label="Carousel pagination"
          ></div>
        </div>
      </div>
    </section>
  );
}
