/* ==========================================================================
   THE GREAT BUILDS - COMMON LAYOUT TEMPLATES
   ========================================================================== */

const modalHTML = `<div
      id="common-contact-modal"
      class="fixed inset-0 z-50 hidden overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onclick="closeContactModal()"
      ></div>

      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:p-6"
      >
        <div
          class="relative transform overflow-hidden bg-brand-warmBeige text-left shadow-2xl transition-all w-full max-w-xl border border-brand-darkGreen/10 p-8"
        >
          <div class="absolute right-4 top-4">
            <button
              onclick="closeContactModal()"
              class="text-brand-darkGreen hover:text-brand-gold transition-colors focus:outline-none p-2"
            >
              <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>

          <div class="mb-6">
            <span
              class="text-[10px] tracking-widest text-brand-gold font-bold uppercase block mb-1"
              >Get In Touch</span
            >
            <h3 class="font-serif text-3xl text-brand-darkGreen font-semibold">
              Contact Our Experts
            </h3>
            <p class="text-xs text-gray-500 mt-2">
              Fill out your inquiry preferences and our site consultants will
              respond within 2 hours.
            </p>
          </div>

          <form
            id="common-contact-us-form"
            class="space-y-4"
          >
            <div>
              <label
                class="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1"
                >Your Full Name *</label
              >
              <input
                type="text"
                required
                name="name"
                placeholder="John Doe"
                class="w-full px-4 py-3 bg-white border border-brand-darkGreen/10 text-brand-textCharcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
              />
            </div>
            <div>
              <label
                class="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1"
                >Email Address *</label
              >
              <input
                type="email"
                required
                name="email"
                placeholder="john@example.com"
                class="w-full px-4 py-3 bg-white border border-brand-darkGreen/10 text-brand-textCharcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
              />
            </div>
            <div>
              <label
                class="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1"
                >Phone Number *</label
              >
              <input
                type="tel"
                required
                name="phone"
                placeholder="Please enter your mobile"
                class="w-full px-4 py-3 bg-white border border-brand-darkGreen/10 text-brand-textCharcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
              />
            </div>
            <div>
              <label
                class="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1"
                >Message</label
              >
              <textarea
                rows="3"
                name="message"
                placeholder="I am looking to invest in North Bangalore, please share layout plans..."
                class="w-full px-4 py-3 bg-white border border-brand-darkGreen/10 text-brand-textCharcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              id="common-modal-contact_form_btn"
              class="w-full bg-brand-darkGreen hover:bg-brand-gold text-white hover:text-brand-darkGreen font-bold py-3.5 text-xs uppercase tracking-widest transition-colors duration-300"
            >
              Submit Inquiry Request
            </button>
            <div
              id="common-modal-success_message"
              class="mt-2"
              style="margin-top: 10px"
            ></div>
            <div id="common-modal-error_message" class="error"></div>
          </form>
        </div>
      </div>
    </div>`;

