import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { SEOHead } from "@/components/SEOHead";
import {
  Hero,
  ProblemSolution,
  ServicesGrid,
  CRMShowcase,
  PortfolioPreview,
  SocialProof,
  CTAStrip
} from "@/sections/home";

export default function Home() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title={t('hero.title')}
        description={t('hero.subtitle')}
        type="website"
      />
      
      <motion.div 
        className="min-h-screen"
        dir={dir}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <Hero />
        
        {/* Problem Solution Section */}
        <ProblemSolution />
        
        {/* Services Grid */}
        <ServicesGrid />
        
        {/* CRM Showcase */}
        <CRMShowcase />
        
        {/* Portfolio Preview */}
        <PortfolioPreview />
        
        {/* Social Proof */}
        <SocialProof />
        
        {/* CTA Strip */}
        <CTAStrip />
      </motion.div>
    </>
  );
}
