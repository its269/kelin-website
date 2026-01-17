'use client';

import styles from './TextSection.module.css';

const TextSection = ({ label, title, description, layout = "normal" }) => {
    if (layout === 'reverse') {
        return (
            <div className={`${styles.textSectionContainer} ${styles.reverseLayout}`}>
                <div className={styles.textContainer}>
                    <div className={styles.textContent}>
                        {label && <div className={styles.label}>{label}</div>}
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.textContent}>
                        {description && <p className={styles.description}>{description}</p>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.textSectionContainer}>
            <div className={styles.textContainer}>
                <div className={styles.textContent}>
                    {label && <div className={styles.label}>{label}</div>}
                    <h2 className={styles.title}>{title}</h2>
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            </div>
        </div>
    );
};

export default TextSection;