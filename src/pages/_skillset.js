/*
The skillset block is supposed to show the skills I have on a grid with logos,
and a description that appears when clicking on the grid item.
*/

import React from 'react';

import styles from './_skillset.module.css';

import Translate, {translate} from '@docusaurus/Translate';

export default function Skillset() {
    return (
        <div className={styles.skillset}>
            <div className={styles.skillsetTitle}>
                <Translate id="skillset.skillsetTitle">My skillset</Translate>
            </div>
            <div className={styles.skillsetGrid}>
                {/*Python*/}
                <div className={styles.skillsetGridItem}>
                    <div className={styles.skillsetGridItemLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="4rem" class="bi bi-python" viewBox="0 0 512 512">
                            {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                            <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
                        </svg>
                    </div>
                    <div className={styles.skillsetGridItemDescription}>
                        <Translate id="skillset.pythonDescription">Python is the programming language that I have mostly been using since ever.</Translate>
                    </div>
                </div>
                {/*NodeJS*/}
                <div className={styles.skillsetGridItem}>
                    <div className={styles.skillsetGridItemLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="4rem" class="bi bi-nodejs" viewBox="0 0 512 512">
                            {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
                            <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
                        </svg>
                    </div>
                    <div className={styles.skillsetGridItemDescription}>
                        <Translate id="skillset.nodejsDescription">A few years back I took a Full Stack course, where I mostly enjoy NodeJS backend.</Translate>
                    </div>
                </div>
                {/*Git*/}
                <div className={styles.skillsetGridItem}>
                    <div className={styles.skillsetGridItemLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="4rem" class="bi bi-git" viewBox="0 0 512 512">
                            {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license */}
                            <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/>
                        </svg>
                    </div>
                    <div className={styles.skillsetGridItemDescription}>
                        <Translate id="skillset.gitDescription">I have been using Git for a long time now, and I am comfortable with it.</Translate>
                    </div>
                </div>
                {/*VSCode*/}
                <div className={styles.skillsetGridItem}>
                    <div className={styles.skillsetGridItemLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="4rem" class="bi bi-vscode" viewBox="0 0 512 512">
                            {/*https://icons8.com/icon/oMWZpgnJupym/visual-studio-code-2019 */}
                            {/*edited with https://yqnn.github.io/svg-path-editor */}
                            <path d="M 364.125 32.0156 C 362.4999 32.0252 360.8857 32.1504 359.2812 32.3906 C 352.8634 33.3516 346.7206 36.1406 341.6875 40.6406 L 167.7031 193.2188 L 90.3281 131.6406 A 8.0008 8.0008 90 0 0 90.2656 131.5781 C 83.6892 126.4699 74.1725 127.0618 68.2812 132.9531 L 36.875 164.3594 C 30.2342 171.0002 30.494 182.1183 37.4375 188.4375 L 103.3125 249.6875 L 37.6562 307.25 A 8.0008 8.0008 90 0 0 37.6406 307.2656 C 30.5302 313.5387 30.1814 324.8064 36.8906 331.5156 L 68.2656 362.8906 C 74.0914 368.7164 83.4643 369.3743 90.0469 364.4219 L 90.0781 364.4062 L 165.7031 307.7188 L 341.5625 471.25 A 8.0008 8.0008 90 0 0 341.6719 471.3594 C 351.7377 480.3695 366.254 482.5406 378.5156 476.875 A 8.0008 8.0008 90 0 0 378.7969 476.7344 L 462.5781 433.9844 C 473.2773 428.5282 480.0469 417.4959 480.0469 405.4844 L 480.0469 99.1094 C 480.0469 86.2543 472.2982 74.5946 460.4531 69.6094 L 378.5156 35.125 C 373.918 33.0045 369.0004 31.9869 364.125 32.0156 M 366.7812 48.1719 C 368.4942 48.4109 370.1856 48.9059 371.8125 49.6562 A 8.0008 8.0008 90 0 0 372.0625 49.7656 L 454.25 84.3594 C 460.1969 86.8622 464.0469 92.6525 464.0469 99.1094 L 464.0469 405.4844 C 464.0469 411.5048 460.6773 416.9985 455.3125 419.7344 L 371.7969 462.3438 C 368.9136 463.676 365.8192 464.0626 362.7969 463.8125 C 370.0899 458.4227 376.0312 448.0427 376.0312 432.1094 L 376.0312 80.125 C 376.0312 64.111 370.064 53.6694 362.7656 48.2031 C 364.0987 48.0881 365.4431 47.9851 366.7812 48.1719 M 346.125 58.8594 C 347.6837 58.8941 349.7191 59.1387 351.6562 60 C 355.5305 61.7226 360.0312 64.864 360.0312 80.125 L 360.0312 142.0469 L 227.8594 241.1094 L 180.4219 203.3594 L 345.125 58.9062 C 345.5442 58.8791 345.5349 58.8462 346.125 58.8594 M 80.4375 144.2188 L 360.0312 366.7656 L 360.0312 432.1094 C 360.0312 447.3704 355.5965 450.3012 351.7812 451.9219 C 349.1511 453.0392 346.8011 452.9902 345.2656 452.8594 L 48.2656 176.6562 A 8.0008 8.0008 90 0 0 48.2031 176.6094 C 47.8506 176.2885 47.8523 176.0071 48.1875 175.6719 L 79.5938 144.2656 C 79.8625 143.9969 80.1338 143.9832 80.4375 144.2188 M 360.0312 162.0312 L 360.0312 346.3281 L 240.7969 251.4219 L 360.0312 162.0312 M 115.0781 260.6406 L 153.7969 296.6406 L 80.4531 351.625 A 8.0008 8.0008 90 0 0 80.4375 351.6406 C 80.1416 351.8643 79.8398 351.8396 79.5781 351.5781 L 48.2031 320.2031 C 47.8563 319.8563 47.8728 319.5846 48.2344 319.2656 L 115.0781 260.6406"></path>
                        </svg>
                    </div>
                    <div className={styles.skillsetGridItemDescription}>
                        <Translate id="skillset.vscodeDescription">Like many other developers, VSCode is my go to option for writing code.</Translate>
                    </div>
                </div>
                {/*Arduino*/}
                <div className={styles.skillsetGridItem}>
                    <div className={styles.skillsetGridItemLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="4rem" class="bi bi-arduino" viewBox="0 0 512 512">
                            {/*https://www.vectorlogo.zone/util/preview.html?image=/logos/arduino/arduino-icon.svg */}
                            {/*edited with https://yqnn.github.io/svg-path-editor */}
                            <path d="M 380.528 344.8 c -32.704 0 -60.8 -11.2 -85.28 -33.6 c -15.2 -13.92 -27.728 -30.992 -39.264 -48.736 c -11.52 17.6 -24.064 34.8 -39.264 48.736 c -26.448 24.24 -56.752 35.152 -92.8 33.392 C 55.616 344.32 0 290.288 0 223.904 c 0 -66.56 55.92 -120.704 124.8 -120.704 a 136.16 136.16 90 0 1 96.8 38.048 c 13.216 12.32 24.384 26.56 34.56 41.488 c 10.176 -14.928 21.344 -29.184 34.56 -41.488 a 136.16 136.16 90 0 1 96.8 -38.048 c 68.736 0 124.8 54.144 124.8 120.704 c 0 66.368 -55.616 120.416 -124.08 120.704 a 150.24 150.24 90 0 1 -7.392 0.176 m -99.52 -122.496 c 13.648 22.128 26.88 42.72 43.008 57.504 c 18.208 16.688 37.392 23.552 62.192 22.4 l 1.12 -0.032 c 45.232 0 82.048 -35.2 82.048 -78.08 s -36.8 -78.08 -82.048 -78.08 a 94.08 94.08 90 0 0 -67.776 26.64 c -14.592 13.568 -26.64 30.96 -38.528 49.856 M 124.8 145.808 c -45.232 0 -82.048 35.2 -82.048 78.08 s 36.8 78.08 82.048 78.08 l 1.12 0.032 c 24.8 1.312 44 -5.552 62.192 -22.4 c 16.128 -14.784 29.376 -35.2 43.008 -57.504 c -11.904 -18.88 -23.952 -36.288 -38.528 -49.856 C 173.072 154.08 151.52 145.6 124.8 145.6 m 268.192 62.624 v -23.104 H 368.96 v 23.104 h -23.104 v 23.936 h 23.104 v 23.28 h 24.048 v -23.28 h 23.104 v -23.936 h -23.104 M 90.048 208 h 75.936 v 24.672 H 90.048"></path>
                        </svg>
                    </div>
                    <div className={styles.skillsetGridItemDescription}>
                        <Translate id="skillset.arduinoDescription">I am not an expert in Arduino or Electronics, but my engineering years taught me the basics and a bit more.</Translate>
                    </div>
                </div>
            </div>
        </div>
    );
};