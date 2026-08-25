import HeroSection from '@/components/hero-section-7'
import VideoSection from '@/components/video-section'
import SelfHostCTA from '@/components/self-host-cta'
import FeaturesSix from '@/components/features-6'
import FeaturesSeven from '@/components/features-7'
import Content from '@/components/content-3'
import Stats from '@/components/stats-1'
import Pricing from '@/components/pricing-1'
import FAQs from '@/components/faqs-1'
import CallToAction from '@/components/call-to-action-1'
import Footer from '@/components/footer-1'

export default function DuskLandingPage() {
    return (
        <>
            <HeroSection />
            <VideoSection />
            <SelfHostCTA />
            <Content />
            <FeaturesSix />
            <Stats />
            <FeaturesSeven />
            <Pricing />
            <FAQs />
            <CallToAction />
            <Footer />
        </>
    )
}
