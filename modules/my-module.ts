import { defineNuxtModule, getLayerDirectories } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_options, nuxt) {
    const layerDirs = getLayerDirectories()

    for (const [index, layer] of layerDirs.entries()) {
      console.log(`Layer ${index}:`)
      console.log(`  Root: ${layer.root}`)
      // ... other directories
    }
  },
})
