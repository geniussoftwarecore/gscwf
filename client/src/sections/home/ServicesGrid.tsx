import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Link as LinkIcon, 
  Palette, 
  Server,
  ArrowRight,
  Zap,
  Code,
  Package
} from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export function ServicesGrid() {
  const { dir, lang } = useLanguage();
  const { t } = useTranslation();
  
  const { data: servicesResponse, isLoading } = useQuery<{success: boolean, data: Service[]}>({
    queryKey: ["/api/services"],
  });

  const services = servicesResponse?.data || [];
  
  const displayServices = services.slice(0, 6);

  const getServiceIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      web: Globe,
      mobile: Smartphone,
      erp: Database,
      desktop: Server,
      design: Palette,
      marketing: Zap,
      consulting: Code,
      integration: LinkIcon,
      default: Package
    };
    return iconMap[category] || iconMap.default;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-sky-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-brand-sky-base">
                <Skeleton className="w-16 h-16 rounded-2xl mb-4" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))
          ) : displayServices.length > 0 ? (
            displayServices.map((service, index) => {
              const IconComponent = getServiceIcon(service.category);
              
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base hover:border-primary overflow-hidden cursor-pointer h-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    data-testid={`service-card-${index}`}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-sky-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Badge */}
                    {service.featured && (
                      <div className="absolute top-4 rtl:left-4 ltr:right-4 z-20">
                        <span className="bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {lang === 'ar' ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <motion.div
                      className="relative z-10 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-brand-text-muted mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Technologies */}
                      {service.technologies && service.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-brand-sky-light text-primary px-2 py-1 rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 3 && (
                            <span className="text-xs text-brand-text-muted">
                              +{service.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Learn More Link */}
                      <motion.div
                        className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                        whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                      >
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight 
                          className={cn(
                            "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                            dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                          )} 
                        />
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 rtl:right-4 ltr:left-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-4 rtl:left-4 ltr:right-4 w-1 h-1 bg-brand-sky-accent rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    />
                  </motion.div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-brand-text-muted text-lg">
                {lang === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No services available'}
              </p>
            </div>
          )}
        </div>

        {/* View All Services Button */}
        {!isLoading && displayServices.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold group"
                data-testid="view-all-services"
              >
                {t('services.viewAll')}
                <ArrowRight 
                  className={cn(
                    "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1",
                    dir === 'rtl' && "rotate-180 mr-2 ml-0 group-hover:-translate-x-1"
                  )} 
                />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}