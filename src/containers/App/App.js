import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import styles from './App.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={styles.wrapper}>

            <header className={classNames(styles.box, styles.header)}>Header</header>
            <nav className={classNames(styles.box, styles.sidebar)}>
                <li>
                    Dashboard
                </li>
                <p>
                    Workers
                </p>
                <li>
                    Zones
                </li>
                <li>
                    Assign Helmets
                </li>
                <p>
                    Reports
                </p>
                <li>
                    Manage Sites
                </li>
                <li>
                    Settings
                </li>

            </nav>
            <div className={classNames(styles.box, styles.sidebar2)}>Sidebar 2</div>
            <div className={classNames(styles.box, styles.content)}>Content
                <section>
                    <image>Image</image>
                    <blockquote>Name</blockquote>
                    <span>Designation</span>
                </section>
                <section>
                    <dl>
                        <dt>Name</dt>
                        <dd>Value</dd>
                        <dd>Value</dd>
                        <dt>Name</dt>
                        <dd>Value</dd>
                        <dt>Name</dt>
                        <dd>Value</dd>
                    </dl>
                    <div className={styles.block}>block</div>
                    <div className={styles.inline}>inline ddddd</div>
                    <div className={styles.inlineBlock}>inline block dddd</div>

                    <h2>Title</h2>
                    <p>Paragraph example.</p>
                    <p>Paragraph example.</p>
                    <p>Paragraph example.</p>

                    <div className="box">
                        <p>Paragraph example.</p>
                        <p>Paragraph example.</p>
                    </div>
                </section>
                <section>

                </section>
            </div>
            <footer className={classNames(styles.box, styles.footer)}>Footer</footer>
        </div>;
    }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(App);
