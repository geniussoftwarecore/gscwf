import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Users, User, Palette, Smartphone, TrendingUp, MessageCircle, Eye, Heart, Target, Lightbulb, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/i18n/lang";
import logoGSC from "@assets/logo_1761847685762.png";

export default function About() {
  const { t } = useTranslation();
  const { lang, dir } = useLanguage();
  const isRTL = dir === 'rtl';
  
  const workProcess = [
    {
      title: "الاستماع والفهم",
      description: "نبدأ بفهم عميق لاحتياجاتك وأهدافك، ونستمع لرؤيتك بعناية لضمان تقديم الحل الأمثل",
      icon: Users,
    },
    {
      title: "التخطيط الاستراتيجي",
      description: "نضع خطة عمل مفصلة ومدروسة تضمن تحقيق أهدافك ضمن الميزانية والوقت المحددين",
      icon: Target,
    },
    {
      title: "التصميم الإبداعي",
      description: "نصمم حلولاً مبتكرة وجذابة تجمع بين الجمالية والوظائف العملية لتجربة مستخدم استثنائية",
      icon: Palette,
    },
    {
      title: "التطوير التقني",
      description: "نستخدم أحدث التقنيات والأدوات لتطوير حلول قوية وموثوقة تلبي أعلى معايير الجودة",
      icon: Zap,
    },
    {
      title: "الاختبار والجودة",
      description: "نختبر كل جزء من المشروع بدقة لضمان الأداء الأمثل وخلوه من الأخطاء",
      icon: Shield,
    },
    {
      title: "التسليم والدعم",
      description: "نسلم المشروع في الوقت المحدد ونوفر دعماً فنياً مستمراً لضمان نجاح واستمرارية الحل",
      icon: Heart,
    },
  ];

  const timeline = [
    {
      year: "01",
      title: "الاستماع للعميل",
      description: "نبدأ كل مشروع بالاستماع الجيد لاحتياجات عملائنا وفهم رؤيتهم بعمق لنضمن تقديم حلول تتجاوز توقعاتهم",
    },
    {
      year: "02",
      title: "الشفافية الكاملة",
      description: "نحافظ على تواصل مستمر وشفاف مع عملائنا، نُطلعهم على كل تفصيل ونضمن لهم المشاركة الكاملة في جميع مراحل المشروع",
    },
    {
      year: "03",
      title: "الجودة أولاً",
      description: "لا نقبل إلا بالأفضل، نُخضع كل عمل لمعايير جودة صارمة ونختبر كل جزئية لضمان التميز والإتقان",
    },
    {
      year: "04",
      title: "الدعم الدائم",
      description: "علاقتنا مع عملائنا لا تنتهي عند التسليم، نوفر دعماً فنياً متواصلاً ونظل شركاء في النجاح على المدى الطويل",
    },
  ];

  return (
    <>
      <PageHeader 
        title={dir === 'rtl' ? 'معلومات عنا' : 'About Us'}
        subtitle={dir === 'rtl' 
          ? 'نحن شركة رائدة في مجال تطوير البرمجيات، نقدم حلولاً تقنية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي'
          : 'We are a leading software development company providing innovative technical solutions to help businesses grow and thrive in the digital age'
        }
        background="light"
      />

      <Section size="xl" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <h2 className={`text-4xl lg:text-5xl font-bold text-secondary mb-6 ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyTitle')}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyParagraph1').replace('{companyName}', COMPANY_INFO.name)}
              </p>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${dir ? 'text-right' : 'text-left'}`}>
                {t('about.storyParagraph2')}
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-base font-semibold"
                >
                  <i className="fas fa-handshake mr-2"></i>
                  {t('about.partnership')}
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="flex flex-col items-center justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    rotateZ: 2,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
                  
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 60px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-full p-10 shadow-2xl"
                  >
                    <img 
                      src={logoGSC} 
                      alt="Genius Software Core Logo" 
                      className="w-72 h-72 object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center space-y-4 max-w-2xl"
                >
                  <motion.h1 
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% auto",
                    }}
                  >
                    جينيس سوفت وير كور
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-2xl lg:text-3xl font-semibold text-secondary"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    Genius Software Core
                  </motion.h2>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-purple-600"
                        />
                      </span>
                    </div>
                  </div>

                  <motion.p 
                    className="text-xl lg:text-2xl font-bold text-primary leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    نبتكر الحلول… ونحقق النمو
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-gray-600 italic font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    We Innovate Solutions… We Drive Growth
                  </motion.p>

                  <motion.div
                    className="flex justify-center gap-2 pt-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section size="xl" background="light">
        <Container size="md">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              رحلتنا عبر الزمن
            </h2>
            <p className="text-xl text-gray-600">
              المحطات المهمة في تطور شركتنا
            </p>
          </AnimatedText>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6" hover={true}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="light">
        <Container size="lg">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              منهجية عملنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع نهجاً احترافياً ومنظماً في كل مشروع لضمان تقديم أفضل النتائج
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-8 text-center" hover={true}>
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                  >
                    <div className="w-20 h-20 rounded-2xl mx-auto bg-gradient-to-br from-primary/20 to-primary/40 shadow-lg flex items-center justify-center">
                      <step.icon className="text-primary" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="xl" background="gradient">
        <Container size="md" className="text-center">
          <AnimatedSection delay={0.3}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              جاهزون للعمل معك
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              دعنا نتعاون معاً لتحويل رؤيتك إلى واقع رقمي مبهر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl text-base font-semibold"
                >
                  <MessageCircle size={20} className="mr-2" />
                  ابدأ محادثة
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl text-base font-semibold"
                >
                  <Eye size={20} className="mr-2" />
                  اطلع على أعمالنا
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}