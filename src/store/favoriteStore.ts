import { create } from "zustand"
import { persist } from "zustand/middleware"

type FavoriteStore = {
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((item) => item !== id)
            : [...state.favorites, id],
        })),

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorites-storage",
    },
  ),
)