const headerHTML = `   <header
      class="fixed top-0 left-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-gold/10 transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Winged Circular Logo -->
          <a href="#" class="flex items-center space-x-3 group">
            <div
              class="w-14 h-14 bg-transparent border-2 border-brand-gold rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-12"
            >
              <img 
                src="/assets/images/Anubhav_megacity/logonew1.svg" 
                alt="The Great Builds Logo" 
                class="w-full h-full object-cover scale-100 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div class="flex flex-col">
              <span
                class="font-serif text-lg font-bold tracking-wider text-brand-cream uppercase leading-tight"
                >The Great Builds</span
              >
            </div>
          </a>

          <!-- Desktop Nav Items -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >Home</a>
            <a
              href="/project"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >Project</a>
            <a
              href="/gallery"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >Gallery</a>
            <a
              href="/nri"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >NRI</a>

            <a
              href="/about"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >About Us</a>
            <a
              href="/contact"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
            >Contact</a>
          </nav>

          <!-- Right Side: Phone & Contact Callout -->
          <div class="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+9174118 54822"
              class="text-xs tracking-wider font-semibold text-brand-cream hover:text-brand-gold transition-colors flex items-center gap-2"
            >
              <i class="fa-solid fa-phone text-brand-gold"></i>
              +91 74118 54822
            </a>
 
            <a
              onclick="openContactModal()"
              style="cursor: pointer;"
              class="bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-5 py-2.5 rounded-sm font-semibold text-xs tracking-widest uppercase transition-all shadow-md"
            >
              Contact Us
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button
              id="mobile-menu-btn"
              class="text-brand-cream hover:text-brand-gold focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div
        id="mobile-menu"
        class="hidden lg:hidden bg-brand-dark/95 border-t border-brand-gold/10 px-4 pt-4 pb-6 space-y-3"
      >
        <div class="border-b border-brand-gold/10 pb-2">
          <button
            type="button"
            onclick="toggleMobileProjects()"
            class="w-full flex items-center justify-between text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
          >
            <span>Our Projects</span>
            <i
              id="mobile-projects-icon"
              class="fa-solid fa-chevron-down text-[10px] text-brand-gold transition-transform duration-200"
            ></i>
          </button>
          <div
            id="mobile-projects-sub"
            class="hidden mt-2 space-y-1 pl-4 border-l border-brand-gold/20"
          >
            <a
              href="#projects-section"
              onclick="filterProjects('ongoing'); toggleMobileMenu()"
              class="block text-xs uppercase tracking-wider text-brand-cream hover:text-brand-gold py-1.5"
            >Ongoing Projects</a>
            <a
              href="#projects-section"
              onclick="filterProjects('upcoming'); toggleMobileMenu()"
              class="block text-xs uppercase tracking-wider text-brand-cream hover:text-brand-gold py-1.5"
            >Upcoming Projects</a>
            <a
              href="#projects-section"
              onclick="filterProjects('completed'); toggleMobileMenu()"
              class="block text-xs uppercase tracking-wider text-brand-cream hover:text-brand-gold py-1.5"
            >Completed Projects</a>
          </div>
        </div>
        <a
          href="#gallery"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
        >Gallery</a>

         <a
          href="#nri"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
        >NRI</a>
        <a
          href="#why-choose-us"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
        >About Us</a>
        <a
          href="#faq"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
        >FAQ</a>
        <div class="pt-4 border-t border-brand-gold/10 flex flex-col gap-3">
          <a
            href="tel:+917411854822"
            class="text-sm tracking-wider font-semibold text-brand-cream flex items-center gap-2"
          >
            <i class="fa-solid fa-phone text-brand-gold"></i>
            +91 74118 54822
          </a>
          <a
            href="#enquiry-section"
            onclick="toggleMobileMenu()"
            class="bg-brand-gold text-brand-dark text-center py-2.5 rounded-sm font-semibold text-xs tracking-widest uppercase"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>`;
