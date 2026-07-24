/**
 * Pricing configuration
 *
 * Single source of truth for the pricing table rendered by
 * `@components/pricing/pricing-table.astro`. Everything the table shows -
 * billing periods, tax handling, plans, prices and feature rows - is defined
 * here, so you rarely have to touch the component itself.
 *
 * The data is hard-coded on purpose (it is a boilerplate demo). To feed prices
 * from a real provider instead - e.g. Paddle or Stripe - replace the numbers in
 * `plans[].price` with values fetched from your backend/API and keep the same
 * shape. Do this in a server context (never expose secret API keys in the
 * frontend). The component only ever receives already-resolved numbers.
 *
 * Labels are translatable: every `*Key` field is looked up via the i18n helper
 * (`t('pricing-content.<key>')`). Plain string fields are shown verbatim.
 */

/** Billing periods the table can offer. */
export type PricingPeriod = 'monthly' | 'annually' | 'lifetime';

/**
 * Value of a single feature for a given plan.
 * - `true`  → included (check icon)
 * - `false` → not included (crossed-out icon, muted)
 * - string  → included with a highlighted detail (e.g. "5 GB", "Up to 3")
 */
export type PricingFeatureValue = boolean | string;

/** A row in the shared feature list, compared across all plans. */
export interface PricingFeature {
  /** Stable id, also used as the key in `PricingPlan.features`. */
  id: string;
  /** i18n key resolved via `t('pricing-content.<labelKey>')`. */
  labelKey: string;
}

/** A single price value per plan/period. */
export type PricingAmount =
  /** A concrete amount in the configured currency (before/after tax, see config). */
  | number
  /** Render a "contact us" style label instead of a number (e.g. Enterprise). */
  | 'custom'
  /** Not offered for this period - the card is dimmed and its CTA hidden. */
  | null;

/** A single pricing plan / card. */
export interface PricingPlan {
  /** Stable id (used for analytics hooks and DOM wiring). */
  id: string;
  /** i18n key for the plan name, e.g. `t('pricing-content.plan-pro-name')`. */
  nameKey: string;
  /** i18n key for the short tagline under the name. */
  taglineKey: string;
  /** Price per billing period. Omit a period to hide the plan for it. */
  price: Partial<Record<PricingPeriod, PricingAmount>>;
  /** Feature values keyed by `PricingFeature.id`. Missing keys default to `false`. */
  features: Record<string, PricingFeatureValue>;
  /** Highlight this plan visually (border + badge). */
  highlighted?: boolean;
  /** i18n key for an optional badge shown on top (e.g. "Most popular"). */
  badgeKey?: string;
  /** Call-to-action. Falls back to `PricingConfig.defaultCta` when omitted. */
  cta?: {
    /** i18n key for the button label. */
    labelKey: string;
    /** Target URL (kept locale-agnostic; wire to your checkout/signup). */
    href: string;
  };
}

/** Full pricing table configuration. */
export interface PricingConfig {
  /** Currency presentation. Amounts in `plans` are expressed in this currency. */
  currency: {
    /** ISO 4217 code, mainly for reference / structured data. */
    code: string;
    /** Symbol shown next to the amount, e.g. "$", "€", "£". */
    symbol: string;
    /** Where the symbol sits relative to the number. */
    position: 'before' | 'after';
    /** Number of decimals to display (0 hides the cents part entirely). */
    decimals: number;
  };
  /** Tax handling for the incl./excl. taxes toggle. */
  tax: {
    /** Tax rate in percent, e.g. `19` for 19% VAT. */
    ratePercent: number;
    /** `true` if the amounts in `plans` already include tax (gross prices). */
    pricesIncludeTax: boolean;
    /** Which side of the toggle is active on first load. */
    defaultShowWithTax: boolean;
    /** Set `false` to hide the incl./excl. taxes toggle completely. */
    showToggle: boolean;
  };
  /**
   * Billing periods to offer, in display order. Remove entries to hide them.
   * The first entry is selected on first load.
   */
  periods: PricingPeriod[];
  /**
   * When `true`, an annual price is displayed as its per-month equivalent
   * (amount ÷ 12) with a "billed annually" note, and the annual toggle shows an
   * auto-computed savings badge versus the monthly price.
   */
  annualShowsMonthlyEquivalent: boolean;
  /** Default CTA used for plans that don't define their own. */
  defaultCta: {
    labelKey: string;
    href: string;
  };
  /** Ordered, shared feature list compared across every plan. */
  features: PricingFeature[];
  /** The plans / cards, in display order. */
  plans: PricingPlan[];
}

