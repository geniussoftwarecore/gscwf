import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { Rocket, Shield, Zap, HeadphonesIcon, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const { dir } = useLanguage();

  const reasons = [
    {
      icon: Rocket,
      titleAr: "تطوير سريع ومرن",
      titleEn: "Fast & Agile Development",
      descriptionAr: "نستخدم أحدث التقنيات والأساليب المرنة لتسليم مشاريع عالية الجودة في وقت قياسي",
      descriptionEn: "We use the latest technologies and agile methods to deliver high-quality projects in record time",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Shield,
      titleAr: "أمان وموثوقية",
      titleEn: "Security & Reliability",
      descriptionAr: "نضمن حماية بياناتك وأنظمتك بأعلى معايير الأمان والخصوصية",
      descriptionEn: "We ensure the protection of your data and systems with the highest security and privacy standards",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: Zap,
      titleAr: "أداء فائق",
      titleEn: "Superior Performance",
      descriptionAr: "حلول محسّنة لتحقيق أفضل أداء وتجربة مستخدم سلسة",
      descriptionEn: "Optimized solutions for the best performance and seamless user experience",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      icon: HeadphonesIcon,
      titleAr: "دعم فني متواصل",
      titleEn: "24/7 Technical Support",
      descriptionAr: "فريق الدعم جاهز لمساعدتك في أي وقت لضمان استمرارية عملك",
      descriptionEn: "Our support team is ready to help you anytime to ensure business continuity",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Sparkles,
      titleAr: "تصاميم احترافية",
      titleEn: "Professional Designs",
      descriptionAr: "واجهات عصرية وجذابة مصممة لتحقيق أفضل تجربة للمستخدم",
      descriptionEn: "Modern and attractive interfaces designed for the best user experience",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    },
    {
      icon: Target,
      titleAr: "حلول مخصصة",
      titleEn: "Customized Solutions",
      descriptionAr: "نفهم احتياجاتك ونصمم حلول تناسب أهدافك بشكل مثالي",
      descriptionEn: "We understand your needs and design solutions that perfectly match your goals",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
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
            <Sparkles className="w-4 h-4" />
            {dir === 'rtl' ? 'لماذا نحن؟' : 'Why Choose Us?'}
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4">
            {dir === 'rtl' 
              ? 'نتميز بما يجعلنا الخيار الأمثل لك' 
              : 'What Makes Us Your Perfect Choice'}
          </h2>
          
          <p className="text-lg text-brand-text-secondary">
            {dir === 'rtl'
              ? 'نجمع بين الخبرة والإبداع لتقديم حلول رقمية متكاملة تحقق أهدافك'
              : 'We combine expertise and creativity to deliver comprehensive digital solutions that achieve your goals'}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`reason-card-${index}`}
              >
                <motion.div
                  className={cn(
                    "group relative h-full p-8 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden",
                    reason.bgColor
                  )}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "relative w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg",
                      reason.color
                    )}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="text-xl font-bold text-brand-text-primary group-hover:text-primary transition-colors">
                      {dir === 'rtl' ? reason.titleAr : reason.titleEn}
                    </h3>
                    
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                      {dir === 'rtl' ? reason.descriptionAr : reason.descriptionEn}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-brand-text-secondary mb-6">
            {dir === 'rtl' 
              ? 'مستعد لبدء مشروعك التالي؟' 
              : 'Ready to start your next project?'}
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-contact-why-us"
          >
            {dir === 'rtl' ? 'ابدأ الآن' : 'Get Started Now'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
