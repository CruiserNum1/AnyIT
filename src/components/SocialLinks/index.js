import React, { Component } from 'react';
import styles from './styles.scss';

export default class extends Component {
    render() {
        return (
            <div className={ styles.main }>
                <div className={styles.wrapper}>
                    <img src={require('@images/telegram.svg').default} alt={'telegram'} />
                    <img src={require('@images/whatsapp.svg').default} alt={'whatsapp'} />
                    <img src={require('@images/instagram.svg').default} alt={'instagram'} />
                </div>
            </div>
        );
    }
}
