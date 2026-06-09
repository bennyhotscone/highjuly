import { campaignSteps } from "@/lib/data";

export function CampaignSteps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {campaignSteps.map((item) => (
        <li
          key={item.step}
          className="hj-card p-6 transition-transform duration-200 hover:-translate-y-1"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-hj-green text-lg font-bold text-white shadow-md">
            {item.step}
          </span>
          <h3 className="mt-4 text-lg font-bold text-hj-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-hj-ink-muted">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
