import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatsSection() {
  const { dir } = useLanguage();

  const stats = [
    {
      icon: Briefcase,
      valueAr: "500+",
      valueEn: "500+",
      labelAr: "مشروع منجز",
      labelEn: "Completed Projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      valueAr: "300+",
      valueEn: "300+",
      labelAr: "عميل سعيد",
      labelEn: "Happy Clients",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      valueAr: "98%",
      valueEn: "98%",
      labelAr: "معدل الرضا",
      labelEn: "Satisfaction Rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      valueAr: "15+",
      valueEn: "15+",
      labelAr: "سنة خبرة",
      labelEn: "Years Experience",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4">
            {dir === 'rtl' ? 'أرقامنا تتحدث عن نفسها' : 'Our Numbers Speak for Themselves'}
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            {dir === 'rtl' 
              ? 'نفخر بثقة عملائنا ونجاحاتنا المستمرة في تقديم أفضل الحلول الرقمية'
              : 'We take pride in our clients\' trust and continuous success in delivering the best digital solutions'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-card-${index}`}
              >
                <motion.div
                  className="relative group bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                      stat.color
                    )}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    className="relative text-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-2">
                      {dir === 'rtl' ? stat.valueAr : stat.valueEn}
                    </div>
                    <div className="text-sm md:text-base text-brand-text-secondary font-medium">
                      {dir === 'rtl' ? stat.labelAr : stat.labelEn}
                    </div>
                  </motion.div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
