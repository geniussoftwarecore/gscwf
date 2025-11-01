import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Eye, Heart } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";

export function PortfolioPreview() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  // Fetch portfolio items from API
  const { data: portfolioItems, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  // Get top 6 featured or latest projects
  const featuredItems = portfolioItems
    ?.filter(item => item.status === 'published')
    ?.sort((a, b) => {
      // Sort by featured first, then by creation date
      if (a.featured === 'true' && b.featured !== 'true') return -1;
      if (a.featured !== 'true' && b.featured === 'true') return 1;
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    })
    ?.slice(0, 6) || [];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-brand-sky-light/20 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExternalLink className="w-4 h-4" />
            {dir === 'rtl' ? 'معرض أعمالنا' : 'Our Portfolio'}
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl' ? 'مشاريع نفخر بإنجازها' : 'Projects We Are Proud Of'}
          </motion.h2>
          <motion.p
            className="text-lg text-brand-text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {dir === 'rtl'
              ? 'استكشف مجموعة من أفضل المشاريع التي طورناها لعملائنا بأعلى معايير الجودة والاحترافية'
              : 'Explore a selection of our best projects developed for our clients with the highest standards of quality and professionalism'}
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-sky-base">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">
              {dir === 'rtl' ? 'حدث خطأ في تحميل الأعمال' : 'Error loading portfolio items'}
            </p>
          </div>
        )}

        {/* Portfolio Grid */}
        {!isLoading && !error && featuredItems.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/portfolio/${item.slug}`}>
                  <motion.div
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-sky-base dark:border-gray-700 hover:border-primary cursor-pointer h-full"
                    whileHover={{ y: -8 }}
                    data-testid={`portfolio-item-${item.id}`}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-56">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-sky-base to-primary flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                              <ExternalLink className="w-8 h-8" />
                            </div>
                            <p className="text-sm font-medium">{item.category}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Featured Badge */}
                      {item.featured === 'true' && (
                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          {dir === 'rtl' ? '⭐ مميز' : '⭐ Featured'}
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.views || 0}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes || 0}</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-primary border-white bg-white hover:bg-gray-100"
                          data-testid={`button-view-${item.id}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {dir === 'rtl' ? 'عرض التفاصيل' : 'View Details'}
                        </Button>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="inline-block px-3 py-1 bg-brand-sky-light dark:bg-primary/20 text-primary text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                        {item.year && (
                          <span className="text-xs text-brand-text-secondary">
                            {item.year}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-text-primary dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-brand-text-secondary dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Technology Tags */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.slice(0, 3).map((tech, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                              +{item.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* View Project Link */}
                      <motion.div
                        className={cn(
                          "flex items-center gap-2 text-primary font-medium cursor-pointer group-hover:gap-3 transition-all duration-300",
                          dir === 'rtl' && "flex-row-reverse"
                        )}
                        whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                      >
                        <span>{dir === 'rtl' ? 'عرض التفاصيل' : 'View Details'}</span>
                        <ArrowRight 
                          className={cn(
                            "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                            dir === 'rtl' && "rotate-180 group-hover:-translate-x-1"
                          )} 
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && featuredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brand-text-secondary mb-4">
              {dir === 'rtl' ? 'لا توجد أعمال متاحة حالياً' : 'No portfolio items available'}
            </p>
          </div>
        )}

        {/* View All Projects Button */}
        {!isLoading && featuredItems.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl transition-all duration-300 text-base font-semibold group"
                data-testid="view-all-portfolio"
              >
                {dir === 'rtl' ? 'عرض جميع الأعمال' : 'View All Projects'}
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
