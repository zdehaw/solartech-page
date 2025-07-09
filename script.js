// Navegación suave
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Seleccionar paquete y llenar formulario
function selectPackage(packageType) {
  const packageSelect = document.getElementById("package")
  if (packageSelect) {
    packageSelect.value = packageType
  }
  scrollToSection("cotizacion")
}

// Manejo del menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        hamburger.classList.remove("active")
      })
    })
  }
})

// Manejo del formulario de cotización
document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.getElementById("quoteForm")

  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener datos del formulario
      const formData = new FormData(quoteForm)
      const data = {}

      for (const [key, value] of formData.entries()) {
        data[key] = value
      }

      // Simular envío de cotización
      console.log("Datos de cotización:", data)

      // Mostrar mensaje de éxito
      alert("¡Cotización enviada exitosamente! Te contactaremos en menos de 24 horas.")

      // Limpiar formulario
      quoteForm.reset()

      // En una aplicación real, aquí enviarías los datos a tu servidor
      // fetch('/api/quote', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data)
      // });
    })
  }
})

// Manejo del formulario de login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener datos del formulario
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      // Simular autenticación
      console.log("Intento de login:", { email, password })

      // Validación básica
      if (email && password) {
        alert("¡Login exitoso! Redirigiendo...")
        // En una aplicación real, aquí validarías las credenciales
        // y redirigirías al dashboard
        setTimeout(() => {
          window.location.href = "index.html"
        }, 1000)
      } else {
        alert("Por favor, completa todos los campos.")
      }
    })
  }
})

// Efectos de scroll para navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.background = "#ffffff"
    navbar.style.backdropFilter = "none"
  }
})

// Animaciones al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".feature-card, .package-card, .contact-card")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Inicializar animaciones
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".feature-card, .package-card, .contact-card")
  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Ejecutar una vez al cargar
})

// Validación de formularios en tiempo real
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[required], select[required]")

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (!this.value.trim()) {
        this.style.borderColor = "#ef4444"
      } else {
        this.style.borderColor = "#16a34a"
      }
    })

    input.addEventListener("input", function () {
      if (this.value.trim()) {
        this.style.borderColor = "#16a34a"
      }
    })
  })
})

// Función para mostrar/ocultar información adicional
function toggleInfo(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.display = element.style.display === "none" ? "block" : "none"
  }
}

// Calculadora de ahorro (función adicional)
function calculateSavings(monthlyBill, packageType) {
  let savingsPercentage = 0

  switch (packageType) {
    case "basic":
      savingsPercentage = 0.6 // 60%
      break
    case "premium":
      savingsPercentage = 0.8 // 80%
      break
    default:
      savingsPercentage = 0.7 // 70%
  }

  const billAmount = Number.parseFloat(monthlyBill.replace(/[^0-9.-]+/g, ""))
  const monthlySavings = billAmount * savingsPercentage
  const yearlySavings = monthlySavings * 12

  return {
    monthly: monthlySavings,
    yearly: yearlySavings,
    percentage: savingsPercentage * 100,
  }
}

// Función para formatear números como moneda
function formatCurrency(amount) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(amount)
}

// Manejo de errores global
window.addEventListener("error", (e) => {
  console.error("Error en la aplicación:", e.error)
})

// Función para copiar información de contacto
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Mostrar notificación temporal
    const notification = document.createElement("div")
    notification.textContent = "Copiado al portapapeles"
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #16a34a;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            z-index: 10000;
            animation: fadeInOut 3s ease-in-out;
        `

    document.body.appendChild(notification)

    setTimeout(() => {
      document.body.removeChild(notification)
    }, 3000)
  })
}

// Agregar estilos para la animación de notificación
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-20px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
    }
`
document.head.appendChild(style)

// Inicialización final
console.log("SolarTech Pro - Aplicación cargada correctamente")
