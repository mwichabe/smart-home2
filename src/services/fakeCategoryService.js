export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Smart Doorlocks" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Smart Speakers" },
  { _id: "5b21ca3eeb7f6fbccd471819", name: "Smart Lightings" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Smart Thermostats" }
]

export function getCategories() {
  return categories.filter(c => c)
}
