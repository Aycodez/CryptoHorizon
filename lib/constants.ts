export const UserDashboardOptions = [
  {
    option: "Dashboard",
    link: "/dashboard",
  },
  {
    option: "Invest",
    link: "/dashboard/invest",
  },
  {
    option: "Investments",

    link: "/dashboard/investments",
  },
  {
    option: "Trade",

    link: "/dashboard/trade",
  },
  {
    option: "Withdrawal",

    link: "/dashboard/withdrawal",
  },
  {
    option: "Withdrawal History",
    link: "/dashboard/withdrawal-history",
  },
  {
    option: "Referral",
    link: "/dashboard/referral",
  },
] as const;
export const NavItems = [
  "Dashboard",
  "Features",
  "How It Works",
  "Investment plans",
  "Testimonials",
  "Contact",
] as const;

export const HowItWorkItems = [
  "Create an account",
  "Choose your preferred plan",
  "Make Profits",
] as const;
export const WebsiteName = "Crypto Horizon Trading" as string;

export const FeatureItems = [
  {
    feature: "Secure Wallets",
    subtext: "Protecting your assets with military-grade security",
  },
  {
    feature: "Trading Platform",
    subtext: "Stay ahead with live market updates",
  },
  {
    feature: "Investment Plans",
    subtext: "Grow with wealt with fixed-term investments",
  },
  {
    feature: "Real-Time Market Data",
    subtext: "Stay ahead with live market updates",
  },
  {
    feature: "Referral Program",
    subtext: "Earn rewards for referring your friends and family",
  },
  {
    feature: "Customer Support",
    subtext: "Protecting your assets with military-grade security",
  },
];

export const CardItems = [
  {
    plan: "Starter",
    interest: 10,
    min: "100",
    max: "1,000",
    features: [
      "3-month lock-in period",
      "Weekly withdrawals",
      "Basic customer support",
    ],
  },
  {
    plan: "Premium",
    interest: 25,
    min: "1,000",
    max: "10,000",
    features: [
      "6-month lock-in period",
      "Daily withdrawals",
      "Priority customer support",
      "Personalized investment advice",
    ],
  },
  {
    plan: "VIP",
    interest: 50,
    min: "10,000",
    max: "50,000",
    features: [
      "12-months lock-in period",
      "Unlimited withdrawals",
      "Dedicated account manager",
      "Customized investment strategies",
      "Quarterly market analysis reports",
    ],
  },
];

export const FAQItems = [
  "Where can I deposit/withdraw",
  "Where can I deposit/withdraw",
  "Where can I deposit/withdraw",
  "Where can I deposit/withdraw",
  "Where can I deposit/withdraw",
] as const;

export const TestimonialsItems = [
  { text: "ashlldjkljljlljile", img: "/user-1.png", name: "Victor" },
  { text: "ashlldjkljljlljile", img: "/user-2.png", name: "Val" },
  { text: "ashlldjkljljlljile", img: "/user-3.png", name: "Nate" },
  { text: "ashlldjkljljlljile", img: "/user-1.png", name: "Victor" },
  { text: "ashlldjkljljlljile", img: "/user-2.png", name: "Val" },
  { text: "ashlldjkljljlljile", img: "/user-3.png", name: "Nate" },
];

export const balance = ["Bitcoin", "Tron", "USDT TRC20", "BNB", "LiteCoin"];

export const cryptos = [
  { crypto: "Bitcoin", walletAddress: "btclskjk23l2lkl3lkjl4kl2sl" },
  { crypto: "Tron", walletAddress: "tronskjk23l2lkl3lkjl4kl2sl" },
  { crypto: "USDT TRC20", walletAddress: "usdtkjk23l2lkl3lkjl4kl2sl" },
  { crypto: "LiteCoin", walletAddress: "litejk23l2lkl3lkjl4kl2sl" },
  { crypto: "BNB", walletAddress: "bnbkjk23l2lkl3lkjl4kl2sl" },
];

export const AdminDashboardOptions = [
  {
    option: "Dashboard",
    link: "/admin",
  },
  {
    option: "Users Management",
    link: "/admin/users",
  },
  {
    option: "Deposits Request",

    link: "/admin/deposits",
  },
  {
    option: "Withdrawal Request",

    link: "/admin/withdrawal",
  },
  {
    option: "Send Mail",

    link: "/admin/mail/null",
  },
] as const;

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
