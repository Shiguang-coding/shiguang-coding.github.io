function initFooterAnimal() {
    const footerBar = document.querySelector('#footer-bar');
    if (!footerBar) return console.error('找不到指定元素');

    const footerAnimal = document.createElement('div');
    footerAnimal.id = 'footer-animal';
    footerAnimal.innerHTML = `
        <img class="animal entered loaded"
            src="https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/473503.webp"
            alt="动物" />
    `;
    
    footerBar.insertAdjacentElement('beforebegin', footerAnimal);

    const style = document.createElement('style');
    style.textContent = `
        #footer-animal {
            position: relative;
        }
        #footer-animal::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 36px;
            background: url(https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/351933.webp) repeat center / auto 100%;
            box-shadow: 0 4px 7px rgba(0,0,0,.15);
        }
        .animal {
            position: relative;
            max-width: min(974px, 100vw);
            margin: 0 auto;
            display: block;
        }
        #footer-bar {
            margin-top: 0 !important;
        }
        @media screen and (max-width: 1023px) {
            #footer-animal::before {
                height: 4vw;
            }
        }
        [data-theme=dark] #footer-animal {
            filter: brightness(.8);
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', initFooterAnimal);
document.addEventListener('pjax:success', initFooterAnimal);