
/**
 * for class htmlCopmonent
 * @class HtmlComponent 
 * @extends {HTMLElement} -offers a way for Htmlcomponent 
   to inherit elements.
 * Creates an instance of HtmlComponent.
 */

/** 
* @constructor - Calls the superclass constructor (HTMLElement).
* @param {any} - no arguments passed to the constructor.
*/

/**
* @super - Attaches a shadow DOM to the element.
 * @type {ShadowRoot}
 */


class HtmlComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /** 
     * @connectedCallback
    * Sets the HTML content of the shadow DOM.
    * @type {string}
    */
   

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./styles.css">
            <header class="header">
                <div class="header__inner">
                    <div class="header__logo">
                        <svg class="header__shape" viewBox="0 0 89 68" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.88 57.62 4.126 37.897a3 3 0 0 0-2.25 5.562L58.95 66.55a11.062 11.062 0 0 0 2.1.849l.154.062c.351.142.714.213 1.071.22 5.35.912 10.682-2.253 12.34-7.577l14.27-45.83C90.694 8.473 87.456 2.307 81.654.5c-5.8-1.806-11.966 1.432-13.773 7.233l-8.23 26.429L49.03 4.479a5 5 0 1 0-9.415 3.37l14.04 39.23-31.087-31.085a4 4 0 1 0-5.657 5.656l35.97 35.97Z"></path>
                        </svg>
                        <svg class="header__text" viewBox="0 0 652 74" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG paths -->
                        </svg>
                    </div>
                    <div>
                        <button class="header__button" data-header-search>
                            <svg class="header__icon" viewBox="0 96 960 960" xmlns="http://www.w3.org/2000/svg">
                                <path d="M795 963 526 695q-29 22.923-68.459 35.962Q418.082 744 372 744q-115.162 0-195.081-80Q97 584 97 471t80-193q80-80 193.5-80t193 80Q643 358 643 471.15q0 44.85-12.5 83.35Q618 593 593 627l270 268-68 68ZM371.353 650q74.897 0 126.272-52.25T549 471q0-74.5-51.522-126.75T371.353 292q-75.436 0-127.895 52.25Q191 396.5 191 471t52.311 126.75Q295.623 650 371.353 650Z"></path>
                            </svg>
                        </button>
                        <button class="header__button" data-header-settings>
                            <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960">
                                <path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM135 934V813.205q0-44.507 22.828-77.721Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 812.945V934H135Zm94-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <main class="list">
                <div class="list__items" data-list-items></div>
                <div class="list__message" data-list-message>No results found. Your filters might be too narrow.</div>
                <button class="list__button" data-list-button></button>
            </main>
            <dialog class="overlay" data-list-active>
                <div class="overlay__preview">
                    <img class="overlay__blur" data-list-blur src=""/>
                    <img class="overlay__image" data-list-image src=""/>
                </div>
                <div class="overlay__content">
                    <h3 class="overlay__title" data-list-title></h3>
                    <div class="overlay__data" data-list-subtitle></div>
                    <p class="overlay__data overlay__data_secondary" data-list-description></p>
                </div>
                <div class="overlay__row">
                    <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
                </div>
            </dialog>
            <dialog class="overlay" data-search-overlay>
                <div class="overlay__content">
                    <form class="overlay__form" data-search-form id="search">
                        <label class="overlay__field">
                            <div class="overlay__label">Title</div>
                            <input class="overlay__input" data-search-title name="title" placeholder="Any"></input>
                        </label>
                        <label class="overlay__field">
                            <div class="overlay__label">Genre</div>
                            <select class="overlay__input overlay__input_select" data-search-genres name="genre"></select>
                        </label>
                        <label class="overlay__field">
                            <div class="overlay__label">Author</div>
                            <select class="overlay__input overlay__input_select" data-search-authors name="author"></select>
                        </label>
                    </form>
                    <div class="overlay__row">
                        <button class="overlay__button" data-search-cancel>Cancel</button>
                        <button class="overlay__button overlay__button_primary" type="submit" form="search">Search</button>
                    </div>
                </div>
            </dialog>
            <dialog class="overlay" data-settings-overlay>
                <div class="overlay__content">
                    <form class="overlay__form" data-settings-form id="settings">
                        <label class="overlay__field">
                            <div class="overlay__label">Theme</div>
                            <select class="overlay__input overlay__input_select" data-settings-theme name="theme"></select>
                        </label>
                    </form>
                </div>
            </dialog>
        `;
    }
}

/**
 * for customElements
 * Defines the HtmlComponent as a custom element.
 * @param {string} name - The name of the custom element.
 */


customElements.define('html-component', HtmlComponent);
