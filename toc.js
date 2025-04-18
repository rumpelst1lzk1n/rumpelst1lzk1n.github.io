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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="000_introduction.html">Einleitung</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="001_getting_help.html"><strong aria-hidden="true">1.</strong> Hilfe bekommen</a></li><li class="chapter-item expanded "><a href="002_buying_stuff.html"><strong aria-hidden="true">2.</strong> Einkaufen</a></li><li class="chapter-item expanded "><a href="03_decisions/030_decisions.html"><strong aria-hidden="true">3.</strong> Entscheidungen</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/010_radio/010_radio.html"><strong aria-hidden="true">3.1.</strong> Funkfernsteuerung</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/010_radio/011_radio_protocols.html"><strong aria-hidden="true">3.1.1.</strong> Protokolle</a></li><li class="chapter-item "><a href="03_decisions/010_radio/012_radio_software.html"><strong aria-hidden="true">3.1.2.</strong> Software</a></li><li class="chapter-item "><a href="03_decisions/010_radio/013_radio_recommendations.html"><strong aria-hidden="true">3.1.3.</strong> Empfehlungen</a></li></ol></li><li class="chapter-item "><a href="03_decisions/020_simulator/020_simulator.html"><strong aria-hidden="true">3.2.</strong> Simulatoren</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/020_simulator/021_flight_modes.html"><strong aria-hidden="true">3.2.1.</strong> Flugmodi</a></li><li class="chapter-item "><a href="03_decisions/020_simulator/022_racing_getting_started.html"><strong aria-hidden="true">3.2.2.</strong> Velocidrone Racing Einstieg</a></li></ol></li><li class="chapter-item "><a href="03_decisions/030_video_systems/030_video_systems.html"><strong aria-hidden="true">3.3.</strong> Videosysteme</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/030_video_systems/031_analog.html"><strong aria-hidden="true">3.3.1.</strong> Analog</a></li><li class="chapter-item "><a href="03_decisions/030_video_systems/032_digital_DJI/0320_DJI_general.html"><strong aria-hidden="true">3.3.2.</strong> DJI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/030_video_systems/032_digital_DJI/0321_DJI_v1.html"><strong aria-hidden="true">3.3.2.1.</strong> erste Generation</a></li><li class="chapter-item "><a href="03_decisions/030_video_systems/032_digital_DJI/0322_DJI_v2.html"><strong aria-hidden="true">3.3.2.2.</strong> zweite Generation</a></li><li class="chapter-item "><a href="03_decisions/030_video_systems/032_digital_DJI/0323_DJI_v3.html"><strong aria-hidden="true">3.3.2.3.</strong> dritte Generation</a></li></ol></li><li class="chapter-item "><a href="03_decisions/030_video_systems/033_digital_HDZero.html"><strong aria-hidden="true">3.3.3.</strong> HDZero</a></li><li class="chapter-item "><a href="03_decisions/030_video_systems/034_digital_caddx.html"><strong aria-hidden="true">3.3.4.</strong> Caddx / Walksnail</a></li><li class="chapter-item "><a href="03_decisions/030_video_systems/035_other_systems.html"><strong aria-hidden="true">3.3.5.</strong> sonstiges</a></li></ol></li><li class="chapter-item "><a href="03_decisions/040_flight_styles/040_flight_styles.html"><strong aria-hidden="true">3.4.</strong> Flugstile</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03_decisions/040_flight_styles/041_pastime.html"><strong aria-hidden="true">3.4.1.</strong> Freizeitvergnügen</a></li><li class="chapter-item "><a href="03_decisions/040_flight_styles/042_racing.html"><strong aria-hidden="true">3.4.2.</strong> Racing</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="04_copters/000_copters.html"><strong aria-hidden="true">4.</strong> Drohne / Quad / Kopter</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="04_copters/010_components/010_components.html"><strong aria-hidden="true">4.1.</strong> Hardware-Bestandteile</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="04_copters/010_components/011_frame.html"><strong aria-hidden="true">4.1.1.</strong> Rahmen / Frame</a></li><li class="chapter-item "><a href="04_copters/010_components/012_flight_controller.html"><strong aria-hidden="true">4.1.2.</strong> Flight Controller</a></li><li class="chapter-item "><a href="04_copters/010_components/013_radio_receiver.html"><strong aria-hidden="true">4.1.3.</strong> RX</a></li><li class="chapter-item "><a href="04_copters/010_components/014_video_transmitter.html"><strong aria-hidden="true">4.1.4.</strong> VTX</a></li><li class="chapter-item "><a href="04_copters/010_components/015_electronic_speed_controller.html"><strong aria-hidden="true">4.1.5.</strong> ESC</a></li><li class="chapter-item "><a href="04_copters/010_components/016_motor.html"><strong aria-hidden="true">4.1.6.</strong> Motor</a></li><li class="chapter-item "><a href="04_copters/010_components/017_propeller.html"><strong aria-hidden="true">4.1.7.</strong> Propeller</a></li><li class="chapter-item "><a href="04_copters/010_components/018_miscellaneous.html"><strong aria-hidden="true">4.1.8.</strong> Sonstige Komponenten</a></li></ol></li><li class="chapter-item "><a href="04_copters/002_classes.html"><strong aria-hidden="true">4.2.</strong> Klassen / Unterteilung</a></li><li class="chapter-item "><a href="04_copters/030_battery/030_battery.html"><strong aria-hidden="true">4.3.</strong> Akkus</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="04_copters/030_battery/031_battery_safety.html"><strong aria-hidden="true">4.3.1.</strong> Sicherheit</a></li><li class="chapter-item "><a href="04_copters/030_battery/032_battery_charger.html"><strong aria-hidden="true">4.3.2.</strong> Ladegerät</a></li><li class="chapter-item "><a href="04_copters/030_battery/033_battery_lifecycle.html"><strong aria-hidden="true">4.3.3.</strong> Lebenszyklus</a></li><li class="chapter-item "><a href="04_copters/030_battery/034_battery_parallel_charging.html"><strong aria-hidden="true">4.3.4.</strong> Paralleles Laden</a></li></ol></li><li class="chapter-item "><a href="04_copters/040_my_first_copter/040_my_first_copter.html"><strong aria-hidden="true">4.4.</strong> Mein erster Kopter</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="04_copters/040_my_first_copter/041_buying_a_copter.html"><strong aria-hidden="true">4.4.1.</strong> Fertig-Kopter kaufen</a></li><li class="chapter-item "><a href="04_copters/040_my_first_copter/042_building_a_copter.html"><strong aria-hidden="true">4.4.2.</strong> Eigenbau</a></li><li class="chapter-item "><a href="04_copters/040_my_first_copter/043_soldering.html"><strong aria-hidden="true">4.4.3.</strong> Löten</a></li><li class="chapter-item "><a href="04_copters/040_my_first_copter/044_build_on_demand.html"><strong aria-hidden="true">4.4.4.</strong> Bauen lassen</a></li></ol></li><li class="chapter-item "><a href="04_copters/050_hd_recording.html"><strong aria-hidden="true">4.5.</strong> HD-Aufnahmen</a></li><li class="chapter-item "><a href="04_copters/060_additional_equipment.html"><strong aria-hidden="true">4.6.</strong> Weitere Ausrüstung</a></li></ol></li><li class="chapter-item expanded "><a href="05_legal/051_general.html"><strong aria-hidden="true">5.</strong> Rechtliches</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="05_legal/052_pilot_license.html"><strong aria-hidden="true">5.1.</strong> Drohnenführerschein</a></li><li class="chapter-item "><a href="05_legal/053_associations.html"><strong aria-hidden="true">5.2.</strong> Vereine und Verbände</a></li><li class="chapter-item "><a href="05_legal/054_insurance.html"><strong aria-hidden="true">5.3.</strong> Versicherungen</a></li><li class="chapter-item "><a href="05_legal/055_frequencies.html"><strong aria-hidden="true">5.4.</strong> Funkfrequenzen</a></li><li class="chapter-item "><a href="05_legal/056_further_links.html"><strong aria-hidden="true">5.5.</strong> Sonstige Links</a></li></ol></li><li class="chapter-item expanded "><a href="006_3d_printing.html"><strong aria-hidden="true">6.</strong> 3D Druck</a></li><li class="chapter-item expanded "><a href="007_beyond_multi_rotors.html"><strong aria-hidden="true">7.</strong> Jenseits des Kopters</a></li><li class="chapter-item expanded "><a href="008_linklist.html"><strong aria-hidden="true">8.</strong> Linkliste</a></li><li class="chapter-item expanded "><a href="009_miscellaneous.html"><strong aria-hidden="true">9.</strong> Sonstiges</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="CONTRIBUTORS.html">Mitwirkende</a></li></ol>';
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
