import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, LucideIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/i18n/lang";
import { COMPANY_INFO } from "@/lib/constants";

interface ContactChannel {
  icon: LucideIcon;
  title: string;
  info: string;
  info2?: string;
  action: string;
  action2?: string;
  description: string;
}

export function ContactChannels() {
  const { t } = useTranslation();
  const { dir } = useLanguage();

  const contactInfo: ContactChannel[] = [
    {
      icon: Phone,
      title: dir === 'rtl' ? 'الهاتف' : 'Phone',
      info: COMPANY_INFO.phone,
      info2: COMPANY_INFO.phoneSecondary,
      action: `tel:${COMPANY_INFO.phoneRaw}`,
      action2: `tel:${COMPANY_INFO.phoneSecondaryRaw}`,
      description: dir === 'rtl' ? 'متاح للتواصل المباشر' : 'Available for direct contact',
    },
    {
      icon: Mail,
      title: dir === 'rtl' ? 'البريد الإلكتروني' : 'Email',
      info: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`,
      description: dir === 'rtl' ? 'نرد خلال 24 ساعة' : 'Response within 24 hours',
    },
    {
      icon: MessageCircle,
      title: dir === 'rtl' ? 'واتساب' : 'WhatsApp',
      info: COMPANY_INFO.phone,
      action: COMPANY_INFO.socialMedia.whatsapp,
      description: dir === 'rtl' ? 'تواصل فوري' : 'Instant communication',
    },
    {
      icon: MapPin,
      title: dir === 'rtl' ? 'العنوان' : 'Address',
      info: dir === 'rtl' ? COMPANY_INFO.address : COMPANY_INFO.addressEn,
      action: "#",
      description: dir === 'rtl' ? 'مكتبنا الرئيسي' : 'Our main office',
    },
  ];

  return (
    <Section size="xl" background="white">
      <Container size="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="text-center p-8" hover={true}>
              <CardContent className="p-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-4xl mb-6 flex justify-center"
                >
                  <info.icon size={48} />
                </motion.div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {info.title}
                </h3>
                <a
                  href={info.action}
                  className="text-primary font-semibold block mb-2 hover:text-primary-dark transition-colors text-lg"
                  data-testid={`link-${info.title.toLowerCase()}`}
                >
                  {info.info}
                </a>
                {info.info2 && info.action2 && (
                  <a
                    href={info.action2}
                    className="text-primary font-semibold block mb-3 hover:text-primary-dark transition-colors text-lg"
                    data-testid={`link-${info.title.toLowerCase()}-2`}
                  >
                    {info.info2}
                  </a>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}