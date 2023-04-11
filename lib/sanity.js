import createImageUrlBuilder from '@sanity/image-url'
import { definePreview } from 'next-sanity/preview'
import { config } from './config'

export const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source) =>
  imageBuilder.image(source)

export const usePreview = definePreview({
  projectId: config.projectId,
  dataset: config.dataset,
})