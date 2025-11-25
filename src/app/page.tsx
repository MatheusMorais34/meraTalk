import AnalyticsSection from "@/components/sections/analytics";
import AutomationSection from "@/components/sections/automation";
import FeaturesSection from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import PricingSection from "@/components/sections/pricing";
import WebhooksSection from "@/components/sections/webhooks";
import { AppFooter } from "@/components/layout/footer";
import { AppHeader } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AutomationSection />
        <AnalyticsSection />
        <WebhooksSection />
        <PricingSection />
      </main>
      <AppFooter />
    </div>
  );
}
