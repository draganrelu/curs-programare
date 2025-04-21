// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introducere.html">Introducere</a></li><li class="chapter-item expanded affix "><li class="part-title">Getting started</li><li class="chapter-item expanded "><a href="01-getting-started/01-programe-si-limbaje-de-programare.html"><strong aria-hidden="true">1.</strong> Programe si limbaje de programare</a></li><li class="chapter-item expanded "><a href="01-getting-started/02-instalare-tooluri.html"><strong aria-hidden="true">2.</strong> Instalare Tooluri necesare</a></li><li class="chapter-item expanded "><a href="01-getting-started/03-hello-world.html"><strong aria-hidden="true">3.</strong> Primul tau program: Hello world!</a></li><li class="chapter-item expanded "><a href="01-getting-started/04-comentarii.html"><strong aria-hidden="true">4.</strong> Comentarii</a></li><li class="chapter-item expanded "><a href="01-getting-started/05-constante-variabile.html"><strong aria-hidden="true">5.</strong> Date: Constante si Variabile</a></li><li class="chapter-item expanded affix "><li class="part-title">Control flow</li><li class="chapter-item expanded "><a href="02-control-flow/01-instructiuni-conditionale.html"><strong aria-hidden="true">6.</strong> Instructiuni conditionale</a></li><li class="chapter-item expanded "><a href="02-control-flow/02-instructiuni-repetitive.html"><strong aria-hidden="true">7.</strong> Instructiuni repetitive</a></li><li class="chapter-item expanded affix "><li class="part-title">Bibliografie</li><li class="chapter-item expanded "><a href="bibliografie.html"><strong aria-hidden="true">8.</strong> Bibliografie</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