const footerHTML = `   <footer class="bg-brand-dark text-gray-300 pt-16 pb-8 border-t border-brand-gold/10">
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-8"
      >
        <!-- Logo & Social Column -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <a href="#" class="flex items-center space-x-3 group">
            <div
              class="w-14 h-14 bg-transparent border-2 border-brand-gold rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-12"
            >
              <img 
                src="/assets/images/Anubhav_megacity/logonew1.svg" 
                alt="The Great Builds Logo" 
                class="w-full h-full object-cover scale-100 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div class="flex flex-col">
              <span
                class="font-serif text-lg font-bold tracking-wider text-white uppercase leading-tight"
                >The Great Builds</span
              >
            </div>
          </a>
          <p class="text-xs text-gray-400 leading-relaxed max-w-sm">
            Delivering highly secure, top-tier gated plotting communities and
            luxury construction across Bangalore's prospective growth avenues.
          </p>
          <div class="flex items-center gap-4 mt-2">
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition duration-300"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition duration-300"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram text-sm"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition duration-300"
              aria-label="YouTube"
            >
              <i class="fa-brands fa-youtube text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Projects Column -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Projects
          </h4>
          <div class="flex flex-col gap-3 text-xs">
            <a href="/project" class="hover:text-brand-gold transition">Royal Greens</a>
            <a href="/project" class="hover:text-brand-gold transition">The CountrySide</a>
            <a href="/project" class="hover:text-brand-gold transition">Shankar Enclave</a>
            <a href="/project" class="hover:text-brand-gold transition">Anubhava Megacity</a>
          </div>
        </div>

        <!-- Company Column -->
        <div class="lg:col-span-2 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Company
          </h4>
          <div class="flex flex-col gap-3 text-xs">
            <a href="/about" class="hover:text-brand-gold transition">About Us</a>
            <a href="/gallery" class="hover:text-brand-gold transition">Gallery</a>
            <a href="#" class="hover:text-brand-gold transition">Blog</a>
            <a href="/contact" class="hover:text-brand-gold transition">Contact</a>
          </div>
        </div>

        <!-- Headquarters Contact Details -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Headquarters
          </h4>
          <div class="flex flex-col gap-4 text-xs">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot text-brand-gold mt-0.5"></i>
              <span class="leading-relaxed">
                No. 762, 7th Cross Rd, Sector A, Yelahanka New Town, Bengaluru,
                Karnataka - 560064
              </span>
            </div>
            <a
              href="tel:+917411854822"
              class="flex items-center gap-3 hover:text-brand-gold transition"
            >
              <i class="fa-solid fa-phone text-brand-gold"></i>
              <span>+91 74118 54822</span>
            </a>
            <a
              href="mailto:info@thegreatbuilds.com"
              class="flex items-center gap-3 hover:text-brand-gold transition break-all"
            >
              <i class="fa-solid fa-envelope text-brand-gold"></i>
              <span>info@thegreatbuilds.com</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom copyright line -->
      <hr class="border-white/10 mb-4 max-w-7xl mx-auto" />
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-gray-400 uppercase"
      >
        <div>© 2026 The Great Builds. All rights reserved.</div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms of Use</a>
          <a href="#" class="hover:text-white transition">Disclaimer</a>
        </div>
      </div>
    </footer>`;

const stickySocialHTML = `<div id="sticky-social-bar" class="fixed top-1/2 -translate-y-1/2 right-0 z-50 flex flex-col space-y-1.5 shadow-2xl">
  <a href="https://wa.me/917411854822" target="_blank" rel="noopener" aria-label="WhatsApp" class="w-11 h-11 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-l-2xl flex items-center justify-center shadow-lg transform hover:-translate-x-2 transition-all duration-300 group">
    <i class="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white rounded-l-2xl flex items-center justify-center shadow-lg transform hover:-translate-x-2 transition-all duration-300 group">
    <i class="fa-brands fa-instagram text-2xl group-hover:scale-110 transition-transform"></i>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="w-11 h-11 sm:w-13 sm:h-13 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-l-2xl flex items-center justify-center shadow-lg transform hover:-translate-x-2 transition-all duration-300 group">
    <i class="fa-brands fa-facebook-f text-xl group-hover:scale-110 transition-transform"></i>
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" class="w-11 h-11 sm:w-13 sm:h-13 bg-[#FF0000] hover:bg-[#E60000] text-white rounded-l-2xl flex items-center justify-center shadow-lg transform hover:-translate-x-2 transition-all duration-300 group">
    <i class="fa-brands fa-youtube text-xl group-hover:scale-110 transition-transform"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="w-11 h-11 sm:w-13 sm:h-13 bg-[#0A66C2] hover:bg-[#0854A0] text-white rounded-l-2xl flex items-center justify-center shadow-lg transform hover:-translate-x-2 transition-all duration-300 group">
    <i class="fa-brands fa-linkedin-in text-xl group-hover:scale-110 transition-transform"></i>
  </a>
</div>`;

const scrollToTopHTML = `<button id="scroll-to-top-btn" onclick="scrollToTop()" aria-label="Scroll to top" class="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-brand-gold text-brand-dark rounded-full shadow-2xl border-2 border-white/40 flex items-center justify-center opacity-0 pointer-events-none translate-y-6 transition-all duration-500 hover:bg-brand-goldLight hover:scale-110 group">
  <span class="absolute inset-0 rounded-full bg-brand-gold/40 animate-ping pointer-events-none"></span>
  <i class="fa-solid fa-arrow-up text-lg font-bold group-hover:animate-bounce relative z-10"></i>
</button>`;

