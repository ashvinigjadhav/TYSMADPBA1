import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default function EnhancedGallery({photos}) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)

  const openLightbox = (event, { index }) => {
    setCurrentImage(index)
    setViewerOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerOpen(false)
  }

  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(p => ({ source: p.src, caption: p.title }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}