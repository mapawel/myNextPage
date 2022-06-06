import { useState } from 'react';

export const useImageModal = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const openImage = (url) => {
    setImageUrl(url)
  }

  const closeImage = () => {
    setImageUrl(null)
  }

  return {
    openImage,
    closeImage,
    isModalOpen: imageUrl,
    imageUrl: imageUrl,
  }
}