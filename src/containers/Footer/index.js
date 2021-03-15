import React, { Component } from 'react';
import styles from './styles.scss';

export default class extends Component {
    render() {
        return (
            <footer className={ styles.footer }>
                <div className={styles.wrapper}>
                    <div></div>
                    <div className={ styles.steps }>
                        <h4>STEP 1</h4>
                        <h3>Разработка</h3>
                    </div>
                    <div className={ styles.steps }>
                        <h4>STEP 2</h4>
                        <h3>Внедрение</h3>
                    </div>
                    <div className={ styles.steps }>
                        <h4>STEP 3</h4>
                        <h3>Обновление & Доработка</h3>
                    </div>
                    <div className={ styles.steps }>
                        <h4>STEP 4</h4>
                        <h3>Cопровождение програмных решений любой сложности</h3>
                    </div>
                    <div></div>
                </div>
            </footer>
        );
    }
}
