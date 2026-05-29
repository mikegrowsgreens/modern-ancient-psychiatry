import { EMERGENCY_DISCLAIMER } from "@/content/shared";

export default function EmergencyBanner() {
  return (
    <div className="bg-surface/80 border-b border-gold/10 px-6 py-5">
      <p className="text-sm md:text-body-sm text-muted/90 text-center max-w-3xl mx-auto leading-relaxed">
        {EMERGENCY_DISCLAIMER}
      </p>
    </div>
  );
}
