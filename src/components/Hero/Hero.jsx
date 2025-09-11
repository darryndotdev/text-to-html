import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <h1>Convert text to HTML</h1>
            <p>
                A powerful tool designed to save you time and reduce errors by
                transforming plain text into clean and structured HTML.
            </p>
        </header>
    );
};

export default Hero;
