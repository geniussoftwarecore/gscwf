import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowWeWork() {
  const { dir } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      titleAr: "الاستماع والفهم",
      titleEn: "Listen & Understand",
      descriptionAr: "نستمع لاحتياجاتك ونفهم أهدافك بدقة لوضع خطة عمل مثالية",
      descriptionEn: "We listen to your needs and precisely understand your goals to create the perfect action plan",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Lightbulb,
      titleAr: "التخطيط والتصميم",
      titleEn: "Plan & Design",
      descriptionAr: "نصمم حلول مبتكرة مع واجهات عصرية تناسب رؤيتك",
      descriptionEn: "We design innovative solutions with modern interfaces that match your vision",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Code,
      titleAr: "التطوير والبناء",
      titleEn: "Develop & Build",
      descriptionAr: "نحول الأفكار إلى واقع باستخدام أحدث التقنيات وأفضل الممارسات",
      descriptionEn: "We turn ideas into reality using the latest technologies and best practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: Rocket,
      titleAr: "الإطلاق والتسليم",
      titleEn: "Launch & Deliver",
      descriptionAr: "نطلق مشروعك بنجاح ونضمن سلاسة الانتقال",
      descriptionEn: "We successfully launch your project and ensure smooth transition",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "05",
      icon: CheckCircle,
      titleAr: "الدعم والمتابعة",
      titleEn: "Support & Follow-up",
      descriptionAr: "نقدم دعم مستمر وتحديثات منتظمة لضمان نجاح مشروعك",
      descriptionEn: "We provide continuous support and regular updates to ensure your project's success",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Rocket className="w-4 h-4" />
            {dir === 'rtl' ? 'كيف نعمل' : 'How We Work'}
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4">
            {dir === 'rtl' 
              ? 'رحلتك معنا من البداية للنجاح' 
              : 'Your Journey with Us from Start to Success'}
          </h2>
          
          <p className="text-lg text-brand-text-secondary">
            {dir === 'rtl'
              ? 'نتبع منهجية واضحة ومنظمة لضمان تحقيق أهدافك بأعلى جودة'
              : 'We follow a clear and organized methodology to ensure achieving your goals with the highest quality'}
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                  data-testid={`step-card-${index}`}
                >
                  <motion.div
                    className={cn(
                      "relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20",
                      "flex flex-col items-center text-center"
                    )}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white font-bold shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 mt-6 shadow-md",
                        step.color
                      )}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-brand-text-primary">
                        {dir === 'rtl' ? step.titleAr : step.titleEn}
                      </h3>
                      
                      <p className="text-sm text-brand-text-secondary leading-relaxed">
                        {dir === 'rtl' ? step.descriptionAr : step.descriptionEn}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>

                  {/* Connection Dot for Desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16 p-6 bg-primary/5 rounded-2xl border border-primary/10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-text-primary font-medium">
            {dir === 'rtl' 
              ? '💡 نحن معك في كل خطوة لضمان تحقيق النجاح المنشود' 
              : '💡 We are with you every step of the way to ensure achieving the desired success'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
