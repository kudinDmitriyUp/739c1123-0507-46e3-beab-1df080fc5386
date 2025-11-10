"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, CheckCircle, DollarSign, HelpCircle, MessageCircle, Rocket, Shield, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "https://app.saasflow.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Scale Your Business with Smart SaaS Solutions"
          description="Transform your workflow with powerful automation, real-time analytics, and seamless team collaboration. Everything you need to grow faster."
          tag="Unleash the Power"
          tagIcon={Rocket}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.saasflow.com/signup"
            },
            {
              text: "Watch Demo",
              href: "https://demo.saasflow.com"
            }
          ]}
          imageSrc="https://pixabay.com/get/g457882316f04855a1b69d2febddf90e3dd5c24286e1c4b6afe233214f1746b23244f0fda3f9a344cf1ef484d4c405e2d32a017de9e9b567e5e438418b2059a0d_1280.jpg"
          imageAlt="SaaS dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Built for Modern Teams"
          description={[
            "We understand the challenges of scaling a business in today's fast-paced digital world. That's why we've created a comprehensive platform that grows with you.",
            "From startups to enterprise, our solutions adapt to your needs while maintaining the simplicity and power that teams love."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Everything You Need to Succeed"
          description="Discover the powerful features that make our platform the choice of thousands of growing businesses"
          tag="Features"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Team Collaboration",
              description: "Real-time collaboration tools that keep your team aligned and productive. Share files, communicate seamlessly, and track progress together.",
              icon: Users
            },
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with comprehensive dashboards, custom reports, and predictive analytics.",
              icon: BarChart3
            },
            {
              title: "Enterprise Security",
              description: "Bank-level security with end-to-end encryption, SSO integration, and compliance with industry standards like SOC 2 and GDPR.",
              icon: Shield
            },
            {
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline your processes with powerful workflow builders and API integrations.",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team size and needs. No hidden fees, cancel anytime."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Perfect for Teams",
              badgeIcon: Users,
              price: "$29/month",
              subtitle: "Everything you need to get started",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/signup"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Up to 10 team members",
                "5GB storage per user",
                "Basic analytics dashboard",
                "Email support",
                "Core integrations"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/month",
              subtitle: "Advanced features for growing businesses",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/signup"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited team members",
                "50GB storage per user",
                "Advanced analytics & reports",
                "Priority support",
                "All integrations",
                "Custom workflows",
                "API access"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Thousands"
          description="Join the growing community of businesses that have transformed their operations with our platform"
          tag="Growth"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Active Users",
              description: "Professionals using our platform daily",
              icon: Users
            },
            {
              id: "2",
              value: "99.9%",
              title: "Uptime",
              description: "Reliable service you can count on",
              icon: Shield
            },
            {
              id: "3",
              value: "2M+",
              title: "Tasks Completed",
              description: "Workflows automated and optimized",
              icon: CheckCircle
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Don't just take our word for it. Here's what real customers are saying about their experience."
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "VP of Operations at TechCorp",
              testimonial: "SaasFlow has completely transformed how our team collaborates. The automation features alone have saved us 20+ hours per week.",
              imageSrc: "https://pixabay.com/get/gba6206edbe62da416768af69165c472d6cb8a75ac2ecdbba17f2289def8cabdb3e77c6efb2c41b64eb23add02a74f7e7dfb655756b10aea7443b6d34fd3649df_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Founder & CEO at StartupXYZ",
              testimonial: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions with confidence.",
              imageSrc: "https://pixabay.com/get/g9d70510f8cf908e90fe4bd674e3cf67f78dfc41b46ee4b016c2643fb3bc3253a059c2405d6e97f9996e6e74101d8fd557d107ea251ec2f29e61f165fd33e5939_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Product Manager at InnovateLab",
              testimonial: "Implementation was seamless and the support team is exceptional. Our productivity has increased by 40% since switching.",
              imageSrc: "https://pixabay.com/get/g7bf9d4f94ac860a371a558944f185e66135d911002d3eba96caedc8017084a7488704c9799a8d355fef9b7ea9eb8e3a0f5bfe5a6cd1a3f0f5efbd994a5a57927_1280.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "CTO at GrowthCo",
              testimonial: "The security features and compliance tools give us peace of mind. Perfect for enterprise-level requirements.",
              imageSrc: "https://pixabay.com/get/g8ace510d07b1630a8a56cd17d384eb7dcbc4dc0893dfe94072bc40f3cfb1fd3b95b1bba2dc97e718d77bf9c06898b43680ae2f76b5dcbeb3c4cfac74d2cbf8f5_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about our platform, pricing, and support"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          mediaPosition="left"
          imageSrc="https://pixabay.com/get/g5e1925ad9c40306fa9ffd9b1c37e4c28c8482fa0cc9bfb9dc5c8d15482e7d25fb0879931bf9aaf538ac5b49a3136ae9620963c1f26276643d27f439e7c7bfc0b_1280.jpg"
          imageAlt="Customer support representative"
          faqs={[
            {
              id: "1",
              title: "How long does it take to get started?",
              content: "You can be up and running in less than 5 minutes. Our onboarding process is designed to get your team productive immediately with guided setup and pre-built templates."
            },
            {
              id: "2",
              title: "Can I cancel my subscription anytime?",
              content: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period."
            },
            {
              id: "3",
              title: "Do you offer custom integrations?",
              content: "Absolutely! Our Professional and Enterprise plans include custom integrations. We can connect to virtually any system through our robust API or build custom connectors for your specific needs."
            },
            {
              id: "4",
              title: "What kind of support do you provide?",
              content: "We offer email support for all plans, priority support for Professional users, and 24/7 dedicated support for Enterprise customers. Plus, we have extensive documentation and video tutorials."
            },
            {
              id: "5",
              title: "Is my data secure?",
              content: "Security is our top priority. We use bank-level encryption, regular security audits, and comply with SOC 2, GDPR, and other industry standards. Your data is always protected."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Workflow?"
          description="Join thousands of teams already using SaasFlow to streamline their operations and boost productivity. Start your free trial today."
          tagIcon={Rocket}
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required for trial."
          mediaPosition="right"
          imageSrc="https://pixabay.com/get/g457882316f04855a1b69d2febddf90e3dd5c24286e1c4b6afe233214f1746b23244f0fda3f9a344cf1ef484d4c405e2d32a017de9e9b567e5e438418b2059a0d_1280.jpg"
          imageAlt="Dashboard preview"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SaasFlow"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Support", href: "https://help.saasflow.com" },
                { label: "Documentation", href: "https://docs.saasflow.com" },
                { label: "API", href: "https://api.saasflow.com" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "https://saasflow.com/privacy" },
                { label: "Terms of Service", href: "https://saasflow.com/terms" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}