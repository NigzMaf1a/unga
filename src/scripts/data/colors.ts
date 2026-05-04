export const techColors = {
  cyan: ["#155e75", "#0e7490", "#0891b2"],        // deep cyan / ocean tech
  teal: ["#134e4a", "#115e59", "#0f766e", "#0d9488"], // dark sea green
  emerald: ["#064e3b", "#065f46", "#047857", "#059669"], // forest / system green
  sky: ["#0c4a6e", "#075985", "#0369a1", "#0284c7"], // deep sky / data blue
  blue: ["#1e3a8a", "#1d4ed8", "#2563eb"], // strong system blue
  indigo: ["#1e1b4b", "#312e81", "#4338ca"] // dark UI violet-blue
};

export const AppColors = {
  primary: techColors.cyan[1], // main tech color
  secondary: techColors.teal[2], // complementary tech color
  accent: techColors.emerald[3], // highlight color for UI elements
}