/* ==========================================================================
   DOM INJECTION ENGINE
   ========================================================================== */

function injectCommonLayout() {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container") || document.querySelector('.footer-container');

  // Inject Header without resetting global HTML contents
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
    initializeMobileMenu(); // Bind mobile events once injected
  }

  // Inject Footer smoothly
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }

  // Append modal structure safely to layout bottom without breaking listeners
  if (!document.getElementById("common-contact-modal")) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // Append sticky right social media bar
  if (!document.getElementById("sticky-social-bar")) {
    document.body.insertAdjacentHTML('beforeend', stickySocialHTML);
  }

  // Append floating scroll-to-top button
  if (!document.getElementById("scroll-to-top-btn")) {
    document.body.insertAdjacentHTML('beforeend', scrollToTopHTML);
  }

  // Initialize form validation engine
  initializeContactForm();

  // Initialize scroll reveal animations for all content sections
  initializeScrollReveal();
}

window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scroll-to-top-btn');
  if (scrollBtn) {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-6');
      scrollBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      scrollBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-6');
    }
  }
});

function initializeScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
  );

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("active");
    } else {
      revealObserver.observe(el);
    }
  });

  // Guarantees all sections display after 400ms even if observer doesn't trigger
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
  }, 400);
}

/* ==========================================================================
   POPUP MODAL INTERACTION INTERFACES
   ========================================================================== */

window.openContactModal = function() {
  const modal = document.getElementById("common-contact-modal");
  if (modal) modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

window.closeContactModal = function() {
  const modal = document.getElementById("common-contact-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
};

/* ==========================================================================
   MOBILE DRAWER NAVIGATION LOGIC
   ========================================================================== */

function initializeMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function() {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) mobileMenu.classList.add("hidden");
};

window.toggleMobileProjects = function() {
  const subMenu = document.getElementById("mobile-projects-sub");
  const icon = document.getElementById("mobile-projects-icon");
  if (subMenu) subMenu.classList.toggle("hidden");
  if (icon) icon.classList.toggle("rotate-180");
};

/* ==========================================================================
   FORM HANDLING & DATA TRANSMISSION ENGINE
   ========================================================================== */

function initializeContactForm() {
  // Bind both common modal form and project-specific enquiry forms
  const formsToBind = document.querySelectorAll("form[id*='contact'], form[id^='project-']");
  
  formsToBind.forEach(function (bookingForm) {
    if (bookingForm.dataset.bound) return;
    bookingForm.dataset.bound = "true";

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var successMsg = bookingForm.querySelector("#common-modal-success_message, #project-form-status");
      var errorMsg = bookingForm.querySelector("#common-modal-error_message, #project-form-status");
      var submitBtn = bookingForm.querySelector("button[type=submit]");

      if (successMsg) { successMsg.textContent = ""; successMsg.style.display = "none"; }
      if (errorMsg && errorMsg !== successMsg) { errorMsg.textContent = ""; errorMsg.style.display = "none"; }

      var name = bookingForm.name?.value?.trim() || "";
      var email = bookingForm.email?.value?.trim() || "";
      var mobile = bookingForm.querySelector("[name=phone]")?.value?.trim() || "";
      var message = bookingForm.message?.value?.trim() || "";

      if (!name || !email || !mobile) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.textContent = "Please fill all required fields (Name, Email, Phone).";
        }
        return;
      }

      var currentBaseURL = (typeof BaseURL !== 'undefined') ? BaseURL : window.location.origin;

      if (submitBtn) {
        submitBtn.disabled = true;
        var originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = "Submitting Inquiry...";
      }

      fetch(`${currentBaseURL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project: "THE_GREAT_BUILDS",
          name: name,
          email: email,
          phone: mobile,
          message: message,
        }),
      })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.style.color = "#15803d";
          successMsg.textContent = "Thank you! Your project inquiry has been successfully sent. Our manager will contact you within 24 hours.";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#b91c1c";
          errorMsg.textContent = err.message || "Submission failed. Please check your connection.";
        }
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      });
    });
  });
}

/* ==========================================================================
   INITIALIZATION TRIGGER
   ========================================================================== */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectCommonLayout);
} else {
  injectCommonLayout();
}