import React, { Component } from 'react';
import styles from './styles.scss';

export default class extends Component {
    render() {
        return (
            <header className={ styles.header }>
                <div className={styles.wrapper}>
                    <div className={ styles.logo }>
                        <span>ANY</span>&nbsp;&nbsp;
                        <span className={ styles.bold }>IT</span>
                    </div>
                    <span className={ styles.text }>
                        Information Technology
                    </span>
                    <div className={ styles.contact }>
                        <span className={ styles.phone }>+7 (967) 247 69 05</span>
                        <img className={ styles.search } src={require('@images/search.svg').default} />
                    </div>
                </div>
            </header>
        );
    }
}
