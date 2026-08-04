import { featureRows } from "@/data/data";
import FeatureRow from "./FeaturesRow";

export default function FeatureRowsSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-12 max-w-8xl mx-auto">
      {featureRows.map((row, i) => (
        <FeatureRow key={row.id} row={row} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}