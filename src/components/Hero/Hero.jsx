import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <h1>Convert text to HTML</h1>
            <p>
                A simple yet powerful tool designed to save you time by
                effortlessly converting plain text into boilerplate HTML.
            </p>
        </header>
    );
};

export default Hero;
