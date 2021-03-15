import React, { Component } from 'react';
import styles from './styles.scss';

export default class extends Component {
    render() {
        return (
            <main className={ styles.main }>
                <div className={styles.wrapper}>
                    <div className={ styles.context }>
                        <h3 className={ styles.firstTxt }>IT STUDIO</h3>
                        <h1 className={ styles.secondTxt }>Решение IT задач любой сложности</h1>
                        <button className={ styles.btn }>Download Page</button>
                    </div>
                    <div>
                        <img src={require('@images/brand.png').default} alt={'brand'} />
                    </div>
                </div>
            </main>
        );
    }
}
