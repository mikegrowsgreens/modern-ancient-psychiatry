import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-surface border border-gold/10 rounded-sm p-8 hover:border-gold/25 transition-colors">
      <h3 className="font-heading text-subheading text-gold mb-3">
        {service.name}
      </h3>
      {(service.price || service.duration) && (
        <p className="text-body-sm text-muted mb-4">
          {service.price}
          {service.duration && (
            <span className="text-muted/60"> &middot; {service.duration}</span>
          )}
        </p>
      )}
      <p className="text-body-sm text-cream/80 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
