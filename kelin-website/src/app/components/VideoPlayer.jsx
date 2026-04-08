import { useState, useRef } from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ src, poster, className }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Use separate refs for the preview and the lightbox videos
    const previewRef = useRef(null);
    const lightboxRef = useRef(null);

    const toggleMute = (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up and opening the lightbox
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            {/* Small Preview Video Container */}
            <div className={`${styles.videoContainer} ${className}`} onClick={toggleFullscreen}>
                <video
                    ref={previewRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className={styles.videoPreview}
                />

                {/* Hover Overlay Controls */}
                <div className={styles.overlay}>
                    <div className={styles.controls}>
                        <div className={styles.leftControls}>
                            <button onClick={toggleMute} className={styles.iconButton} aria-label="Toggle Mute">
                                {isMuted ? (
                                    /* Muted SVG Icon */
                                    <svg viewBox="0 0 24 24">
                                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                    </svg>
                                ) : (
                                    /* Unmuted SVG Icon */
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className={styles.rightControls}>
                            <button className={styles.iconButton} aria-label="Expand Video">
                                {/* Expand SVG Icon */}
                                <svg viewBox="0 0 24 24">
                                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox / Advanced Mode (Moved OUTSIDE the container to prevent CSS bugs) */}
            {isFullscreen && (
                <div className={styles.lightbox} onClick={toggleFullscreen}>
                    {/* onClick on lightboxContent stops propagation so clicking the video doesn't close the modal */}
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button onClick={toggleFullscreen} className={styles.closeButton} aria-label="Close">
                            {/* Close SVG Icon */}
                            <svg viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                        </button>
                        <div className={styles.videoLightbox}>
                            <video
                                ref={lightboxRef}
                                src={src}
                                poster={poster}
                                autoPlay
                                controls
                                loop
                                muted={isMuted}
                                playsInline
                                className={styles.fullVideo}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoPlayer;