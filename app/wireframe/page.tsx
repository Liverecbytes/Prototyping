import WireframeHeader from "@/components/wireframe/WireframeHeader";
import WireframeHeroSection from "@/components/wireframe/WireframeHeroSection";
import WireframeJobRecommendations from "@/components/wireframe/WireframeJobRecommendations";
import WireframeWhyChooseUs from "@/components/wireframe/WireframeWhyChooseUs";
import WireframeConsolidatedCTA from "@/components/wireframe/WireframeConsolidatedCTA";
import WireframeEmployerCTA from "@/components/wireframe/WireframeEmployerCTA";
import WireframeTopCompanies from "@/components/wireframe/WireframeTopCompanies";
import WireframeSuccessStories from "@/components/wireframe/WireframeSuccessStories";
import WireframeBlogSection from "@/components/wireframe/WireframeBlogSection";
import WireframeStatsSection from "@/components/wireframe/WireframeStatsSection";
import WireframeHelpCenter from "@/components/wireframe/WireframeHelpCenter";
import WireframeFooter from "@/components/wireframe/WireframeFooter";

export default function WireframePage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeHeader />
      <main>
        <WireframeHeroSection />
        <WireframeJobRecommendations />
        <WireframeWhyChooseUs />
        <WireframeConsolidatedCTA />
        <WireframeEmployerCTA />
        <WireframeTopCompanies />
        <WireframeSuccessStories />
        <WireframeBlogSection />
        <WireframeStatsSection />
        <WireframeHelpCenter />
      </main>
      <WireframeFooter />
    </div>
  );
}