/**
 * Live configuration used by the pricing page.
 *
 * NOTE: These prices are fictional demo data for the boilerplate. Replace them
 * with your own - or resolve them from Paddle/Stripe on the server - before
 * going live.
 */
export const pricingConfig: PricingConfig = {
  currency: {
    code: 'USD',
    symbol: '$',
    position: 'before',
    decimals: 2,
  },
  tax: {
    ratePercent: 19,
    pricesIncludeTax: false,
    defaultShowWithTax: false,
    showToggle: true,
  },
  periods: ['monthly', 'annually', 'lifetime'],
  annualShowsMonthlyEquivalent: true,
  defaultCta: {
    labelKey: 'cta-choose',
    href: '/signup',
  },
  features: [
    { id: 'projects', labelKey: 'feature-projects' },
    { id: 'team', labelKey: 'feature-team' },
    { id: 'storage', labelKey: 'feature-storage' },
    { id: 'analytics', labelKey: 'feature-analytics' },
    { id: 'custom-domain', labelKey: 'feature-custom-domain' },
    { id: 'priority-support', labelKey: 'feature-priority-support' },
    { id: 'sla', labelKey: 'feature-sla' },
    { id: 'white-label', labelKey: 'feature-white-label' },
  ],
  plans: [
    {
      id: 'starter',
      nameKey: 'plan-starter-name',
      taglineKey: 'plan-starter-tagline',
      price: {
        monthly: 0,
        annually: 0,
        lifetime: 0,
      },
      features: {
        projects: '3',
        team: '1',
        storage: '2 GB',
        analytics: true,
        'custom-domain': false,
        'priority-support': false,
        sla: false,
        'white-label': false,
      },
      cta: {
        labelKey: 'cta-start-free',
        href: '/signup',
      },
    },
    {
      id: 'pro',
      nameKey: 'plan-pro-name',
      taglineKey: 'plan-pro-tagline',
      highlighted: true,
      badgeKey: 'badge-popular',
      price: {
        monthly: 12,
        annually: 108,
        lifetime: 249,
      },
      features: {
        projects: 'Unlimited',
        team: '10',
        storage: '100 GB',
        analytics: true,
        'custom-domain': true,
        'priority-support': true,
        sla: false,
        'white-label': false,
      },
    },
    {
      id: 'business',
      nameKey: 'plan-business-name',
      taglineKey: 'plan-business-tagline',
      price: {
        monthly: 29,
        annually: 276,
        lifetime: 599,
      },
      features: {
        projects: 'Unlimited',
        team: 'Unlimited',
        storage: '1 TB',
        analytics: true,
        'custom-domain': true,
        'priority-support': true,
        sla: true,
        'white-label': true,
      },
    },
    {
      id: 'enterprise',
      nameKey: 'plan-enterprise-name',
      taglineKey: 'plan-enterprise-tagline',
      // Enterprise is only offered on an annual basis - the monthly and
      // lifetime periods are set to `null` so the card is dimmed, its CTA
      // hidden, and a "only available for ..." note is shown instead.
      price: {
        monthly: null,
        annually: 'custom',
        lifetime: null,
      },
      features: {
        projects: 'Unlimited',
        team: 'Unlimited',
        storage: 'Custom',
        analytics: true,
        'custom-domain': true,
        'priority-support': true,
        sla: true,
        'white-label': true,
      },
      cta: {
        labelKey: 'cta-contact',
        href: '/contact',
      },
    },
  ],
};
