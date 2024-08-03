import styles from './Menu.module.css';
import Search from '../../components/Search/Search';
import Heading from './../../components/Heading/Heading';

const Menu = () => {
    return (
        <div className={styles["head"]}>
            <Heading>Меню</Heading>
            <Search placeholder='Введите название блюда' />

        </div>
    );
};

export default Menu;
