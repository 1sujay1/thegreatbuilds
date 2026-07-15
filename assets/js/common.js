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
    <!-- <span class="text-[9px] uppercase tracking-widest text-brand-gold"
      >Builders &amp; Developers</span
    > -->
  </div>
</a>

          <!-- Desktop Nav Items -->
          <nav class="hidden lg:flex items-center space-x-8">
          <a
              href="/index.html"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
              >Home</a
            >
          <a
              href="/allproject"
                            class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
              >Projects</a
            >
            <a
              href="/gallery"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
              >Gallery</a
            >
            <a
              href="/about"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
              >About Us</a
            >
            <a
              href="/contact"
              class="text-xs uppercase font-semibold text-brand-cream hover:text-brand-gold tracking-widest transition-colors"
              >Contact</a
            >
           
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
              >Ongoing Projects</a
            >
            <a
              href="#projects-section"
              onclick="filterProjects('upcoming'); toggleMobileMenu()"
              class="block text-xs uppercase tracking-wider text-brand-cream hover:text-brand-gold py-1.5"
              >Upcoming Projects</a
            >
            <a
              href="#projects-section"
              onclick="filterProjects('completed'); toggleMobileMenu()"
              class="block text-xs uppercase tracking-wider text-brand-cream hover:text-brand-gold py-1.5"
              >Completed Projects</a
            >
          </div>
        </div>
        <a
          href="#gallery"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
          >Gallery</a
        >
        <a
          href="#why-choose-us"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
          >About Us</a
        >
        <a
          href="#faq"
          onclick="toggleMobileMenu()"
          class="block text-sm uppercase tracking-wider text-brand-cream hover:text-brand-gold py-2"
          >FAQ</a
        >
        <div class="pt-4 border-t border-brand-gold/10 flex flex-col gap-3">
          <a
            href="tel:+918217855041"
            class="text-sm tracking-wider font-semibold text-brand-cream flex items-center gap-2"
          >
            <i class="fa-solid fa-phone text-brand-gold"></i>
            +91 82178 55041
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
    </header>`

const footerHTML= `   <footer class="bg-forest-dark text-cream/70 py-20 border-t border-cream/5">
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16"
      >
        <!-- Logo & Social Column (Col span 4) -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <!-- Logo Winged emblem SVG representation matching image_dd2488.png -->
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
      class="font-serif text-lg font-bold tracking-wider text-brand-dark uppercase leading-tight"
      >The Great Builds</span
    >
    <!-- <span class="text-[9px] uppercase tracking-widest text-brand-gold"
      >Builders &amp; Developers</span
    > -->
  </div>
</a>
          <p class="text-xs text-cream/50 leading-relaxed max-w-sm">
            Delivering highly secure, top-tier gated plotting communities and
            luxury construction across Bangalore's prospective growth avenues.
          </p>
          <!-- Social channels -->
          <div class="flex items-center gap-4 mt-2">
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-olive hover:text-cream hover:border-olive transition duration-300"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-olive hover:text-cream hover:border-olive transition duration-300"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram text-sm"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-olive hover:text-cream hover:border-olive transition duration-300"
              aria-label="YouTube"
            >
              <i class="fa-brands fa-youtube text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Projects Column (Col span 2.5) -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-cream">
            Projects
          </h4>
          <div class="flex flex-col gap-3 text-xs">
            <a href="/project" class="hover:text-olive transition">Royal Greens</a>
            <a href="/project" class="hover:text-olive transition">Orchard Valley</a>
            <a href="/project" class="hover:text-olive transition">Shankar Enclave</a>
            <a href="/project" class="hover:text-olive transition">Anubhav Megacity</a>
          </div>
        </div>

        <!-- Company Column (Col span 2.5) -->
        <div class="lg:col-span-2 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-cream">
            Company
          </h4>
          <div class="flex flex-col gap-3 text-xs">
            <a href="/about" class="hover:text-olive transition">About Us</a>
            <a href="/gallery" class="hover:text-olive transition">Gallery</a>
            <a href="/blog" class="hover:text-olive transition">Blog</a>
            <a href="/contact" class="hover:text-olive transition">Contact</a>
           
          </div>
        </div>

        <!-- Headquarters Contact Details (Col span 3) -->
        <div class="lg:col-span-3 flex flex-col gap-5">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-cream">
            Headquarters
          </h4>
          <div class="flex flex-col gap-4 text-xs">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot text-olive mt-0.5"></i>
              <span class="leading-relaxed">
                No. 762, 7th Cross Rd, Sector A, Yelahanka New Town, Bengaluru,
                Karnataka - 560064
              </span>
            </div>
            <a
              href="tel:+918217855041"
              class="flex items-center gap-3 hover:text-olive transition"
            >
              <i class="fa-solid fa-phone text-olive"></i>
              <span>+91 82178 55041</span>
            </a>
            <a
              href="mailto:thegreatbuilds123@gmail.com"
              class="flex items-center gap-3 hover:text-olive transition break-all"
            >
              <i class="fa-solid fa-envelope text-olive"></i>
              <span>thegreatbuilds123@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom copyright / Privacy Policy line -->
      <hr class="border-cream/5 mb-8 max-w-7xl mx-auto" />
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-cream/45 uppercase"
      >
        <div>© 2026 The Great Builds. All rights reserved.</div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-cream transition">Privacy Policy</a>
          <a href="#" class="hover:text-cream transition">Terms of Use</a>
          <a href="#" class="hover:text-cream transition">Disclaimer</a>
        </div>
      </div>
    </footer>`    
document.querySelector('body').innerHTML += modalHTML;
document.getElementById("header-container").innerHTML = headerHTML;
document.querySelector('.footer-container').innerHTML += footerHTML;

// Contact Us Popup Modal Controls
function openContactModal() {
  document.getElementById("common-contact-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("common-contact-modal").classList.add("hidden");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  var bookingForm = document.getElementById("common-contact-us-form");
  if (!bookingForm) return;
  var successMsg = document.getElementById("common-modal-success_message");
  var errorMsg = document.getElementById("common-modal-error_message");
  var submitBtn = document.getElementById("common-modal-contact_form_btn");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (successMsg) {
      successMsg.textContent = "";
      successMsg.style.display = "none";
    }
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
    }
    console.log("Form data:", bookingForm);
    var name = bookingForm.name.value.trim();
    var email = bookingForm.email.value.trim();
    var mobile = bookingForm.querySelector("[name=phone]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var message = bookingForm.message?.value?.trim() || "";
    console.log({ name, email, mobile, message });
    console.log("Submitting form...");
    console.log("Using BaseURL:", BaseURL);
    console.log(submitBtn);
    if (!name || !email || !mobile) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "#d32f2f";
        errorMsg.textContent = "Please fill all required fields.";
      }
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Submitting...";
    fetch(`${BaseURL}/api/v1/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "THE_GREAT_BUILDS",
        name,
        email,
        phone: mobile,
        message,
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
          successMsg.style.color = "#388e3c";
          successMsg.textContent = "Thank you! Your request has been sent.";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.textContent =
            err.message || "Submission failed. Please try again.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
