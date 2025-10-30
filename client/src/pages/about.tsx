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
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-primary/25 rounded-2xl shadow-2xl p-20 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary"
                >
                  <Users size={120} />
                </motion.div>
              </motion.div>
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