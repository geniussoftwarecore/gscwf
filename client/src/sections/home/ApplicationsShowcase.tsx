import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { cn } from "@/lib/utils";
import { 
  Users, 
  TrendingUp, 
  Headphones, 
  FileText, 
  Smartphone, 
  Globe, 
  Palette, 
  Database,
  ArrowRight 
} from "lucide-react";
import { Link } from "wouter";

export function ApplicationsShowcase() {
  const { dir } = useLanguage();

  const applications = [
    {
      icon: Users,
      titleAr: "إدارة علاقات العملاء",
      titleEn: "Customer Relationship Management",
      descriptionAr: "نظام CRM متكامل لإدارة العملاء والصفقات بكفاءة عالية",
      descriptionEn: "Integrated CRM system for efficient customer and deal management",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      link: "/crm"
    },
    {
      icon: TrendingUp,
      titleAr: "إدارة المبيعات والصفقات",
      titleEn: "Sales & Deals Management",
      descriptionAr: "تتبع فرص المبيعات والصفقات عبر مراحل القمع البيعي",
      descriptionEn: "Track sales opportunities and deals through the sales funnel",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
      link: "/crm"
    },
    {
      icon: Headphones,
      titleAr: "الدعم الفني",
      titleEn: "Technical Support",
      descriptionAr: "نظام تذاكر متطور لإدارة طلبات الدعم الفني بفعالية",
      descriptionEn: "Advanced ticketing system for efficient support management",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      link: "/crm"
    },
    {
      icon: FileText,
      titleAr: "إدارة العروض والفواتير",
      titleEn: "Quotes & Invoices",
      descriptionAr: "إنشاء وإدارة العروض التجارية والفواتير بسهولة",
      descriptionEn: "Easy creation and management of quotes and invoices",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      link: "/crm"
    },
    {
      icon: Smartphone,
      titleAr: "تطبيقات الموبايل",
      titleEn: "Mobile Applications",
      descriptionAr: "تطوير تطبيقات موبايل احترافية لنظامي iOS و Android",
      descriptionEn: "Professional mobile app development for iOS and Android",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      link: "/services"
    },
    {
      icon: Globe,
      titleAr: "تطوير المواقع والويب",
      titleEn: "Web Development",
      descriptionAr: "تصميم وتطوير مواقع ويب حديثة ومتجاوبة",
      descriptionEn: "Design and development of modern, responsive websites",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950",
      link: "/services"
    },
    {
      icon: Palette,
      titleAr: "التصميم الجرافيكي",
      titleEn: "Graphic Design",
      descriptionAr: "خدمات تصميم احترافية للهويات والمطبوعات الرقمية",
      descriptionEn: "Professional design services for branding and digital media",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50 dark:bg-rose-950",
      link: "/graphics-design"
    },
    {
      icon: Database,
      titleAr: "أنظمة ERP",
      titleEn: "ERP Systems",
      descriptionAr: "حلول متكاملة لإدارة موارد المؤسسات",
      descriptionEn: "Integrated solutions for enterprise resource planning",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-brand-sky-light/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
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
            <Database className="w-4 h-4" />
            {dir === 'rtl' ? 'التطبيقات والأنظمة' : 'Applications & Systems'}
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4">
            {dir === 'rtl' 
              ? 'حلول رقمية متكاملة لنجاح أعمالك' 
              : 'Integrated Digital Solutions for Your Business Success'}
          </h2>
          
          <p className="text-lg text-brand-text-secondary">
            {dir === 'rtl'
              ? 'نوفر مجموعة شاملة من التطبيقات والأنظمة الذكية لتحسين كفاءة عملك وزيادة إنتاجيتك'
              : 'We provide a comprehensive suite of smart applications and systems to improve your work efficiency and productivity'}
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={app.link}>
                  <motion.div
                    className={cn(
                      "group relative h-full p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 cursor-pointer overflow-hidden",
                      app.bgColor
                    )}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    data-testid={`app-card-${index}`}
                  >
                    {/* Background Gradient on Hover */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                      app.color
                    )} />

                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "relative w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg",
                        app.color
                      )}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative space-y-3">
                      <h3 className="text-xl font-bold text-brand-text-primary group-hover:text-primary transition-colors">
                        {dir === 'rtl' ? app.titleAr : app.titleEn}
                      </h3>
                      
                      <p className="text-sm text-brand-text-secondary leading-relaxed">
                        {dir === 'rtl' ? app.descriptionAr : app.descriptionEn}
                      </p>

                      {/* Hover Arrow */}
                      <div className={cn(
                        "flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                        dir === 'rtl' && "flex-row-reverse"
                      )}>
                        <span>{dir === 'rtl' ? 'اكتشف المزيد' : 'Learn More'}</span>
                        <ArrowRight className={cn(
                          "w-4 h-4 group-hover:translate-x-1 transition-transform",
                          dir === 'rtl' && "rotate-180"
                        )} />
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-full h-full -rotate-12" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-text-secondary mb-6">
            {dir === 'rtl' 
              ? 'هل تحتاج إلى حل مخصص لعملك؟' 
              : 'Need a custom solution for your business?'}
          </p>
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-contact-cta"
            >
              <span className="flex items-center gap-2">
                {dir === 'rtl' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                <ArrowRight className={cn(
                  "w-5 h-5 group-hover:translate-x-1 transition-transform",
                  dir === 'rtl' && "rotate-180"
                )} />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
